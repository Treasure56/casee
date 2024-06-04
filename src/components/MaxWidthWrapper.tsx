import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type MaxWidthWrapperProps = {
  children: ReactNode;
  className?: string;
};
export default function MaxWidthWrapper({
  className,
  children,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("h-full mx-auto w-full  px-2.5 md:px-20", className)}>
      {children}
    </div>
  );
}
