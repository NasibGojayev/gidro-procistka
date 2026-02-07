import { siteConfig } from "@/content/site";

interface ServiceJsonLdProps {
    service: {
        title: string;
        description: string;
        image?: string;
        price?: string;
        url?: string;
    };
}

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": siteConfig.name,
            "telephone": siteConfig.cleanPhone,
            "address": siteConfig.address,
            "priceRange": service.price || "$$"
        },
        "areaServed": {
            "@type": "City",
            "name": siteConfig.city
        },
        "image": service.image ? `https://prochistka-kanalizatsii-ufe.ru${service.image}` : undefined
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
