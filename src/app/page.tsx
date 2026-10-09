import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatutoryFunctions from "@/components/StatutoryFunctions";
import AnniversaryBanner from "@/components/AnniversaryBanner";
import RoadTo2027 from "@/components/RoadTo2027";
import LegalSupport from "@/components/LegalSupport";
import NewsSection from "@/components/NewsSection";
import CareerCTA from "@/components/CareerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatutoryFunctions />
        <AnniversaryBanner />
        <RoadTo2027 />
        <LegalSupport />
        <NewsSection />
        <CareerCTA />
      </main>
      <Footer />
    </>
  );
}
