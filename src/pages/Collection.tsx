import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchCard from "@/components/WatchCard";
import { Button } from "@/components/ui/button";
import watchDiver from "@/assets/watch-diver.jpg";
import watchDress from "@/assets/watch-dress.jpg";
import watchSport from "@/assets/watch-sport.jpg";
import watchVintage from "@/assets/watch-vintage.jpg";

const categories = ["MEN", "WOMEN", "KIDS", "CLASSIC", "WEDDING", "SPORTS"];

const watches = [
  { id: 1, name: "Seamaster Diver", category: "DIVER", price: 5600, image: watchDiver },
  { id: 2, name: "Calatrava", category: "DRESS", price: 32500, image: watchDress },
  { id: 3, name: "Big Bang", category: "SPORT", price: 12800, image: watchSport },
  { id: 4, name: "Tank Must", category: "VINTAGE", price: 3200, image: watchVintage },
];

const Collection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <h1 className="font-display text-6xl mb-4">Our Collection</h1>
            <p className="text-luxury-text-muted text-lg max-w-3xl mb-12">
              Explore our complete range of luxury timepieces, from classic dress watches to robust divers.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <span className="text-sm tracking-wider flex items-center">Filter By:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setActiveFilter(activeFilter === category ? null : category)}
                  className={`border-border hover:border-primary hover:text-primary ${
                    activeFilter === category ? "border-primary text-primary" : ""
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {watches.map((watch) => (
                <WatchCard key={watch.id} {...watch} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collection;
