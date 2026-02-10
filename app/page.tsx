import { Hero } from "@/components/home/Hero";
import { ServicePreview } from "@/components/home/ServicePreview";
import { EquipmentGrid } from "@/components/home/EquipmentGrid";
import { Benefits } from "@/components/home/Benefits";
import { RequestFormSection } from "@/components/home/RequestFormSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CoverageSection } from "@/components/home/CoverageSection";
import { TrustSection } from "@/components/home/TrustSection";
import { InfoStrip } from "@/components/home/InfoStrip";
import { ReviewsSection } from "@/components/home/ReviewsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Прочистка канализации в Уфе — быстрый выезд | ГидроРобот",
  description: "Устранение засоров в Уфе: гидродинамическая промывка канализации, прочистка труб в квартире и доме. Выезд за 60 минут. Работаем круглосуточно.",
  keywords: ["прочистка канализации Уфа", "устранение засоров", "гидродинамическая промывка", "засор унитаза Уфа", "аварийная прочистка канализации"],
  alternates: {
    canonical: 'https://gidroprocistkaufa.ru',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <ServicePreview />
      <EquipmentGrid />
      <Benefits />
      <RequestFormSection />
      <AboutSection />
      <CoverageSection />
      <TrustSection />
      <InfoStrip />
      <ReviewsSection />
    </main>
  );
}
