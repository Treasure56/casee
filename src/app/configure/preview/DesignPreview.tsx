"use client"
import { Button } from '@/components/ui/button';
import Phone from '@/components/ui/Phone';
import { BASE_PRICE, PRODUCT_PRICES } from '@/config/product';
import { cn, formatPrice } from '@/lib/utils';
import { COLORS, MODELS } from '@/validators/option-validators';
import { configuration } from '@prisma/client';
import { useMutation } from '@tanstack/react-query';
import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti, { ConfettiConfig } from 'react-dom-confetti';

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: "159",
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
export default function DesignPreview({configuration}: {configuration: configuration}) {
    const [showConfetti, setShowConfetti] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setShowConfetti(true));

    const { color, model, finish, material } = configuration
    const tw = COLORS.find((suppprtedColor) => suppprtedColor.value === color)?.tw
    const {label: modelLabel} = MODELS.options.find(({value}) => value === model)!

    let totalPrice = BASE_PRICE
    if(material === "polycarbonate") totalPrice += PRODUCT_PRICES.material.polycarbonate
    if(finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured

    const {} = useMutation({
        mutationKey: [" get-checkout-session"],
        // mutationFn
    })
    return (
        <>
        <div aria-hidden="true" className="pointer-event-none select-none absolute inset-0 overflow-hidden flex justify-center">
        <Confetti active={showConfetti} config={config as unknown as ConfettiConfig} />
        </div>

        <div className="mt-20 grid gride-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
            <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
                <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.cropedImageUrl!} />
            </div>

            <div className="mt-6 sm:col-span-9 sm:mt-0 md:row-end-1">
                <h3 className='text-3xl font-bold tracking-tight text-gray-900'>Your {modelLabel} Case</h3>
                <div className="mt-3 flex items-center gap-1.5 text-base">
                    <Check className='h-4 w-4 text-green-500' />
                    In Stock and ready to ship
                </div>
            </div>
            <div className=' sm:col-span-12 md:col-span-9 text-base'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 gap-y-8 border-b border-gray-200 py-8 sm:gap-x-6  sm:py-6 md:py-10'>
                    <div>
                        <p className='font-medium text-zinc-900'>Highlights</p>
                        <ol className=' mt-3 text-zinc-700 list-disc  list-inside'>
                          {
                            highlights.map(highlight =>
                                <li key={highlight}>{highlight}</li>
                            )
                          }
                        </ol>
                    </div>

                   <div>
                   <p className='font-medium text-zinc-950'>Materials</p>
                    <ol className=' mt-3 text-zinc-700 list-disc  list-inside'>
                        {
                            materials.map(material =>
                                <li key={material}>{material}</li>
                            )
                        }
                    </ol>
                   </div>
                </div>

                <div className="mt-8">
                    <div className=" bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                        <div className=' flow-root text-sm'>
                            <div className="flex items-center justify-between py-1 mt-2">
                                <p className="text-gray-600"> Base price</p>
                                <p className='font-medium text-gray-900'>
                                    {formatPrice(BASE_PRICE / 100)}
                                </p>
                                </div>
                            {finish === "textured" ? (
                                <div className="flex items-center justify-between py-1 mt-2">
                                <p className="text-gray-600"> Textured finish</p>
                                <p className='font-medium text-gray-900'>
                                    {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                                </p>
                                </div>
                            ) : null}

                            {material === "polycarbonate" ? (
                                <div className="flex items-center justify-between py-1 mt-2">
                                <p className="text-gray-600"> Soft polycarbonate material</p>
                                <p className='font-medium text-gray-900'>
                                    {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                                </p>
                                </div>
                            ) : null}

                            <div className='my-2 h-px bg-gray-200' />
                            <div className="flex items-center justify-between py-2">
                                <p className='font-semibold text-gray-900'>Order total</p>
                                <p className='font-semibold text-gray-900'>
                                    {formatPrice(totalPrice / 100)}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="mt-8 flex justify-end pb-12">
                        <Button isLoading={true} loadingText='loading' className='px-4 sm:px-6 lg:px-8'>Check out <ArrowRight  className=' h-4 w-4 ml-1.5 inline'/></Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


const highlights = [
    "Wireless charging compatible",
    "TpU shock absorption",
    "Packaching made from recycled materials",
    " 5 years print warranty",
]

const materials = [
    "High quality, durable material",
    "Scratch and fingerprint resistant coating",
]