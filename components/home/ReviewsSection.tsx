import { homePageData } from "@/content/pages";
import { UserCircle2 } from "lucide-react";

export function ReviewsSection() {
    const { reviews } = homePageData;

    return (
        <section className="main-reviews padding-default py-16 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="row mb-10">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="text-3xl font-bold text-gray-900">Отзывы о нас</h2>
                    </div>
                </div>

                <div className="row mt-10">
                    {/* Grid of reviews */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {reviews.items.map((item, index) => (
                            <div key={index} className="item h-full">
                                <div className="rewiew bg-white border border-gray-200 p-6 rounded-lg h-full hover:shadow-md transition-shadow">
                                    <div className="rewiew--autor font-bold text-[#01bbbf] mb-4 text-lg">
                                        {item.name}
                                    </div>

                                    <div className="rewiew--text text-gray-600 italic text-sm leading-relaxed">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
