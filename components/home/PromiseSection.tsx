import { homePageData } from "@/content/pages";
import { Section } from "@/components/ui/section";

export function PromiseSection() {
    const { hero } = homePageData;

    return (
        <div className="bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 py-8 md:px-6 text-center">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                    {hero.promise}
                </h2>
                <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold">
                    {hero.promiseSub}
                </p>
            </div>
        </div>
    );
}
