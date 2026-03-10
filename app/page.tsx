import { FeatureSection } from "@/features/feature-section/feature-section";
import { HeroSection } from "@/features/hero-section";
import { SupportSection } from "@/features/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection/>
        <FeatureSection/>
        <SupportSection/>
      </article>
    </>
  );
}
