import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import sharp from "sharp";
import { db } from "@/db";
import { FINISHES } from "@/validators/option-validators";
 
const f = createUploadthing();

 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(z.object({configId: z.string().optional()}))
    .middleware(async ({ input }) => {
      return {input}
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const {configId} = metadata.input;

      const res = await fetch(file.url)
      const buffer = await  res.arrayBuffer();
      const imgMetadata = await sharp(buffer).metadata();
      const {width, height} = imgMetadata;

      if(!configId){
        const configuration = await db.configuration.create({
          data: {
            imageUrl: file.url,
            height: height || 500,
            width: width || 500,
            // cropedImageUrl: file.url,
            finish: "smooth",

          },
        })

        return {configId: configuration.id};
      }else{
        const updatedConfigurationb = await db.configuration.update({
          where:{
            id: configId
          },
          data: {
            cropedImageUrl: file.url
          },
        })
        return { configId: updatedConfigurationb.id };
       
      }
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;