import { homePageData } from "@/content/pages";
import Image from "next/image";

export function CoverageSection() {
    const { coverage } = homePageData;

    return (
        <section className="main-profitably mt-12 mb-12 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="row mb-12">
                    <div className="col-xs-12 col-md-8 col-md-offset-2 text-center mx-auto">
                        <h2 className="text-3xl font-bold text-primary">{coverage.title}</h2>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* List Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid gap-8">
                            {coverage.items.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    {/* Icon Image */}
                                    <div className="shrink-0 pt-1">
                                        <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center relative">
                                            <Image
                                                src={item.icon}
                                                alt={item.label}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="main-profitably--title text-primary text-2xl font-bold mb-2">
                                            {item.label}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {index === 0 && "Устранение засора унитаза, раковины, ванны и канализационных труб"}
                                            {index === 1 && "Прочистка канализации в частном секторе, промывка наружной канализации"}
                                            {index === 2 && "Гидродинамическая промывка жироуловителей и канализационных систем"}
                                            {index === 3 && "Устранение засоров в офисных зданиях и бизнес-центрах"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 text-center hidden md:block">
                        <div className="h-[400px] w-full flex items-center justify-center relative">
                            <Image
                                src={coverage.mainImage}
                                alt={coverage.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
