import { Breadcrumbs } from "@/components/company/Breadcrumbs";
import Link from "next/link";
import { Metadata } from "next";
import MapWrapper from "@/components/contacts/MapWrapper";

export const metadata: Metadata = {
    title: "Контакты | ГидроРобот",
    description: "Свяжитесь с нами для вызова сантехника или консультации.",
    alternates: {
        canonical: 'https://gidroprocistkaufa.ru/contacts',
    },
};

export default function ContactsPage() {
    return (
        <main className="min-h-screen bg-[#1c1c1c] text-white pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Breadcrumbs */}
                <Breadcrumbs
                    items={[
                        { label: "Контакты", isActive: true }
                    ]}
                />

                {/* Page Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-10">Контакты</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-10 order-1 lg:order-1">
                        {/* Phone */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Наш телефон</h2>
                            <ul className="space-y-2 text-2xl font-bold">
                                <li>
                                    <a href="tel:+79173510409" className="hover:text-primary transition-colors">
                                        +7 917 351 04 09
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Address */}
                        <div>
                            <h2 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Наш адрес</h2>
                            <p className="text-xl">г.Уфа, ул. Бакалинская, 7</p>
                        </div>

                        {/* Map */}
                        <MapWrapper />
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="order-2 lg:order-2">
                        <section className="bg-[#252525] p-6 md:p-8 rounded-xl border border-[#333]">
                            <h2 className="text-2xl font-bold mb-6">Напишите нам!</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Ваше имя <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#333] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="Иван"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Ваш E-mail
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full bg-[#333] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="mail@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Ваш телефон <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-[#333] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="+7 (999) 000-00-00"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">
                                        Сообщение
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-[#333] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y"
                                        placeholder="Текст сообщения..."
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3 py-2">
                                    <input
                                        type="checkbox"
                                        required
                                        id="consent"
                                        className="mt-1 w-4 h-4 rounded border-gray-600 bg-[#333] text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="consent" className="text-sm text-gray-400">
                                        Я согласен на <Link href="/privacy" className="text-primary hover:underline">обработку персональных данных</Link>.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors uppercase tracking-wide"
                                >
                                    Отправить
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
