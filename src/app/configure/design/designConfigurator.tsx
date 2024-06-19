'use client';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {Rnd} from "react-rnd"
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import {RadioGroup} from "@headlessui/react"
import { useState } from "react";
import { COLORS } from "@/validators/option-validators";
import { Preahvihear } from "next/font/google";


type DesignConfiguratorprops = {
  configId: string;
  imageUrl: string;
  ImageDimensions: { width: number; height: number };
};
export default function DesignConfigurator({
  configId,
  imageUrl,
  ImageDimensions,
}: DesignConfiguratorprops) {

  const [options, setOptions] = useState<{
    color:(typeof COLORS)[number];
  }>({
    color: COLORS[0]
  })
  return (
    <div className=" relative mt-20 grid grid-cols-3 mb-20 pb-20">
      <div className="relative h-[73.5rem] overflow-hidden col-span-2 w-full max-w-4xl  flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary  focus: ring-offdet">
        <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
          <AspectRatio
            ratio={896 / 1831}
            className=" pointer-events-none relative  z-50 aspect-[896/1831] w-full"
          >
            <Image
              fill
              alt="phone image"
              src="/images/phone-template.png"
              className=" pointer-events-none z-50 select-none"
            />
          </AspectRatio>
          <div className="absolute inset-0 z-40 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.3)]" />
          <div
            className={cn(
              " absolute inset-0  left-[3px] top-px right-[3px] bottom-px rounded-[32px]",
              `bg-zinc-950`
            )}
          />
        </div>
        <Rnd default={{
            x: 150,
            y: 205,
            height: ImageDimensions.height/4,
            width: ImageDimensions.width/4
        }}
        className=" absolute z-20 border-[3px] border-primary"
         lockAspectRatio
        resizeHandleComponent={{
            bottomRight:<HandleComponent />,
            bottomLeft:<HandleComponent />,
            topRight:<HandleComponent />,
            topLeft:<HandleComponent />,
        }}
        >
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            fill
            alt="your image"
            className=" pointer-events-none z-50"
          />
        </div>
        </Rnd>
      </div>

      <div className=" h-[37.5rem] flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div aria-hidden='true' className=" absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none" />

          <div className=" px-8 pb-12 pt-8">
            <h2 className="tracking-tight font-bold text-3xl ">Customize your case</h2>
            <div className=" w-full h-px bg-zinc-200 my-6" />
            <div className="relative mt-4 h-full flex flex-col justify-between">
              <RadioGroup
               value={options.color}
                onChange={(val) => {
                  setOptions((prev) =>({
                ...prev,
                color: val,
               }))

              }}></RadioGroup>

            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
