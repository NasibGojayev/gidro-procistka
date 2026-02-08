import type { Metadata } from 'next';
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: `Əlaqə | ${siteConfig.name}`,
    description: "Bizimlə əlaqə saxlayın. Ünvan, telefon və iş saatları.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <div className="bg-gray-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        Əlaqə
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Sualınız var? Bizimlə əlaqə saxlayın və ya ofisimizə yaxınlaşın.
                    </p>
                </div>
            </div>

            <Section>
                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Info */}
                    <div>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="mb-4 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Telefon</h3>
                                <p className="text-gray-600">{siteConfig.phone}</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="mb-4 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-600">{siteConfig.email}</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="mb-4 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Ünvan</h3>
                                <p className="text-gray-600">{siteConfig.address}</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                                <div className="mb-4 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">İş Saatları</h3>
                                <p className="text-gray-600">{siteConfig.workingHours}</p>
                            </div>
                        </div>

                        {/* Address Display - Russia-safe fallback (no Google Maps) */}
                        <div className="mt-8 h-[300px] w-full rounded-xl bg-gray-100 overflow-hidden relative flex flex-col items-center justify-center p-8 text-center border border-gray-200">
                            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                            <p className="text-lg font-semibold text-gray-900 mb-2">{siteConfig.address}</p>
                            <p className="text-sm text-gray-600 mb-6">г.Уфа, ул. Бакалинская, 7</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://yandex.ru/maps/-/CDdkfRXw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                                >
                                    Открыть в Яндекс Картах
                                </a>
                                <a
                                    href="https://2gis.ru/ufa/geo/70030076163808988"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                                >
                                    Открыть в 2ГИС
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bizə Yazın</h2>
                        <ContactForm />
                    </div>

                </div>
            </Section>
        </div>
    );
}
