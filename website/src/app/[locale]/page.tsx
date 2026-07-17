import { HeroSection } from "@/components/home/HeroSection";
import { ThesisSection } from "@/components/home/ThesisSection";
import { LayersSection } from "@/components/home/LayersSection";
import { CasesSection } from "@/components/home/CasesSection";
import { AboutSnapshotSection } from "@/components/home/AboutSnapshotSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ThesisSection />
      <LayersSection />
      <CasesSection />
      <AboutSnapshotSection />
    </>
  );
}
