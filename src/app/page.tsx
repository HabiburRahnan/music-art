import HeroSection from "@/components/HeroSection";
import FeatureCourse from "@/components/FeatureCourse";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] text-white">

      <HeroSection></HeroSection>
      <FeatureCourse></FeatureCourse>
      <WhyChooseUs></WhyChooseUs>
    </main>
  );
}
