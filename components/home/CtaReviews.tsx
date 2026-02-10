import { homePageData } from "@/content/pages";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function CtaReviews() {
    const { ctaReviews } = homePageData;

    return (
        <Section className="bg-cyan-600 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* CTA Block */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{ctaReviews.ctaTitle}</h2>
                        <p className="text-xl text-cyan-100 mb-8">{ctaReviews.ctaText}</p>
                        <Button size="lg" className="bg-white text-cyan-700 hover:bg-gray-100 border-0 font-bold" asChild>
                            <a href="/contact">{ctaReviews.ctaButton}</a>
                        </Button>
                    </div>

                    {/* Reviews Block */}
                    <div className="space-y-4">
                        {ctaReviews.reviews.map((review, index) => (
                            <div key={index} className="bg-cyan-700/50 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
                                <div className="flex gap-1 text-yellow-300 mb-2">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-white mb-2 italic text-sm">"{review.text}"</p>
                                <p className="font-bold text-cyan-200 text-sm">- {review.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
}
