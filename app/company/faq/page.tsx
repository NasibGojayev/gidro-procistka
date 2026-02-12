export const metadata = {
    title: "Вопрос-ответ | ГидроРобот",
    description: "Часто задаваемые вопросы о прочистке канализации."
};

const faqs = [
    {
        question: "Из чего состоит система телеинспекции?",
        answer: "Система телеинспекции состоит из камеры высокого разрешения, гибкого кабеля для продвижения внутри трубы и монитора, на который выводится изображение. Это позволяет точно определить место и характер засора или повреждения."
    },
    {
        question: "Телеинспекция трубопроводов: как проводится?",
        answer: "Специалист вводит камеру в трубопровод и продвигает её по всей длине обследуемого участка. Изображение передается на экран в режиме реального времени, что позволяет оперативно оценить состояние труб и выявить дефекты."
    },
    {
        question: "Порядок проведения работ",
        answer: "1. Выезд специалиста и диагностика проблемы. 2. Выбор метода прочистки (гидродинамический или электромеханический). 3. Проведение работ. 4. Контрольная проверка результата (возможна видеодиагностика). 5. Оплата."
    },
    {
        question: "Как устранить засор в унитазе?",
        answer: "Для устранения простых засоров можно использовать вантуз. Если это не помогает, лучше вызвать специалиста, так как использование химических средств или троса без навыка может повредить сантехнику или трубы."
    },
    {
        question: "Откуда берутся засоры канализации?",
        answer: (
            <>
                <p className="mb-2">Основные причины засоров:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Попадание посторонних предметов (тряпки, влажные салфетки).</li>
                    <li>Накопление жировых отложений на стенках труб.</li>
                    <li>Неправильный монтаж канализационной системы (неверный уклон).</li>
                    <li>Известковый налет и ржавчина (в старых трубах).</li>
                </ul>
            </>
        )
    },
    {
        question: "Как устранить засор самостоятельно?",
        answer: "Мелкие засоры можно попробовать устранить горячей водой с содой или вантузом. Однако, сложные засоры требуют профессионального оборудования, так как бытовые методы могут лишь временно облегчить ситуацию или усугубить ее."
    }
];

export default function FAQPage() {
    return (
        <section>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group bg-[#252525] rounded-xl border border-primary overflow-hidden transition-all hover:border-gray-500 open:border-primary/50">
                        <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white hover:bg-[#2a2a2a] transition-colors focus:outline-none">
                            <span className="text-lg">{faq.question}</span>
                            <span className="ml-4 flex-shrink-0 transition-transform group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 group-open:text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </summary>
                        <div className="border-t border-primary bg-[#222] p-4 text-gray-200 leading-relaxed group-open:animate-fadeIn">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
