export type ClientType = 'brand' | 'generic';

export interface Client {
    name: string;
    type: ClientType;
    subtitle?: string;
}

export const clientCategories = [
    {
        id: 'retail',
        title: 'Сетевые магазины и ритейл',
        description: 'Регулярная прочистка канализации в торговых точках — залог бесперебойной работы и соблюдения санитарных норм.',
        clients: [
            { name: 'Сетевой магазин «Байрам»', type: 'brand' as ClientType, subtitle: 'Ритейл' },
            { name: 'Сетевой магазин «Магнит»', type: 'brand' as ClientType, subtitle: 'Ритейл' },
            { name: '«Лемана Про»', type: 'brand' as ClientType, subtitle: 'Ритейл' },
        ]
    },
    {
        id: 'food',
        title: 'Фастфуд, кафе и рестораны',
        description: 'Жировые отложения в канализации — главная проблема заведений общепита, требующая профессиональной промывки.',
        clients: [
            { name: 'KFC', type: 'brand' as ClientType, subtitle: 'Фастфуд' },
            { name: 'Burger King', type: 'brand' as ClientType, subtitle: 'Фастфуд' },
            { name: 'Кафе и рестораны', type: 'generic' as ClientType, subtitle: 'Общепит' },
        ]
    },
    {
        id: 'commerce',
        title: 'Торговля, рынки, склады',
        description: 'Высокая нагрузка на канализационные системы требует регулярного обслуживания и устранения засоров.',
        clients: [
            { name: 'Торговые центры', type: 'generic' as ClientType, subtitle: 'Торговля' },
            { name: 'Рынок', type: 'generic' as ClientType, subtitle: 'Торговля' },
            { name: 'Оптовые базы и склады', type: 'generic' as ClientType, subtitle: 'Складские помещения' },
        ]
    },
    {
        id: 'institutions',
        title: 'Учреждения',
        description: 'Школы, больницы и поликлиники нуждаются в надёжной работе канализации для безопасности людей.',
        clients: [
            { name: 'Школы и детские сады', type: 'generic' as ClientType, subtitle: 'Образование' },
            { name: 'Больницы', type: 'generic' as ClientType, subtitle: 'Здравоохранение' },
            { name: 'Поликлиники', type: 'generic' as ClientType, subtitle: 'Здравоохранение' },
        ]
    },
    {
        id: 'housing',
        title: 'ЖКХ и управляющие организации',
        description: 'Обслуживание стояков, подвалов и общедомовых сетей — наша постоянная работа с управляющими компаниями.',
        clients: [
            { name: 'ТСЖ', type: 'generic' as ClientType, subtitle: 'ЖКХ' },
            { name: 'ЖЭУ', type: 'generic' as ClientType, subtitle: 'ЖКХ' },
            { name: 'Управляющие компании', type: 'generic' as ClientType, subtitle: 'ЖКХ' },
        ]
    },
    {
        id: 'private',
        title: 'Частные и коммерческие объекты',
        description: 'Работаем с частными домами, магазинами и офисами по всей Уфе и Башкортостану.',
        clients: [
            { name: 'Частные дома', type: 'generic' as ClientType, subtitle: 'Частный сектор' },
            { name: 'Магазины и офисы', type: 'generic' as ClientType, subtitle: 'Коммерческие объекты' },
        ]
    },
];

// Flat list for carousel
export const allClients: Client[] = clientCategories.flatMap(cat =>
    cat.clients.map(client => ({ ...client }))
);

