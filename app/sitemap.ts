import { MetadataRoute } from 'next';
import { services } from '@/content/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gidroprocistkaufa.ru';

    // Static routes
    const staticRoutes = [
        '',
        '/company',
        '/services',
        '/contacts',
        '/privacy',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes (served at root level /slug)
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...serviceRoutes];
}
