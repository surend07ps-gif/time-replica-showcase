import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CuratedSelection from "@/components/CuratedSelection";
import FeaturedBrands from "@/components/FeaturedBrands";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <CuratedSelection />
      <FeaturedBrands />
      <CallToAction />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
