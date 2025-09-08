import { Button } from "@/components/ui/button";
import { Play, Gift } from "lucide-react";

interface BirthdayUnlockSectionProps {
  isVisible: boolean;
}

export function BirthdayUnlockSection({ isVisible }: BirthdayUnlockSectionProps) {
  if (!isVisible) return null;

  return (
    <section id="birthday-unlock" className="py-16 gradient-bg" data-testid="birthday-unlock-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6" data-testid="birthday-unlock-title">
          🎉 Happy Birthday Surprise! 🎂
        </h2>
        <p className="text-xl text-primary-foreground mb-8" data-testid="birthday-unlock-description">
          The wait is over! Watch Kya's special birthday message and discover exclusive roadmap details.
        </p>
        <div className="bg-black rounded-2xl p-4 mb-8" data-testid="birthday-video-container">
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <Play className="w-16 h-16 text-white mr-4" />
            <span className="text-white text-xl">Special Birthday Video</span>
          </div>
        </div>
        <Button 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg"
          data-testid="button-claim-birthday-bonus"
        >
          <Gift className="w-5 h-5 mr-3" />
          Claim Birthday Bonus
        </Button>
      </div>
    </section>
  );
}
