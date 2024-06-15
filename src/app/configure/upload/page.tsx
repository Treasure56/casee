/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

export default function Page() {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const  [uploadProgress, setUploadProgress] = useState<number>(0);

  const onDropRejected = () => {};
  const onDropAccepted = () => {};
  console.log("accepted");

  const isUploading = false;
  const [ispending, startTransition] = useTransition();
  return (
    <div
      className={cn(
        "relative h-4 flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:rounded-2xl flex justify-center items-center flex-col ",
        {
          " ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col justify-center w-full ">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png*": [".png"],
            "image/jpg*": [".jpg"],
            "image/jpeg*": [".jpeg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex-col items-center flex justify-center "
              {...getRootProps()}
            >
              <input {...getInputProps()} />

              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500" />
              ) : isUploading || ispending ? (
                <Loader2 className=" animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image className=" h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-zinc-700  text-sm">
                {isUploading ? (
                  <div className="flex flex-col items-center ">
                    <p>Uploading...</p>
                    <Progress value={uploadProgress} className="mt-2 w-40 h-2 bg-gray-300" />
                  </div>
                ) : ispending ? (
                  <div className=" flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                 <p> <span className=" font-semibold">Drop file</span>
                 to upload
                 </p>
                ) : (
                  <p><span className=" font-semibold">Click to upload</span> {' '} or drag an drop</p>
                )}
              </div>
              {ispending ? null : <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
}
