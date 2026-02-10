'use client';

import { allClients } from '@/content/clients';

export function ClientsCarousel() {
    // Duplicate items for seamless infinite loop
    const items = [...allClients, ...allClients];

    return (
        <div className="relative overflow-hidden py-8">
            <div className="carousel-container">
                <div className="carousel-track">
                    {items.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="carousel-item"
                        >
                            <div className="flex items-center gap-2 h-12 px-5 bg-card rounded-full border border-border hover:border-primary/50 transition-colors shadow-sm">
                                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                    {client.name}
                                </span>
                                {client.subtitle && (
                                    <>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                                            {client.subtitle}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .carousel-container {
                    width: 100%;
                }

                .carousel-track {
                    display: flex;
                    gap: 0.75rem;
                    animation: scroll 50s linear infinite;
                }

                .carousel-track:hover {
                    animation-play-state: paused;
                }

                .carousel-item {
                    flex-shrink: 0;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .carousel-track {
                        animation: none;
                    }
                }

                @media (max-width: 768px) {
                    .carousel-track {
                        animation-duration: 40s;
                    }
                }
            `}</style>
        </div>
    );
}
