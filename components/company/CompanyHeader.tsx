"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumbs";

const routes = {
    "/company": { title: "О компании", label: "О компании" },
    "/company/staff": { title: "Сотрудники", label: "Наша команда" },
    "/company/reviews": { title: "Отзывы клиентов", label: "Отзывы" },
    "/company/faq": { title: "Вопрос-ответ", label: "FAQ" },
    "/company/partners": { title: "Партнеры", label: "Партнеры" },
    "/company/price": { title: "Прайс лист на услуги", label: "Прайс-лист" },
};

export function CompanyHeader() {
    const pathname = usePathname();
    const currentRoute = routes[pathname as keyof typeof routes] || { title: "О компании", label: "О компании" };

    const breadcrumbs: { label: string; href?: string; isActive?: boolean }[] = [
        { label: "О компании", href: "/company", isActive: pathname === "/company" || pathname === "/company/about" },
    ];

    if (pathname !== "/company" && pathname !== "/company/about") {
        breadcrumbs[0].isActive = false;
        breadcrumbs.push({ label: currentRoute.label, isActive: true });
    }

    return (
        <div className="mb-10">
            <Breadcrumbs items={breadcrumbs} />
            <header className="border-b border-gray-800 pb-6">
                <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                    {currentRoute.label}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{currentRoute.title}</h1>
            </header>
        </div>
    );
}
