import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-mechanism.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 md:via-background/80 md:to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-5 md:px-6 py-20 md:py-32 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <p className="mb-3 md:mb-4 text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.2em] text-primary uppercase font-medium">
            Excellence in Motion
          </p>
          
          <h1 className="mb-4 md:mb-6 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] md:leading-tight lg:leading-none">
            Timeless<br />Precision
          </h1>
          
          <p className="mb-6 md:mb-12 text-sm md:text-lg text-muted-foreground max-w-md md:max-w-2xl leading-relaxed">
            Discover a curated collection of the world's most exceptional timepieces. 
            Where engineering meets artistry in perfect harmony.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link to="/collection" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm tracking-wider transition-all w-full"
              >
                EXPLORE COLLECTION
              </Button>
            </Link>
            <Link to="/brands" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm tracking-wider transition-all w-full"
              >
                VIEW BRANDS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
