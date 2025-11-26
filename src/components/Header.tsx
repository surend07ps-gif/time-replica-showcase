import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl tracking-wider">
            THE TIME STORE
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm tracking-wider transition-colors ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/collection"
              className={`text-sm tracking-wider transition-colors ${
                isActive("/collection") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              COLLECTION
            </Link>
            <Link
              to="/brands"
              className={`text-sm tracking-wider transition-colors ${
                isActive("/brands") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              BRANDS
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Shield className="h-4 w-4" />
              VERIFIED
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground"
              >
                0
              </Badge>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
