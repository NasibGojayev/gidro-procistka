"use client";

import { homePageData } from "@/content/pages";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export function Hero() {
    const { hero } = homePageData;
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ]);

    // We can duplicate the hero content to simulate multiple slides if needed,
    // or just have one. For a slider effect, usually you want >1 slide.
    // Let's create an array of slides based on the single hero object for now,
    // effectively creating a loop of the same content to demonstrate the slider.
    const slides = [hero, hero];

    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-neutral-900">
            <div className="absolute inset-0" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="relative flex-[0_0_100%] min-w-0 w-full h-[600px] md:h-[700px]">
                            {/* Background Image */}
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: "url('/images/hero/hero-background.webp')",
                                }}
                            >
                                <div className="absolute inset-0 bg-black/50" />
                            </div>

                            <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex items-center">
                                <div className="grid grid-cols-12 w-full">
                                    <div className="col-span-12 md:col-span-8 lg:col-span-7">
                                        <div className="text-white fade-in-up">
                                            {/* Slider Title */}
                                            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
                                                {slide.title}
                                            </h1>

                                            {/* Slider Description */}
                                            <div className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-10 max-w-2xl">
                                                {slide.description}
                                            </div>

                                            {/* Slider Buttons */}
                                            <div>
                                                <Button
                                                    size="lg"
                                                    className="bg-[#00b5bb] hover:bg-[#009ca2] text-white font-medium text-sm md:text-base h-12 md:h-14 px-8 md:px-10 rounded-sm uppercase transition-all duration-300 border-none"
                                                    asChild
                                                >
                                                    <a href="/contacts">
                                                        {slide.cta}
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
