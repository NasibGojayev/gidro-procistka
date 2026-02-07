import { homePageData } from "@/content/pages";
import { Wrench } from "lucide-react";
import Image from "next/image";

export function EquipmentGrid() {
    const { equipment } = homePageData;

    return (
        <section className="equipment bg-[#202020] pt-20 pb-0 text-white overflow-hidden font-sans">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 relative z-10">
                    <div className="lg:w-7/12">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            {equipment.title}
                        </h2>
                    </div>
                    <div className="lg:w-4/12 hidden md:block text-gray-300 text-sm">
                        <p>{equipment.description}</p>
                    </div>
                </div>

                {/* Equipment Row/Grid */}
                {/* Equipment Row/Grid - Spaced Layout */}
                {/* Equipment Row/Grid - Spaced Layout using Grid */}
                <div className="equipment__row relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                        {equipment.items.map((item, index) => (
                            <div
                                key={index}
                                className={`col-span-1 ${item.widthClass}`}
                            >
                                <div className="h-[340px] relative group bg-[#252525] hover:bg-[#2a2a2a] transition-all duration-300 overflow-hidden flex flex-col justify-between rounded-xl border border-[#333] hover:border-gray-600 shadow-lg hover:shadow-xl">
                                    {/* Background Image - Contained to show full image */}
                                    <div className="absolute inset-0 z-0 p-4 flex items-center justify-center">
                                        <div className="relativePath w-full h-full relative">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Gradient Overlays for Text Readability */}
                                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-1 pointer-events-none"></div>
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-1 pointer-events-none"></div>

                                    {/* Content - Top Text */}
                                    <div className="relative z-10 p-6 pointer-events-none">
                                        <b className="block text-base md:text-lg font-bold leading-tight text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" dangerouslySetInnerHTML={{ __html: item.name.replace(/\n/g, '<br />') }}></b>
                                    </div>

                                    {/* Content - Bottom Icon */}
                                    <div className="relative z-10 p-6 self-end text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                        <Wrench className="h-10 w-10 drop-shadow-md" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
