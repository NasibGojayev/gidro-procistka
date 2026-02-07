import { siteConfig } from "@/content/site";

export function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteConfig.name,
        "image": "https://santexnik-baku-demo.vercel.app/og-image.jpg", // Placeholder
        "@id": "https://santexnik-baku-demo.vercel.app",
        "url": "https://santexnik-baku-demo.vercel.app",
        "telephone": siteConfig.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address,
            "addressLocality": siteConfig.city,
            "addressCountry": "AZ"
        },
        // "geo": {
        //   "@type": "GeoCoordinates",
        //   "latitude": 40.409264,
        //   "longitude": 49.867092
        // },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "21:00"
        },
        "sameAs": [
            siteConfig.socials.instagram
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
