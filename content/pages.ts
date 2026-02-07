import { Zap, Clock, ShieldCheck, Truck, Home, Building2, Utensils, Warehouse } from "lucide-react";

export const homePageData = {
    hero: {
        title: "Любые услуги по прочистке канализации и засоров в Уфе",
        description: "Профессиональная команда сантехников с богатым опытом и профессиональным оборудованием для устранения любых засоров",
        cta: "Вызвать специалиста",
        promise: "МЫ ГАРАНТИРУЕМ",
        promiseSub: "КАЧЕСТВО ВЫПОЛНЕННЫХ РАБОТ"
    },
    servicesPreview: {
        heroText: "Специалисты нашей компании максимально оперативно прибудут на объект, проведут диагностику и устранят проблему, предложив наиболее оптимальный способ прочистки труб.",
        title: "Выполняем работы по прочистке засоров любой сложности"
    },
    equipment: {
        title: "Используем самое современное технологичное оборудование",
        description: "Мы используем только профессиональное оборудование, которое помогает устранить засор быстро, исключая повреждения ваших труб.",
        items: [
            { name: "Электромеханическая\nпрочистная машина", image: "/images/machines/electromechanical-cleaning-machine.webp", widthClass: "md:col-span-2" },
            { name: "Гидродинамическая\nпрочистная машина\nRothenberger", image: "/images/machines/rothenberger-hydrodynamic-machine.webp", widthClass: "md:col-span-2" },
            { name: "Система для\nтелеинспекции труб", image: "/images/machines/pipe-inspection-system.webp", widthClass: "md:col-span-2" },
            { name: "Каналопромывочная\nмашина", image: "/images/machines/sewer-flushing-machine.webp", widthClass: "md:col-span-3" },
            { name: "Машина секционная для прочистки трубопроводов", image: "/images/machines/sectional-pipeline-cleaning-machine.webp", widthClass: "md:col-span-3" }
        ]
    },
    benefits: {
        title: "Почему стоит выбрать нашу компанию?",
        items: [
            { text: "Бесплатный выезд по Уфе", sub: "Выезжаем во все районы города.", icon: Truck },
            { text: "Работаем с засорами любой сложности", sub: "Гарантируем результат.", icon: Zap },
            { text: "Будем уже через 60 минут", sub: "Оперативное реагирование.", icon: Clock },
            { text: "Оплата после гарантированного результата", sub: "Никаких предоплат.", icon: ShieldCheck }
        ]
    },
    about: {
        title: "О компании",
        description: "Наши специалисты регулярно проходят обучение и имеют соответствующие дипломы и сертификаты. Мы работаем на рынке более 10 лет и заслужили доверие тысяч клиентов.",
        process: [
            { step: 1, text: "Вы оставляете заявку или звоните нам" },
            { step: 2, text: "Мы согласуем время и детали выезда" },
            { step: 3, text: "Инженеры приезжают и устраняют проблему" },
            { step: 4, text: "Вы проверяете работу и производите оплату" }
        ]
    },
    team: {
        title: "Наши специалисты",
        members: [
            { name: "Виктор", role: "Специалист по прочистке канализации", photo: "/images/team/viktor-plumber.webp" },
            { name: "Степан", role: "Специалист по устранению засоров", photo: "/images/team/stepan-plumber.webp" },
            { name: "Евгений", role: "Специалист по прочистке канализации", photo: "/images/team/evgeny-plumber.webp" },
            { name: "Николай", role: "Специалист по прочистке засоров", photo: "/images/team/nikolay-plumber.webp" }
        ]
    },
    partners: {
        title: "Ключевые партнеры",
        items: [
            { name: "Gastro Gallery", img: "/images/partners/gastro-gallery.webp" },
            { name: "Rossinsky", img: "/images/partners/rossinsky.webp" },
            { name: "Чайхана", img: "/images/partners/chaihona.webp" },
            { name: "Моррис Ирландский паб", img: "/images/partners/morris-pub.webp" },
            { name: "Додо Пицца", img: "/images/partners/dodo-pizza.webp" },
        ]
    },
    coverage: {
        title: "Устраняем засоры везде где есть трубы",
        items: [
            { label: "Квартиры и таунхаусы", icon: "/images/ui/icon-apartments.webp" },
            { label: "Коттеджи и загородные дома", icon: "/images/ui/icon-cottages.webp" },
            { label: "Рестораны и общепит", icon: "/images/ui/icon-restaurants.webp" },
            { label: "Офисы", icon: "/images/ui/icon-offices.webp" }
        ],
        mainImage: "/images/ui/plumber-service-map.webp"
    },
    reviews: {
        title: "Отзывы о нас",
        items: [
            { name: "Цветков Александр Валерьевич", text: "Отличная работа, быстро и качественно." },
            { name: "Шахмурадов Владимир Робертович", text: "Спасибо за оперативность, рекомендую." },
            { name: "Виктор Иванович Петров", text: "Профессиональный подход, все объяснили." },
            { name: "Татьяна", text: "Мастера вежливые, сделали все чисто." }
        ]
    },
    ctaReviews: {
        ctaTitle: "Проблемы с канализацией?",
        ctaText: "Не ждите, пока ситуация ухудшится. Вызовите профессионалов прямо сейчас!",
        ctaButton: "Вызвать мастера",
        reviews: [
            { name: "Алексей", text: "Очень быстро приехали и все починили. Спасибо!", rating: 5 },
            { name: "Мария", text: "Вежливые мастера, аккуратная работа.", rating: 5 }
        ]
    }
};
