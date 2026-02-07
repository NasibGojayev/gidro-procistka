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

                        {/* Map Embed - Mocked with placeholder as Google Maps requires API Key or simple iframe url which is not provided */}
                        <div className="mt-8 h-[300px] w-full rounded-xl bg-gray-200 overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428490145536!2d49.8517592765324!3d40.37719087144594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0f5e01!2zQmFrxLE!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
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
