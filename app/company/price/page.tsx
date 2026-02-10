export const metadata = {
    title: "Прайс лист на услуги | ГидроРобот",
    description: "Стоимость услуг по прочистке канализации в Уфе."
};

const pricingCategories = [
    {
        title: "Устранение засора",
        items: [
            { service: "Устранение засора в квартире", price: "от 1500 ₽" },
            { service: "Устранение засора в частном доме", price: "от 3000 ₽" },
            { service: "Устранение засора наружной канализации", price: "от 5000 ₽" },
        ]
    },
    {
        title: "Промывка канализации",
        items: [
            { service: "Гидродинамическая промывка труб (до 100мм)", price: "от 250 ₽/пог.м" },
            { service: "Гидродинамическая промывка труб (100-300мм)", price: "от 350 ₽/пог.м" },
            { service: "Профилактическая промывка", price: "от 4000 ₽" },
        ]
    },
    {
        title: "Телеинспекция труб",
        items: [
            { service: "Видеодиагностика труб (до 50м)", price: "от 3000 ₽" },
            { service: "Видеодиагностика сложных участков", price: "от 5000 ₽" },
            { service: "Запись видеоотчета на флешку", price: "Бесплатно" },
        ]
    }
];

export default function PricePage() {
    return (
        <section className="space-y-12">
            <p className="text-lg text-gray-300 leading-relaxed">
                Стоимость работ зависит от сложности засора, диаметра труб и используемого оборудования.
                Точную цену мастер назовет после бесплатной диагностики на месте.
            </p>

            {pricingCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                    <h3 className="text-xl font-bold text-white border-l-4 border-primary pl-3">{category.title}</h3>
                    <div className="overflow-x-auto rounded-xl border border-[#333]">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead className="bg-[#2A2A2A] text-white font-bold uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4">Вид работ</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Стоимость</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#333] bg-[#252525]">
                                {category.items.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-[#2f2f2f] transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{item.service}</td>
                                        <td className="px-6 py-4 text-primary font-bold whitespace-nowrap">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </section>
    );
}
