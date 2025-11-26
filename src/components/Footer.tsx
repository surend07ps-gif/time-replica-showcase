import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl mb-4">THE TIME STORE</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curators of exceptional timepieces for the discerning collector. 
              Defining luxury through precision and elegance since 1985.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Collection</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Limited Editions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Service</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Watch Care
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new arrivals and exclusive events.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-secondary border-border"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-luxury-gold-hover px-8">
                JOIN
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 The Time Store. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
