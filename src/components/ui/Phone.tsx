/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type PhoneProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  dark?: boolean;
};
export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/images/phone-template-dark-edges.png"
            : "/images/phone-template-white-edges.png"
        }
        alt=""
        className="pointer-event-none select-none"
      />

      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          alt=" overlaying phone image"
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
