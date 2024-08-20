/* eslint-disable @next/next/no-img-element */
"use client";

import { CaseColor } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { AspectRatio } from "./aspect-ratio";
import { cn } from "@/lib/utils";

export default function PhonePreview({
  croppedImageUrl,
  color,
}: {
  croppedImageUrl: string;
  color: CaseColor;
}) {
  const ref = useRef<HTMLImageElement>(null);

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: 0,
    width: 0,
  });

  const handleResize = () =>{
        
    if(!ref.current) return
    const  {width, height} = ref.current.getBoundingClientRect()
    setRenderedDimensions({width, height})
  }

  useEffect(() =>{
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
   
  },[ref.current])

  let caseBackgroundColoor = "bg-zinc-950";
  if (color === "blue") caseBackgroundColoor = "bg-blue-950";
  if (color === "rose") caseBackgroundColoor = "bg-rose-950";
  return (
    <AspectRatio ref={ref} ratio={3000 / 2001} className="relative">
      <div
        className="absolute z-20 scale-[1.0352]"
        style={{
          left:
            renderedDimensions.width / 2 -
            renderedDimensions.width / (1216 / 121),
          top: renderedDimensions.height / 6.22,
        }}
      >
        <img
          width={renderedDimensions.width / (3000 / 637)}
          className={cn(
            "phone-skew relative z-20 rounded-t-[15px] rounded-b-[10px] md:rounded-t-[30px] md:rounded-b-[20px]",
            caseBackgroundColoor
          )}
          src={croppedImageUrl}
        />
      </div>

      <div className="relative h-full z-40">
        <img
          src="/images/clearphone.png"
          alt=""
          className="pointer-events-none h-full w-full antialiased rounded-md"
        />
      </div>
    </AspectRatio>
  );
}
