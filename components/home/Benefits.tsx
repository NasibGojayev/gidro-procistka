import { homePageData } from "@/content/pages";
import { CheckCircle, Clock, DollarSign, MapPin } from "lucide-react"; // Icons based on context

export function Benefits() {
    const { benefits } = homePageData;

    // Hardcoding items to match specific source content if needed, or mapping from data
    // Source items:
    // 1. Free callout in Ufa (MapPin)
    // 2. Any complexity (CheckCircle)
    // 3. Arrive in 60 mins (Clock)
    // 4. Payment after result (DollarSign)

    const items = [
        {
            icon: MapPin,
            title: "Бесплатный выезд по Уфе",
            text: "Бесплатный выезд мастера по Уфе в удобное для Вас время;"
        },
        {
            icon: CheckCircle,
            title: "Работаем с засорами любой сложности",
            text: "Мы справимся с любой проблемой и в любом месте"
        },
        {
            icon: Clock,
            title: "Будем уже через 60 минут",
            text: "Оперативный выезд бригады за счет удобного расположения офиса и множества мастеров"
        },
        {
            icon: DollarSign,
            title: "Оплата после гарантированного результата",
            text: "После выполнения прочистки мы предоставляем документы о проделанной работе. Оплата наличным и безналичным расчетом"
        }
    ];

    return (
        <div className="main-ourclients mt-12 mb-12 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="row">
                    <div className="col-xs-12 col-md-8 col-md-offset-2 text-center mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Почему обращаются к нам для устранения засоров</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="ourclients text-center p-6 hover:shadow-sm transition-shadow rounded-lg">
                                <div className="ourclients--title flex items-center justify-center gap-4 mb-4 text-xl font-bold text-gray-800">
                                    <span className="inline-block p-2 bg-gray-50 rounded-full text-[#01bbbf]">
                                        <Icon className="h-8 w-8" />
                                    </span>
                                    <span>{item.title}</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Anchor for Order Form */}
                <div id="zakaz"></div>
            </div>
        </div>
    );
}
