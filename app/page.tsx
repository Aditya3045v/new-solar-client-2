import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import MidSection from "@/components/MidSection";
import FeatureBand from "@/components/FeatureBand";
import Products from "@/components/Products";
import SolarCalculator from "@/components/SolarCalculator";
import Subsidies from "@/components/Subsidies";
import Reviews from "@/components/Reviews";
import RecentProjects from "@/components/RecentProjects";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-deep font-sans selection:bg-primary selection:text-white">
      <Hero />

      <MidSection />

      <FeatureBand />

      <Products />

      <SolarCalculator />

      <Subsidies />

      <Reviews />

      <RecentProjects />

      <CTASection />
    </main>
  );
}
