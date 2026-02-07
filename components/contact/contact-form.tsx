"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/content/services";

const formSchema = z.object({
    name: z.string().min(2, "Имя должно содержать минимум 2 буквы"),
    phone: z.string().min(10, "Пожалуйста, введите корректный номер телефона"),
    service: z.string().min(1, "Выберите услугу"),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(data: FormValues) {
        setStatus("loading");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send");

            setStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Ваше имя</label>
                    <input
                        id="name"
                        {...register("name")}
                        className={cn(
                            "flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                            errors.name && "border-red-500 focus:ring-red-500"
                        )}
                        placeholder="Иван Иванов"
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Телефон</label>
                    <input
                        id="phone"
                        {...register("phone")}
                        className={cn(
                            "flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                            errors.phone && "border-red-500 focus:ring-red-500"
                        )}
                        placeholder="+7 987 654 3210"
                    />
                    {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Тип услуги</label>
                <select
                    id="service"
                    {...register("service")}
                    className={cn(
                        "flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
                        errors.service && "border-red-500 focus:ring-red-500"
                    )}
                >
                    <option value="">Выберите...</option>
                    {services.map((service) => (
                        <option key={service.slug} value={service.title}>{service.title}</option>
                    ))}
                    <option value="Другое">Другое</option>
                </select>
                {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Комментарий (необязательно)</label>
                <textarea
                    id="message"
                    {...register("message")}
                    className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Опишите проблему..."
                />
            </div>

            <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700" disabled={status === "loading"}>
                {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {status === "loading" ? "Отправка..." : "Отправить заявку"}
            </Button>

            {status === "success" && (
                <div className="rounded-md bg-green-50 p-4 text-green-700 border border-green-200">
                    Заявка принята! Мы свяжемся с вами в ближайшее время.
                </div>
            )}
            {status === "error" && (
                <div className="rounded-md bg-red-50 p-4 text-red-700 border border-red-200">
                    Произошла ошибка. Пожалуйста, позвоните нам.
                </div>
            )}
        </form>
    );
}
