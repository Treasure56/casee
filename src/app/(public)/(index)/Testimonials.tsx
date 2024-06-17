/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Stars from "@/components/ui/Stars";

import TestimonialCard from "./TestimonialCard";
export default function Testimonials() {
  return (
    <MaxWidthWrapper className=" flex flex-col items-center  sm:gap-32">
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
        <h2 className=" order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:6xl text-gray-900">
          What our <span className="relative px-2">Customers</span> say
        </h2>
      </div>
      <Stars />
      {testimonialDummys.map((testimonialDummy) => (
        <TestimonialCard key={testimonialDummy.name} {...testimonialDummy} />
      ))}
    </MaxWidthWrapper>
  );
}

const testimonialDummys = [
  {
    name: "Jonathan",
    image: "/images/users/user1.jpg",
    description: `The case was very easy to use. I can't recommend it more. I would definitely recommend it to anyone. I can't wait to use it again. Happy with the service. I will definitely be using it again. The image was very clear and the case was very durable. I would recommend it to anyone.`,
  },
  {
    name: "Jake",
    image: "/images/users/user1.jpg",
    description: ` I like how it fits my phone. I can't wait to use it again. I would recommend it to anyone. The image was very clear and the case was very durable. I would recommend it to anyone.`,
  },
  {
    name: "moon",
    image: "/images/users/user1.jpg",
    description: ` I like how it fits my phone. I can't wait to use it again. I would recommend it to anyone. The image was very clear and the case was very durable. I would recommend it to anyone.`,
  },
];
