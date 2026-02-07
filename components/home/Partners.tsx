"use client";

import { homePageData } from "@/content/pages";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export function Partners() {
    const { partners } = homePageData as any;
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ]);

    if (!partners?.items) return null;

    return (
        <div className="main-partners padding-default py-16 bg-white border-t border-gray-100 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="row mb-10">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="text-3xl font-bold text-gray-900">{partners.title}</h2>
                    </div>
                </div>

                <div className="row mt-10" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {partners.items.map((partner: any, index: number) => (
                            <div key={index} className="flex-[0_0_50%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 pl-4">
                                <div className="partner-square h-32 border border-gray-200 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all hover:border-[#01bbbf] hover:shadow-sm bg-white relative">
                                    <Image
                                        src={partner.img}
                                        alt={partner.name}
                                        title={partner.name}
                                        fill
                                        className="object-contain p-4"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
