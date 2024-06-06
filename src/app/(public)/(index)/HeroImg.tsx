/* eslint-disable @next/next/no-img-element */
import Phone from "@/components/ui/Phone";

export default function HeroImg() {
  return (
    <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 lg:mt-20  h-fit">
      <div className="relative md:max-w-xl">
        <img
          src="/images/your-image.png"
          alt=""
          className="absolute w-10 lg:w-52 left-44 -top-20 select-none hidden sm:block lg:hidden xl:block"
        />
        <img
          src="/images/line.png"
          alt=""
          className="absolute w-20 -left-6 -bottom-6 select-none"
        />
        <Phone imgSrc="images/users/user4.jpg" className="w-64" />
      </div>
    </div>
  );
}
