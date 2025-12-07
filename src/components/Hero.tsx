import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mechanism.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70 md:via-background/80 md:to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-32 pt-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="mb-2 md:mb-4 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.2em] text-primary uppercase font-medium">
            Excellence in Motion
          </p>
          
          <h1 className="mb-3 md:mb-6 font-display text-[2.5rem] leading-[1.1] md:text-6xl lg:text-7xl font-bold md:leading-tight lg:leading-none">
            Timeless<br />Precision
          </h1>
          
          <p className="mb-5 md:mb-12 text-sm md:text-lg text-muted-foreground max-w-sm md:max-w-2xl leading-relaxed">
            Discover a curated collection of the world's most exceptional timepieces.
          </p>
          
          <div className="flex flex-row gap-3 md:gap-4">
            <Link to="/collection" className="flex-1 sm:flex-none">
              <Button 
                size="default" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 md:px-8 py-5 md:py-6 text-[10px] md:text-sm tracking-wider transition-all w-full"
              >
                EXPLORE
              </Button>
            </Link>
            <Link to="/brands" className="flex-1 sm:flex-none">
              <Button 
                size="default" 
                variant="outline"
                className="border-border hover:bg-secondary px-4 md:px-8 py-5 md:py-6 text-[10px] md:text-sm tracking-wider transition-all w-full"
              >
                BRANDS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
