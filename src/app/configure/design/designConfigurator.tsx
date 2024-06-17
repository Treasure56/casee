import { AspectRatio } from "@/components/ui/aspect-ratio";
import NextImage from "next/navigation";

type DesignConfiguratorprops = {
    configId: string;
    imageUrl: string;
    ImageDimensions: {width: number, height: number}
}
export default function DesignConfigurator({configId, imageUrl, ImageDimensions}: DesignConfiguratorprops) {
    return (
        <div className=" relative mt-20 grid grid-cols-3 mb-20 pb-20">
            <div className="relative h-[73.5rem] overflow-hidden col-span-2 w-full max-w-4xl  flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary  focus: ring-offdet">
                <div className="relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]">
                <AspectRatio ratio={896/1831} className=" pointer-events-none relative  z-50 aspect-[896/1831] w-full" >
                <NextImage fill alt="phone image" src='/images/phone.png' className=" pointer-events-none z-50 select-none" />
                </AspectRatio>
                </div>
            </div>
        </div>
    );
}