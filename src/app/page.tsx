import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatutoryFunctions from "@/components/StatutoryFunctions";
import Anniversary from "@/components/Anniversary";
import RoadTo2027 from "@/components/RoadTo2027";
import LegalSupport from "@/components/LegalSupport";
import MediaPress from "@/components/MediaPress";
import CareerBanner from "@/components/CareerBanner";
import Footer from "@/components/Footer";
import PaperShred from "@/components/PaperShred";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Header />
      <main>
        {/* Hero → What We Do (white tear over hero bottom) */}
        <Hero />
        <PaperShred variant={1} />
        <StatutoryFunctions />

        {/* Anniversary → Road to 2027 (white tear over dark photo) */}
        <Anniversary />
        <PaperShred variant={2} />
        <RoadTo2027 />
        <LegalSupport />
        <MediaPress />
        <CareerBanner />
      </main>
      <Footer />
    </div>
  );
}
