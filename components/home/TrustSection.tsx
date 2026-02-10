import Link from 'next/link';
import { ClientsCarousel } from '@/components/company/ClientsCarousel';

export function TrustSection() {
    return (
        <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Нам доверяют
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Мы выполняем прочистку канализации и устранение засоров для организаций и частных клиентов по всей Уфе.
                    </p>
                </div>

                <ClientsCarousel />

                <div className="text-center mt-8">
                    <Link
                        href="/company/clients"
                        className="inline-flex items-center gap-2 text-primary hover:text-red-700 font-medium transition-colors"
                    >
                        Посмотреть все объекты
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
