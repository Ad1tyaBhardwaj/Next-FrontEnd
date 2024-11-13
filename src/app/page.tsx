import { CardHoverEffectDemo } from "@/components/Cards";
import { GoogleGeminiEffectDemo } from "@/components/GeminiEffect";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <GoogleGeminiEffectDemo />
    <HeroSection />
    <CardHoverEffectDemo />
    </main>
  );
}
