"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function RequestFormSection() {
    return (
        <section className="main-order bg-[#f5f5f5] py-16 font-sans">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    {/* Title */}
                    <div className="max-w-2xl text-center mb-10">
                        <h2 className="text-3xl font-bold text-primary mb-4">Акция для новых клиентов</h2>
                    </div>

                    {/* Form Container */}
                    <div className="w-full max-w-4xl bg-white p-8 md:p-12 shadow-sm border border-gray-200">
                        <form className="flex flex-col md:flex-row gap-6 items-stretch">
                            {/* Phone Input with Icon */}
                            <div className="flex-1 relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <input
                                    type="tel"
                                    placeholder="Телефон"
                                    className="w-full pl-10 pr-4 h-12 border border-gray-300 rounded focus:outline-none focus:border-primary transition-colors text-gray-700"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="md:w-auto">
                                <Button
                                    type="submit"
                                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 uppercase tracking-wide rounded"
                                >
                                    Хочу скидку 10%
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Footer Text */}
                    <p className="mt-8 text-gray-600 text-center">
                        Оформите заявку прямо сейчас и получите скидку 10%
                    </p>
                </div>
            </div>
        </section>
    );
}
