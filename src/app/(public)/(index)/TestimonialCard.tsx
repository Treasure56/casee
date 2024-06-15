import { Check } from "lucide-react";
import Image from "next/image";

export type TestimonialsProps = {

    description: String,
    name: String,
    image: String,
}
export default function TestimonialCard({
    description, image, name}: TestimonialsProps) {
    return (
        <div>
            <div className="text-lg leading-8">
                <p>
                    &quot;{description}&quot;
                </p>
            </div>
            <div className="flex gap-2 ">
                <Image width={100} height={100} src="/images/users/user1.jpg" alt=""  className="rounded-full h-12 w-12 object-cover" />
                <div className="flex flex-col">
                    <p className="font-semibold ">{name}</p>
                    <div className="flex gap-1 5 items-center text-zinc-600">
                        <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    </div>
                </div>
            </div>
        </div>
    );
}