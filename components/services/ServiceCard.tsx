import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    slug: string;
    price?: string;
    className?: string;
}

export function ServiceCard({
    title,
    description,
    image,
    slug,
    price,
    className,
}: ServiceCardProps) {
    return (
        <article
            className={cn(
                "group flex flex-col h-full bg-white border border-gray-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                className
            )}
        >
            <Link href={`/${slug}/`} className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 w-full bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#01bbbf] transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                        {price && (
                            <span className="text-lg font-bold text-[#01bbbf]">
                                {price}
                            </span>
                        )}
                        <span className="text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors flex items-center gap-1">
                            Подробнее
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}
