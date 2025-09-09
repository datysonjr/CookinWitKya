import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./countdown-timer";
import { Flame, Users, Cake } from "lucide-react";
import kyaHeaderImage from "@assets/kya-landing-page-header-photo_1757358335001.png";

interface HeroSectionProps {
  onBirthdayUnlock: () => void;
}

export function HeroSection({ onBirthdayUnlock }: HeroSectionProps) {
  // Kya's birthday: September 9th, 2025 at 12:00 AM EST
  const birthdayDate = new Date('2025-09-09T05:00:00Z'); // 12:00 AM EST = 5:00 AM UTC

  return (
    <section className="pt-24 pb-16 cooking-pattern" data-testid="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src={kyaHeaderImage} 
            alt="Kya with cooking utensils on a beautiful pink background" 
            className="mx-auto rounded-2xl shadow-2xl mb-12 w-full max-w-4xl h-96 object-cover"
            data-testid="hero-image"
          />
        </div>
        
        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight" data-testid="hero-title">
          The <span className="gradient-bg bg-clip-text text-transparent sparkle-text">Tastiest</span> ✨<br/>
          Meme Coin on the<br/>
          <span className="text-accent sparkle-text">Blockchain</span> 🍳💖
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
          CookinWitKya is serving up $KYA – launching on her birthday. 
          Don't miss the recipe for crypto greatness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://blast.fun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg floating-cta shadow-lg" data-testid="button-buy-kya-hero">
              <Flame className="w-5 h-5 mr-3" />
              Buy $KYA Now
            </Button>
          </a>
          <a 
            href="https://t.me/cookingwithkyaSUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              className="bg-card hover:bg-muted text-foreground px-8 py-4 rounded-xl font-semibold text-lg border-2 border-border hover:border-primary transition-all duration-300"
              data-testid="button-join-community"
            >
              <Users className="w-5 h-5 mr-3" />
              Join the Community
            </Button>
          </a>
        </div>
        
        {/* Birthday Countdown */}
        <div className="bg-card rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-border" data-testid="countdown-container">
          <h3 className="font-heading font-semibold text-2xl mb-4 flex items-center justify-center sparkle-text" data-testid="countdown-title">
            <Cake className="text-secondary mr-3" />
            Birthday Countdown 🎂✨💕
          </h3>
          <CountdownTimer 
            targetDate={birthdayDate} 
            onCountdownComplete={onBirthdayUnlock}
          />
          <p className="text-muted-foreground mt-4" data-testid="countdown-message">
            Special surprise unlocks at midnight on September 9th, 2025!
          </p>
        </div>
      </div>
    </section>
  );
}
