/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function Reviews() {
    return (
        <div>
        <MaxWidthWrapper className="relative max-w-5xl">
            <img src="/images/what-people-are-buying.png" alt=""  aria-hidden="true" className="absolute select-none xl:block -left-32 top-1/3"/>

        </MaxWidthWrapper>
        </div>
    );
}