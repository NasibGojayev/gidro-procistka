import { homePageData } from "@/content/pages";

export const metadata = {
    title: "Отзывы клиентов | ГидроРобот",
    description: "Отзывы о работе компании ГидроРобот."
};

export default function ReviewsPage() {
    const { reviews } = homePageData;

    return (
        <section>
            <div className="space-y-6">
                {reviews.items.map((review, index) => (
                    <div key={index} className="bg-[#252525] p-6 rounded-xl border border-[#333] hover:border-gray-600 transition-colors">
                        <div className="font-bold text-lg mb-2 text-white">{review.name}</div>
                        <p className="text-gray-300 leading-relaxed">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
