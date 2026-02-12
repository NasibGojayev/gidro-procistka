"use client";

import { siteConfig } from "@/content/site";

export default function ContactMap() {
    return (
        <div className="w-full rounded-xl overflow-hidden border border-primary shadow-lg mb-8">
            <div className="relative w-full h-[300px] md:h-[400px] bg-[#252525]">
                {/* 
                    Yandex Map Widget 
                    Coordinates: 54.716154, 55.991363 (г.Уфа, ул. Бакалинская, 7)
                    Zoom: 17
                */}
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=55.991363%2C54.716154&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM2NjkzNxJH0KDQvtGB0YHQuNGPLCDQoNC10YHQv9GD0LHQu9C40LrQsCDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0s9KPNÙ0LAs9GD0LvQuNGG0LAg0JHQsNC60LDQu9C40L3RgdC60LDRjywgNyIKDYeQkUIVVWFKQg%2C%2C&z=17"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen={true}
                    loading="lazy"
                    title={`Карта расположения компании ${siteConfig.name}`}
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
            <div className="bg-primary p-3 text-center text-sm text-gray-400 border-t border-primary">
                {siteConfig.address}
            </div>
        </div>
    );
}
