import { siteConfig } from "@/content/site";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
    return (
        <div className="w-full bg-white border-b border-gray-100 py-3 hidden md:block font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Left Column: Address */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-[#01bbbf]" />
                            <span>{siteConfig.address}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <a href="/contacts" className="hover:text-[#01bbbf] transition-colors">
                            Все адреса
                        </a>
                    </div>

                    {/* Right Column: Phone + WhatsApp + Button */}
                    <div className="flex items-center gap-6">
                        <a href={`tel:${siteConfig.cleanPhone}`} className="font-bold text-lg text-gray-900 hover:text-[#01bbbf] transition-colors">
                            {siteConfig.phone}
                        </a>

                        {/* WhatsApp Link */}
                        <a
                            href={siteConfig.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors text-sm"
                        >
                            <i className="fab fa-whatsapp text-lg"></i>
                            <span>Написать в WhatsApp</span>
                        </a>

                        <Button
                            size="sm"
                            className="bg-[#01bbbf] hover:bg-[#009fa3] text-white shadow-none font-bold h-9 rounded px-6 text-xs uppercase tracking-wider"
                            asChild
                        >
                            <a href="/contacts">
                                Онлайн заявка
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
