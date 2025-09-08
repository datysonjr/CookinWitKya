import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Utensils, Flame } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3" data-testid="nav-logo">
            <Utensils className="text-2xl text-primary" />
            <span className="font-heading font-bold text-xl">Cooking With Kya</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('how-to-buy')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-how-to-buy"
            >
              How to Buy
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-community"
            >
              Community
            </button>
          </div>
          
          {/* Buy Button */}
          <div className="hidden md:block">
            <Button className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-medium" data-testid="button-buy-kya-nav">
              <Flame className="w-4 h-4 mr-2" />
              Buy $KYA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                data-testid="mobile-nav-roadmap"
              >
                Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('how-to-buy')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                data-testid="mobile-nav-how-to-buy"
              >
                How to Buy
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                data-testid="mobile-nav-community"
              >
                Community
              </button>
              <Button className="btn-primary text-primary-foreground px-6 py-2 rounded-lg font-medium w-full mt-4" data-testid="button-buy-kya-mobile">
                <Flame className="w-4 h-4 mr-2" />
                Buy $KYA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
