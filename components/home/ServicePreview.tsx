import { services } from "@/content/services";
import { homePageData } from "@/content/pages";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ServicePreview() {
    const { servicesPreview } = homePageData;

    return (
        <div className="main-services text-center py-5 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Row */}
                <div className="services__header flex flex-col lg:flex-row items-end justify-between mt-5 text-left mb-12">
                    <div className="lg:w-7/12">
                        <h2 className="text-[2rem] font-bold text-primary leading-tight">
                            {servicesPreview.title}
                        </h2>
                    </div>
                    <div className="lg:w-4/12 hidden lg:block text-gray-600 text-sm">
                        <p>
                            Специалисты нашей компании максимально оперативно прибудут на аварийную ситуацию, выявят причину засора
                            и устранят проблему, предложив наиболее оптимальный способ прочистки труб.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-12">
                    {services.slice(0, 4).map((service: any) => (
                        <div key={service.slug} className="h-full">
                            <div className="service text-center border-[3px] border-primary m-0 h-full flex flex-col p-0 bg-white hover:bg-gray-50 transition-colors rounded-none">
                                <Link href={`/${service.slug}/`} className="flex flex-col h-full relative group">
                                    {/* Service Image */}
                                    <div className="service--img flex items-center justify-center p-4 relative h-[250px] w-full">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            title={service.title}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        />
                                    </div>

                                    <div className="p-4 flex flex-col flex-grow text-center">
                                        {/* Title */}
                                        <div className="service--title mb-2 min-h-[48px] flex items-center justify-center">
                                            <span className="text-primary font-bold text-lg leading-tight uppercase">
                                                {service.title}
                                            </span>
                                        </div>

                                        {/* Text */}
                                        <div className="service--text text-gray-600 text-sm mb-4">
                                            {service.description}
                                        </div>

                                        {/* Price & Button */}
                                        <div className="mt-auto">
                                            <div className="services__price text-primary text-[1.5rem] font-medium my-[8%]">
                                                {service.price}
                                            </div>
                                            <span
                                                className="indexServices_button inline-block text-white bg-primary uppercase text-[13px] font-medium py-2.5 px-4 rounded-[2px] transition-colors group-hover:bg-primary hover:text-white"
                                            >
                                                Подробнее
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* All Services Link */}
                <div className="row mt-10 text-center">
                    <div className="col-xs-12 mt40 tac">
                        <Link href="/services/" className="inline-flex items-center text-primary hover:text-primary font-medium transition-colors group">
                            <span className="border-b border-gray-300 group-hover:border-primary pb-0.5 link_underline">Все услуги</span>
                            <i className="ml-2 fa fa-angle-right">→</i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
