import { Button } from "@/components/ui/button";
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm tracking-[0.3em] text-primary uppercase">
            Excellence in Motion
          </p>
          
          <h1 className="mb-6 font-display text-7xl font-bold leading-none tracking-tight">
            Timeless<br />Precision
          </h1>
          
          <p className="mb-12 text-lg text-luxury-text-muted max-w-xl leading-relaxed">
            Discover a curated collection of the world's most exceptional timepieces. 
            Where engineering meets artistry in perfect harmony.
          </p>
          
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-luxury-gold-hover px-8 py-6 text-sm tracking-wider"
            >
              EXPLORE COLLECTION
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground/20 hover:border-primary hover:text-primary px-8 py-6 text-sm tracking-wider"
            >
              OUR HERITAGE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
