import { CardHoverEffectDemo } from "@/components/Cards";
import { GoogleGeminiEffectDemo } from "@/components/GeminiEffect";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { FloatingDockDemo } from "@/components/Dock";

export default function Home() {
  return (
    <main>
    <Navbar />
    <GoogleGeminiEffectDemo />
    <HeroSection />
    <CardHoverEffectDemo />
    </main>
  );
}
