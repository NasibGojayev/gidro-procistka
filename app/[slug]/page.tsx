import { services } from "@/content/services";
import { siteConfig } from "@/content/site";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfoStrip } from "@/components/home/InfoStrip";
import { Partners } from "@/components/home/Partners";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { Check, Phone, ArrowLeft } from "lucide-react";

// Generate static params for all services
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: "Услуга не найдена",
        };
    }

    return {
        title: `${service.title} | ${siteConfig.name}`,
        description: service.description,
        alternates: {
            canonical: `https://gidroprocistkaufa.ru/${slug}`,
        },
        openGraph: {
            title: `${service.title} | ${siteConfig.name}`,
            description: service.description,
            images: [
                {
                    url: service.heroImage || service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <ServiceJsonLd service={{
                title: service.title,
                description: service.description,
                image: service.heroImage || service.image,
                price: service.price
            }} />
            {/* Breadcrumbs & Hero */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Link href="/" className="hover:text-[#01bbbf] transition-colors">Главная</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-[#01bbbf] transition-colors">Услуги</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">{service.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-sans">
                            {service.title}
                        </h1>

                        {/* Main Image */}
                        <div className="mb-8 rounded-lg overflow-hidden border border-gray-100">
                            <img
                                src={service.heroImage || service.image}
                                alt={service.title}
                                className="w-full h-auto object-cover max-h-[400px]"
                            />
                        </div>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none text-gray-600 mb-10"
                            dangerouslySetInnerHTML={{ __html: service.fullDescription || service.description }}
                        />

                        {/* Features */}
                        {service.features && (
                            <div className="bg-[#f9f9f9] p-8 rounded-none border-l-4 border-[#01bbbf] mb-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Что мы предлагаем:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 text-[#01bbbf]">
                                                <Check className="h-5 w-5" />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Pricing/Details Table */}
                        {service.details && (
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Стоимость и условия</h3>
                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                                        <div className="p-6 text-center">
                                            <div className="text-gray-500 text-sm mb-1">Стоимость</div>
                                            <div className="text-[#01bbbf] text-2xl font-bold">{service.details.price}</div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <div className="text-gray-500 text-sm mb-1">Время работы</div>
                                            <div className="text-gray-900 text-xl font-medium">{service.details.time}</div>
                                        </div>
                                        <div className="p-6 text-center">
                                            <div className="text-gray-500 text-sm mb-1">Гарантия</div>
                                            <div className="text-gray-900 text-xl font-medium">{service.details.warranty}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="mt-8 flex gap-4">
                            <Link href="/contacts" className="inline-block bg-[#01bbbf] hover:bg-[#202020] text-white font-medium py-3 px-8 rounded-[2px] transition-colors uppercase text-sm">
                                Вызвать мастера
                            </Link>
                            <Link href="/services" className="inline-flex items-center text-gray-600 hover:text-[#01bbbf] font-medium py-3 px-6 transition-colors">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Другие услуги
                            </Link>
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 space-y-8">
                            {/* Service Menu */}
                            <div className="bg-gray-50 p-6 rounded-none border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    Наши услуги
                                </h3>
                                <ul className="space-y-2">
                                    {services.map((s) => (
                                        <li key={s.slug}>
                                            <Link
                                                href={`/${s.slug}`}
                                                className={`block py-2 px-3 rounded transition-colors ${s.slug === service.slug
                                                    ? "bg-[#01bbbf] text-white"
                                                    : "text-gray-600 hover:bg-gray-200"
                                                    }`}
                                            >
                                                {s.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Box */}
                            <div className="bg-[#202020] text-white p-8 text-center rounded-none">
                                <h3 className="text-xl font-bold mb-4">Нужна помощь?</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Свяжитесь с нами прямо сейчас, и мы проконсультируем вас по любому вопросу.
                                </p>
                                <a
                                    href={`tel:${siteConfig.cleanPhone}`}
                                    className="flex items-center justify-center gap-2 text-xl font-bold text-[#01bbbf] hover:text-white transition-colors mb-2"
                                >
                                    <Phone className="h-5 w-5" />
                                    <span>{siteConfig.phone}</span>
                                </a>
                                <div className="text-xs text-gray-500">Круглосуточно, без выходных</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <InfoStrip />
            <ReviewsSection />
            <Partners />
        </main>
    );
}
