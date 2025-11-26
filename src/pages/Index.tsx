import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CuratedSelection from "@/components/CuratedSelection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CuratedSelection />
      <Footer />
    </div>
  );
};

export default Index;
