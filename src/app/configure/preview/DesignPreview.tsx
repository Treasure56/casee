"use client"
import Phone from '@/components/ui/Phone';
import { configuration } from '@prisma/client';
import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
export default function DesignPreview({configuration}: {configuration: configuration}) {
    const [showConfetti, setShowConfetti] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setShowConfetti(true));
    return (
        <>
        <div aria-hidden="true" className="pointer-event-none select-none absolute inset-0 overflow-hidden flex justify-center">
        <Confetti active={showConfetti} config={{elementCount: 200, spread: 90}} />
        </div>

        <div className="mt-20 grid gride-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
            <div className="sm:col-span-4 md:col-span-3 md:row-span-2 md:row-end-2">
                <Phone imgSrc={configuration.cropedImageUrl!} />
            </div>
        </div>
        </>
    );
}