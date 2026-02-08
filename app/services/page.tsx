import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/content/services";
import { Section } from "@/components/ui/section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Услуги по прочистке канализации | ГидроРобот",
    description: "Услуги по устранению засоров и прочистке канализации в Уфе. Механическая и гидродинамическая промывка труб.",
    alternates: {
        canonical: 'https://gidroprocistkaufa.ru/services',
    },
};


export default function ServicesPage() {
    const breadcrumbItems = [
        { label: "Главная", href: "/" },
        { label: "Услуги" }
    ];

    return (
        <main className="flex-grow">
            <Section className="pb-0 pt-8 md:pt-12">
                <Breadcrumbs items={breadcrumbItems} />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Услуги
                </h1>
            </Section>

            <Section className="pt-8 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            slug={service.slug}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            price={service.price}
                        />
                    ))}
                </div>
            </Section>
        </main>
    );
}
