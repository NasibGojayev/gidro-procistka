import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Using available icons, generic placeholders for vk/ok if not available

export function Footer() {
    return (
        <footer className="bg-[#202020] text-white py-12 font-sans">
            <div className="container mx-auto px-4 md:px-6">

                {/* Top Row: Menu & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    {/* Footer Menu */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[13px] font-bold uppercase tracking-wider">
                        <Link href="/company" className="hover:text-[#01bbbf] transition-colors border-b border-transparent hover:border-[#01bbbf] pb-1">Компания</Link>
                        <Link href="/news" className="hover:text-[#01bbbf] transition-colors border-b border-transparent hover:border-[#01bbbf] pb-1">Новости</Link>
                        <Link href="/services" className="hover:text-[#01bbbf] transition-colors border-b border-transparent hover:border-[#01bbbf] pb-1">Услуги</Link>
                        <Link href="/contacts" className="hover:text-[#01bbbf] transition-colors border-b border-transparent hover:border-[#01bbbf] pb-1">Контакты</Link>
                    </div>
                    {/* Socials */}
                    <div className="flex gap-2">
                        {/* VK Placeholder */}
                        <a href="#" className="h-8 w-8 bg-[#333] flex items-center justify-center rounded-sm hover:bg-[#01bbbf] transition-colors text-white">
                            <span className="font-bold text-xs">Vk</span>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="h-8 w-8 bg-[#333] flex items-center justify-center rounded-sm hover:bg-[#01bbbf] transition-colors text-white">
                            <Facebook className="h-4 w-4" />
                        </a>
                        {/* Instagram */}
                        <a href="#" className="h-8 w-8 bg-[#333] flex items-center justify-center rounded-sm hover:bg-[#01bbbf] transition-colors text-white">
                            <Instagram className="h-4 w-4" />
                        </a>
                        {/* OK Placeholder */}
                        <a href="#" className="h-8 w-8 bg-[#333] flex items-center justify-center rounded-sm hover:bg-[#01bbbf] transition-colors text-white">
                            <span className="font-bold text-xs">Ok</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Row: Contacts & Copyright */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 border-t border-gray-800 pt-8 mt-12">

                    {/* Copyright & Legal Left */}
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                        <p>© {siteConfig.name} — Все права защищены</p>
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Политика конфиденциальности
                        </Link>

                    </div>

                    {/* Contacts Right */}
                    <div className="flex flex-col md:items-end gap-1">
                        <a href={`tel:${siteConfig.cleanPhone}`} className="text-white font-bold hover:text-[#01bbbf] text-2xl transition-colors">
                            {siteConfig.phone}
                        </a>
                        <a href={`tel:${siteConfig.cleanPhone2}`} className="text-white font-bold hover:text-[#01bbbf] text-2xl transition-colors">
                            {siteConfig.phone2}
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                            {siteConfig.email}
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}
