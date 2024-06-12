'use client'
import { useEffect, useRef, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "../MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";


function splitArray<T>(array: Array<T>, numParts: number) {
    const result : Array<Array<T>> = [];

    for (let i = 0; i < array.length; i++) {
        const index = i % numParts;

        if (!result[index]) {
            result[index] = [];
        }
        result[index].push(array[i]);
        
    }
    return result

    }
        function ReviewColumn({reviews, className, reviewClassName, msPerpixel = 0}:{reviews: string[], className?: string, reviewClassName?: (reviewIndex: number) => string ,
            msPerpixel?: number
        }){
            const columnRef = useRef<HTMLDivElement | null>(null)
            const [columnHeight, setColumnHeight] = useState(0)
            const duration = `${columnHeight * msPerpixel}ms`
            useEffect(() =>{
                if(!columnRef.current) return
                const resizeObserver  = new window.ResizeObserver(() =>{
                    setColumnHeight(columnRef.current?.offsetHeight ?? 0)
                })

                resizeObserver.observe(columnRef.current)
                return() =>{
                    resizeObserver.disconnect()
                }
            }, [])

            return (<div ref={columnRef} className={cn(" animate-marquee space-y-8 py-4", className)} style={{'--marquee-duration': duration} as React.CSSProperties}>
                {reviews.concat(reviews).map((imgSrc, reviewIndex) =>(
                <Review key={reviewIndex} className={reviewClassName?.(reviewIndex % reviews.length)}  imgSrc={imgSrc} />
            ))}
                </div>
             )
        }

        type ReviewProps = React.HTMLAttributes<HTMLDivElement> & {
            imgSrc: string
        }
        function Review({imgSrc, className, ...props}:ReviewProps){
            return(
                <div className={cn('animate-fade-in rounded-[2.25ren] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5', className)}
                style={{animationDelay}} {...props}>
                    <Phone imgSrc={imgSrc} />
                </div>
            )

        }

        const POSSIBLE_ANIATION_DELAY = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
        const animationDelay = POSSIBLE_ANIATION_DELAY[Math.floor(Math.random() * POSSIBLE_ANIATION_DELAY.length)]
           

function ReviewGrid(){
    const containerRef = useRef<HTMLDivElement | null>(null)
    const IsInView = useInView(containerRef, { once: true, amount: 0.4 });
    const colmns = splitArray(PHONES, 3)
    const columns1 = colmns[0]
    const columns2 = colmns[1]
    const columns3 = splitArray(colmns[2], 2) 


    return( <div ref={containerRef} className=" relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 gap-8 px-4  overflow-hidden sm:mt-20 md:grid-cols-2 lg:grid-cols-3">{IsInView ? <>
    <ReviewColumn reviews={[...columns1, ...columns3.flat(), ...columns2]} reviewClassName={(reviewIndex) => cn({"md:hidden": reviewIndex >= columns1.length +columns3[0].length, "lg:hidden": reviewIndex >= columns1.length,})} 
        msPerpixel={10}
        />
    <ReviewColumn reviews={[...columns2, ...columns3[1]]}
    className='hidden md:block'
     reviewClassName={(reviewIndex) => reviewIndex >= columns2.length ? 'lg:hidden' : ''}
        msPerpixel={15}
        />
    <ReviewColumn reviews={[...columns3.flat()]}
    className='hidden md:block'
     reviewClassName={(reviewIndex) => reviewIndex >= columns2.length ? 'lg:hidden' : ''}
        msPerpixel={10}
        />
    </> : null}
     <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100" />
     <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-slate-100" />
    </div>

    )
}

export default function Reviews() {
    return (
        <div>
        <MaxWidthWrapper className="relative max-w-5xl">
            <img src="/images/what-people-are-buying.png" alt=""  aria-hidden="true" className="absolute select-none xl:block -left-32 top-1/3"/>
            <ReviewGrid />
        </MaxWidthWrapper>
        </div>
    );
}


const PHONES = [
    "/images/users/user1.jpg",
    "/images/users/user1.jpg",
    "/images/users/user1.jpg",
    "/images/users/user1.jpg",
    "/images/users/user1.jpg",
    "/images/users/user1.jpg",
]