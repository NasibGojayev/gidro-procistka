import { homePageData } from "@/content/pages";
import Image from "next/image";

export const metadata = {
    title: "Партнеры | ГидроРобот",
    description: "Наши ключевые партнеры и клиенты."
};

export default function PartnersPage() {
    const { partners } = homePageData;

    return (
        <section>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {partners.items.map((partner, index) => (
                    <li key={index} className="bg-[#252525] border border-[#333] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-gray-500 transition-all hover:shadow-lg group h-full">
                        <div className="relative w-full h-24 flex items-center justify-center">
                            <Image
                                src={partner.img}
                                alt={partner.name}
                                fill
                                className="object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <div className="font-medium text-white text-sm">{partner.name}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
