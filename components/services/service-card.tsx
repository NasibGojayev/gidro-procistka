import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    slug: string;
    className?: string;
}

export function ServiceCard({ title, description, icon: Icon, slug, className }: ServiceCardProps) {
    return (
        <Link
            href={`/services/${slug}`}
            className={cn(
                "group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5",
                className
            )}
        >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mb-4 flex-1 text-gray-600 line-clamp-3">{description}</p>
            <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Ətraflı <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
}
