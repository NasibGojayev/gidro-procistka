"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const companyLinks = [
    { label: "О компании", href: "/company" },
    { label: "Клиенты", href: "/company/clients" },
    { label: "Отзывы", href: "/company/reviews" },
    { label: "Часто задаваемые вопросы", href: "/company/faq" },
    { label: "Прайс-лист", href: "/company/price" },
];

export function CompanySidebar() {
    const pathname = usePathname();

    return (
        <aside className="company-sidebar w-full lg:w-[280px] mb-10 lg:mb-0 lg:mr-10 flex-shrink-0">
            <nav aria-label="Company sections" className="bg-[#202020] rounded-xl overflow-hidden p-6 border border-[#333]">
                <ul className="space-y-2">
                    {companyLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-lg transition-colors border-l-2 ${isActive
                                        ? "bg-[#2A2A2A] text-white border-primary"
                                        : "text-gray-400 hover:text-white hover:bg-[#252525] border-transparent"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}
