import { StatsGrid } from "@/components/company/StatsGrid";
import Link from "next/link";

export const metadata = {
    title: "О компании | ГидроРобот",
    description: "Информация о компании ГидроРобот, наши преимущества и статистика.",
    alternates: {
        canonical: 'https://gidroprocistkaufa.ru/company',
    },
};

export default function CompanyPage() {
    return (
        <div className="space-y-12">
            {/* Intro */}
            <section className="text-lg text-white leading-relaxed">
                <p>
                    Наша компания — это профессиональная команда сантехников с богатым опытом и современным парком оборудования.
                    Мы специализируемся на устранении засоров любой сложности, от квартирных труб до промышленных канализационных систем,
                    гарантируя качество и оперативность.
                </p>
            </section>

            {/* Stats */}
            <section>
                <h3 className="text-2xl font-bold mb-6 text-white">Компания в цифрах</h3>
                <StatsGrid />
            </section>

            {/* Quick Links */}
            <section>
                <h3 className="text-2xl font-bold mb-6 text-white">Разделы</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link
                        href="/company/clients"
                        className="p-6 bg-[#252525] rounded-xl border border-primary hover:border-primary transition-colors group"
                    >
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Клиенты</h4>
                        <p className="text-gray-300 text-sm">С кем мы работали в Уфе</p>
                    </Link>
                    <Link
                        href="/company/reviews"
                        className="p-6 bg-[#252525] rounded-xl border border-primary hover:border-primary transition-colors group"
                    >
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Отзывы</h4>
                        <p className="text-gray-300 text-sm">Что говорят наши клиенты</p>
                    </Link>
                    <Link
                        href="/company/faq"
                        className="p-6 bg-[#252525] rounded-xl border border-primary hover:border-primary transition-colors group"
                    >
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Часто задаваемые вопросы</h4>
                        <p className="text-gray-300 text-sm">Ответы на популярные вопросы</p>
                    </Link>
                    <Link
                        href="/company/price"
                        className="p-6 bg-[#252525] rounded-xl border border-primary hover:border-primary transition-colors group"
                    >
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Прайс-лист</h4>
                        <p className="text-gray-300 text-sm">Стоимость наших услуг</p>
                    </Link>
                </div>
            </section>

            {/* Advantages */}
            <section>
                <h3 className="text-2xl font-bold mb-6 text-white">Основные преимущества нашей компании</h3>
                <ol className="list-decimal pl-5 space-y-4 text-white marker:text-primary marker:font-bold">
                    <li className="pl-2">
                        <strong className="text-white">Оперативность.</strong> Приезжаем на вызов в течение 60 минут в любой район Уфы.
                    </li>
                    <li className="pl-2">
                        <strong className="text-white">Современное оборудование.</strong> Используем гидродинамические и электромеханические машины Rothenberger для безопасной и эффективной очистки.
                    </li>
                    <li className="pl-2">
                        <strong className="text-white">Честные цены.</strong> Озвучиваем стоимость работ до начала выполнения и не меняем её в процессе. Оплата только за результат.
                    </li>
                    <li className="pl-2">
                        <strong className="text-white">Гарантия качества.</strong> Даем гарантию на выполненные работы. Если проблема вернется — исправим бесплатно.
                    </li>
                </ol>
            </section>

            {/* Closing CTA */}
            <section className="bg-[#252525] p-6 rounded-xl border border-primary mt-8">
                <p className="text-white mb-4">
                    Мы готовы решить любую проблему с канализацией быстро и профессионально. Не откладывайте вызов специалиста!
                </p>
                <Link href="/contact" className="inline-block bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Вызвать мастера
                </Link>
            </section>
        </div>
    );
}
