/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RoundImg from "@/components/home/RoundImg";
import Phone from "@/components/ui/Phone";
import { Check, Star } from "lucide-react";
import Image from "next/image";
import HeroImg from "./HeroImg";
import Testimonials from "./Testimonials";
import Stars from "@/components/ui/Stars";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid flex flex-col lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 gap-10 lg:pt-32 lg:pb-52">
          <div className=" col-span-2 px-6 lg:px-0 lg:pt-0">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className=" absolute w-28 left-0 -top-20 hidden lg:block">
                <h1 className="w-full"> CASEE</h1>
              </div>
              <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 text-white">Custom</span> Phone
                Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose md:text-start text-center text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                Casee allows you to protect your memories, not just your phone
                case.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 years
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Moden iphone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <RoundImg />
                <div className="flex flex-col justify-between items-center sm:items-start">
                 <Stars />
                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <HeroImg />
        </MaxWidthWrapper>
      </section>
      <Testimonials />
    </div>
  );
}
