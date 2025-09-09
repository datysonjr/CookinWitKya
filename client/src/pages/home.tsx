import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { HowToBuySection } from "@/components/how-to-buy-section";
import { GiveawaySection } from "@/components/giveaway-section";
import { CommunitySection } from "@/components/community-section";
import { Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans" data-testid="home-page">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <HowToBuySection />
      <GiveawaySection />
      <CommunitySection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12" data-testid="footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Utensils className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-2xl">CookinWitKya</span>
            </div>
            <p className="text-lg text-muted mb-6" data-testid="footer-tagline">
              The tastiest meme coin on the blockchain.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
                data-testid="footer-link-roadmap"
              >
                Roadmap
              </button>
              <button 
                onClick={() => document.getElementById('how-to-buy')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
                data-testid="footer-link-how-to-buy"
              >
                How to Buy
              </button>
              <button 
                onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-primary transition-colors"
                data-testid="footer-link-community"
              >
                Community
              </button>
            </div>
            
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4" data-testid="footer-disclaimer">
                <strong>Disclaimer:</strong> $KYA is a community-driven meme coin created for entertainment and community engagement. 
                Not financial advice. Please do your own research before investing.
              </p>
              <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
                © 2025 CookinWitKya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
