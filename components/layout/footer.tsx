import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-12 font-sans">
            <div className="container mx-auto px-4 md:px-6">

                {/* Top Row: Menu */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    {/* Footer Menu */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[13px] font-bold uppercase tracking-wider">
                        <Link href="/company" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Компания</Link>
                        <Link href="/services" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Услуги</Link>
                        <Link href="/contact" className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">Контакты</Link>
                    </div>
                </div>

                {/* Bottom Row: Contacts & Copyright */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end gap-8 border-t border-blue-400/30 pt-8 mt-12">

                    {/* Copyright & Legal Left */}
                    <div className="flex flex-col gap-2 text-sm text-blue-50/80">
                        <p>© {siteConfig.name} — Все права защищены</p>
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Политика конфиденциальности
                        </Link>

                    </div>

                    {/* Contacts Right */}
                    <div className="flex flex-col md:items-end gap-1">
                        <a href={`tel:${siteConfig.cleanPhone}`} className="text-white font-bold hover:text-white text-2xl transition-colors">
                            {siteConfig.phone}
                        </a>
                        <a href={`mailto:${siteConfig.email}`} className="text-blue-100/70 hover:text-white text-sm transition-colors">
                            {siteConfig.email}
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}
