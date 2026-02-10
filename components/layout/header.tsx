"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Droplet, ChevronDown, MoreHorizontal } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Главная", href: "/" },
    { name: "Компания", href: "/company" },
    {
        name: "Услуги", href: "/services",
        children: [
            { name: "Промывка канализации", href: "/promyvka-kanalizatsii-" },
            { name: "Прочистка канализации", href: "/prochistka-kanalizatsii" },
            { name: "Телеинспекция труб", href: "/teleinspektsiya-trub-" },
            { name: "Устранение засоров", href: "/ustranenie-zasora" },
        ]
    },
    { name: "Контакты", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
            {/* Main Navigation (Logo | Nav Links) */}
            <div className="py-4 md:py-0 bg-white relative z-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-auto md:h-24">

                        {/* Left Column: Logo and Mobile Contacts */}
                        <div className="flex flex-col items-start gap-2">
                            <Link href="/" className="flex-shrink-0">
                                <Image
                                    src="/images/logo-gidrorobot.webp"
                                    alt="Прочистка канализации"
                                    title="Прочистка канализации"
                                    width={200}
                                    height={64}
                                    priority
                                    className="h-12 md:h-16 w-auto object-contain"
                                />
                            </Link>

                            {/* Mobile Contacts - Visible on Mobile */}
                            <div className="md:hidden flex flex-col text-sm space-y-1 mt-1">
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://api.whatsapp.com/send/?phone=79173510409"
                                        className="flex items-center gap-2 text-[#25D366] font-medium hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp className="h-4 w-4" />
                                        <span>WhatsApp</span>
                                    </a>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('+79173510409');
                                            alert('Номер скопирован!');
                                        }}
                                        className="text-xs text-gray-500 hover:text-gray-700 underline"
                                        title="Скопировать номер телефона"
                                    >
                                        (скопировать)
                                    </button>
                                </div>
                                <a href={`tel:${siteConfig.cleanPhone}`} className="flex items-center gap-2 text-gray-800 font-bold">
                                    <Phone className="h-4 w-4" />
                                    <span>{siteConfig.phone}</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Navigation */}
                        <nav className="hidden md:flex items-center justify-end gap-8">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group py-8">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-[15px] font-bold text-gray-800 uppercase hover:text-[#01bbbf] transition-colors"
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown className="h-3 w-3" />}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.children && (
                                        <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50">
                                            <ul className="bg-white shadow-xl rounded-sm border-t-2 border-[#01bbbf]">
                                                {item.children.map(child => (
                                                    <li key={child.name} className="border-b border-gray-50 last:border-0">
                                                        <Link
                                                            href={child.href}
                                                            className="block px-6 py-3 text-sm text-gray-700 hover:text-[#01bbbf] hover:bg-gray-50 transition-colors"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* 'Еще' (More) Menu - Optional/Placeholder */}
                            <div className="relative group py-8">
                                <button className="flex items-center gap-1 text-[15px] font-bold text-gray-800 uppercase hover:text-[#01bbbf] transition-colors">
                                    Еще <ChevronDown className="h-3 w-3" />
                                </button>
                                {/* Placeholder Dropdown for 'More' */}
                                <div className="absolute top-full right-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50">
                                    <ul className="bg-white shadow-xl rounded-sm border-t-2 border-[#01bbbf]">
                                        <li className="border-b border-gray-50 last:border-0">
                                            <Link href="/privacy" className="block px-6 py-3 text-sm text-gray-700 hover:text-[#01bbbf] hover:bg-gray-50 transition-colors">
                                                Политика конфиденциальности
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        {/* Mobile Controls */}
                        <div className="md:hidden flex items-center gap-4">
                            <a href={`tel:${siteConfig.cleanPhone}`} className="text-gray-900 font-bold">
                                <Phone className="h-6 w-6" />
                            </a>
                            <button
                                className="p-2 text-gray-800"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[100px] z-[40] bg-white overflow-y-auto pb-20 border-t border-gray-100">
                    <nav className="flex flex-col">
                        {navigation.map((item) => (
                            <div key={item.name} className="border-b border-gray-100">
                                <div className="flex items-center justify-between pr-4">
                                    <Link
                                        href={item.href}
                                        className="block p-4 text-base font-bold text-gray-800 uppercase"
                                        onClick={() => !item.children && setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <span className="text-gray-400">▼</span>
                                    )}
                                </div>

                                {item.children && (
                                    <div className="bg-gray-50 pl-4 py-2">
                                        {item.children.map(child => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block py-2 pr-4 text-sm text-gray-600 hover:text-[#01bbbf]"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="p-6">
                            <Button className="w-full bg-[#01bbbf] hover:bg-[#009fa3] text-white font-bold py-6 uppercase tracking-wider text-sm" asChild>
                                <a href="/contact">Оставить заявку</a>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
