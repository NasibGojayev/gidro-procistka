import { Breadcrumbs } from "@/components/company/Breadcrumbs";
import { ClientCategory } from "@/components/company/ClientCategory";
import { clientCategories } from "@/content/clients";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Наши клиенты в Уфе | ГидроРобот",
    description: "Наши клиенты в Уфе: сетевые магазины, рестораны, торговые центры, школы, больницы, ЖКХ и частные дома. Профессиональная прочистка канализации и устранение засоров.",
    alternates: {
        canonical: 'https://gidroprocistkaufa.ru/company/clients',
    },
};

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-20">
            <LocalBusinessJsonLd />

            <div className="container mx-auto px-4 md:px-6">
                {/* Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: "О компании", href: "/company" },
                        { label: "Клиенты", isActive: true }
                    ]}
                />

                {/* Page Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    С кем мы работали в Уфе
                </h1>

                {/* Intro */}
                <div className="mb-12 text-lg text-muted-foreground max-w-4xl">
                    <p className="mb-4">
                        За годы работы мы выполнили сотни заказов по прочистке канализации и устранению засоров в Уфе и Башкортостане.
                        Среди наших клиентов — сетевые магазины, рестораны, торговые центры, школы, больницы, управляющие компании и частные дома.
                    </p>
                    <p className="mb-6">
                        Мы используем профессиональное оборудование для{" "}
                        <Link href="/prochistka-kanalizatsii" className="text-primary hover:underline">
                            гидродинамической прочистки канализации
                        </Link>
                        , выполняем{" "}
                        <Link href="/ustranenie-zasora" className="text-primary hover:underline">
                            устранение засоров
                        </Link>
                        {" "}любой сложности и{" "}
                        <Link href="/promyvka-kanalizatsii" className="text-primary hover:underline">
                            промывку труб
                        </Link>
                        {" "}на объектах любого типа.
                    </p>
                </div>

                {/* Categories */}
                <div className="space-y-16">
                    {clientCategories.map((category) => (
                        <ClientCategory
                            key={category.id}
                            categoryId={category.id}
                            title={category.title}
                            description={category.description}
                            clients={category.clients}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 p-8 bg-card rounded-xl border border-border text-center">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                        Хотите, чтобы мы работали и с вами?
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                        Оставьте заявку, и мы свяжемся с вами в ближайшее время
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors uppercase tracking-wide"
                    >
                        Оставить заявку
                    </Link>
                </div>
            </div>
        </main>
    );
}
