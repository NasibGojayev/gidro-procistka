"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have input component or use standard
import { useState } from "react";

export function PromoSection() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Logic to send data would go here
    };

    return (
        <Section id="zakaz" className="bg-primary text-white py-16">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Акция для новых клиентов</h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Оформите заявку прямо сейчас и получите скидку 10%
                </p>

                {submitted ? (
                    <div className="bg-white/20 p-6 rounded-lg text-xl font-bold animate-fade-in">
                        Заявка отправлена! Мы скоро свяжемся с вами.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
                        <Input
                            type="tel"
                            placeholder="Телефон"
                            required
                            className="flex-1 bg-white text-gray-900 border-0 h-auto py-4 px-6 text-base"
                        />
                        <Button type="submit" size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold uppercase py-4 h-auto px-8">
                            Хочу скидку 10%
                        </Button>
                    </form>
                )}
            </div>
        </Section>
    );
}
