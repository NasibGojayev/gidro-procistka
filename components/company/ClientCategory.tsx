import { Store, Utensils, Warehouse, School, Building2, Home } from 'lucide-react';
import { Client } from '@/content/clients';

interface ClientCategoryProps {
    title: string;
    description: string;
    clients: Client[];
    categoryId: string;
}

const iconMap: Record<string, any> = {
    retail: Store,
    food: Utensils,
    commerce: Warehouse,
    institutions: School,
    housing: Building2,
    private: Home,
};

export function ClientCategory({ title, description, clients, categoryId }: ClientCategoryProps) {
    const Icon = iconMap[categoryId] || Building2;

    return (
        <div className="mb-16">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 flex items-center gap-3">
                    <Icon className="w-7 h-7 text-primary" />
                    {title}
                </h2>
                <p className="text-muted-foreground text-lg">{description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {clients.map((client, index) => (
                    <div
                        key={`${client.name}-${index}`}
                        className="bg-card rounded-lg border border-border p-5 hover:shadow-md hover:border-primary/30 transition-all min-h-[100px] flex flex-col justify-center"
                    >
                        <h3 className="text-base font-semibold text-foreground mb-1">
                            {client.name}
                        </h3>
                        {client.subtitle && (
                            <p className="text-sm text-muted-foreground">
                                {client.subtitle}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
