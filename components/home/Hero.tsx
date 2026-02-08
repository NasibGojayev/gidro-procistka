
import { homePageData } from "@/content/pages";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
    const { hero } = homePageData;
    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-neutral-900">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero/hero-background.webp"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 h-full flex items-center">
                <div className="grid grid-cols-12 w-full">
                    <div className="col-span-12 md:col-span-8 lg:col-span-7">
                        <div className="text-white fade-in-up">
                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 tracking-tight">
                                {hero.title}
                            </h1>

                            {/* Description */}
                            <div className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-10 max-w-2xl">
                                {hero.description}
                            </div>

                            {/* Buttons */}
                            <div>
                                <Button
                                    size="lg"
                                    className="bg-[#00b5bb] hover:bg-[#009ca2] text-white font-medium text-sm md:text-base h-12 md:h-14 px-8 md:px-10 rounded-sm uppercase transition-all duration-300 border-none"
                                    asChild
                                >
                                    <a href="/contacts">
                                        {hero.cta}
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
