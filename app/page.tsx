import { HeroBanner } from "@/components/home/HeroBanner";
import { TourSummaryCard } from "@/components/home/TourSummaryCard";
import { InclusionAccordion } from "@/components/home/InclusionAccordion";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <div className="space-y-6 px-4 py-6">
      <HeroBanner />
      <TourSummaryCard />
      <InclusionAccordion />
      <ContactCTA />
    </div>
  );
}
