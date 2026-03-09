import { FeatureSection } from "@/features/feature-section/feature-section";
import { HeroSection } from "@/features/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection/>
        <FeatureSection/>
      </article>
    </>
  );
}
