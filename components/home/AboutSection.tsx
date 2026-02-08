import { PhoneCall, FileText, Truck, CheckSquare } from "lucide-react"; // Icons for process steps

export function AboutSection() {
    return (
        <div className="main-about padding-default py-16 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                {/* About Company Text */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Как мы работаем</h2>
                    <div className="font-md font-md_light text-lg text-gray-600 leading-relaxed font-light">
                        Выполняем устранение засоров в Уфе более 10 лет. Наши специалисты используют телеинспекцию для точной диагностики и подбирают оптимальный метод прочистки — механический или гидродинамический.
                    </div>
                </div>

                {/* Scheme Header */}
                <div className="row mt-8 mb-8">
                    <div className="col-xs-12">
                        <h3 className="text-2xl font-bold text-gray-900">Схема работы с нами</h3>
                    </div>
                </div>

                {/* Scheme Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="mt-8">
                        <div className="font-md color-primary text-[#01bbbf] mb-6 flex justify-center md:justify-start">
                            <div className="h-20 w-20 flex items-center justify-center">
                                <PhoneCall className="h-16 w-16" />
                            </div>
                        </div>
                        <div className="mt-4 text-gray-700">
                            Вы оставляете заявку, позвонив по номеру телефона или заполнив форму на сайте
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="mt-8">
                        <div className="font-md color-primary text-[#01bbbf] mb-6 flex justify-center md:justify-start">
                            <div className="h-20 w-20 flex items-center justify-center">
                                <FileText className="h-16 w-16" />
                            </div>
                        </div>
                        <div className="mt-4 text-gray-700">
                            Мы согласуем с вами стоимость работ, место и время
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mt-8">
                        <div className="font-md color-primary text-[#01bbbf] mb-6 flex justify-center md:justify-start">
                            <div className="h-20 w-20 flex items-center justify-center">
                                <Truck className="h-16 w-16" />
                            </div>
                        </div>
                        <div className="mt-4 text-gray-700">
                            Инженеры приезжают в оговоренное время и проводят работы
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="mt-8">
                        <div className="font-md color-primary text-[#01bbbf] mb-6 flex justify-center md:justify-start">
                            <div className="h-20 w-20 flex items-center justify-center">
                                <CheckSquare className="h-16 w-16" />
                            </div>
                        </div>
                        <div className="mt-4 text-gray-700">
                            Вы проверяете выполненную инженером работу и производите оплату
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
