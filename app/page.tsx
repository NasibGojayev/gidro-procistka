import { Hero } from "@/components/home/Hero";
import { ServicePreview } from "@/components/home/ServicePreview";
import { EquipmentGrid } from "@/components/home/EquipmentGrid";
import { Benefits } from "@/components/home/Benefits";
import { RequestFormSection } from "@/components/home/RequestFormSection";
import { AboutSection } from "@/components/home/AboutSection";
import { TeamSection } from "@/components/home/TeamSection";
import { Partners } from "@/components/home/Partners";
import { CoverageSection } from "@/components/home/CoverageSection";
import { InfoStrip } from "@/components/home/InfoStrip";
import { ReviewsSection } from "@/components/home/ReviewsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Прочистка канализации в Уфе | ГидроРобот",
  description: "Профессиональное устранение засоров в трубах, прочистка канализации в квартире и частном доме. Аварийный выезд круглосуточно.",
  keywords: ["прочистка канализации", "устранение засоров", "сантехник уфа", "промывка труб"],
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
      <TeamSection />
      <Partners />
      <CoverageSection />
      <InfoStrip />
      <ReviewsSection />
    </main>
  );
}
