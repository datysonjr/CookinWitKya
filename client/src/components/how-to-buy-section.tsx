import { Button } from "@/components/ui/button";
import { Video, Lock } from "lucide-react";

export function HowToBuySection() {
  const steps = [
    {
      number: 1,
      title: "Download Slush Wallet",
      description: "Get your crypto wallet ready for the cooking adventure",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      number: 2,
      title: "Fund with SUI",
      description: "Add some cryptocurrency to your wallet to make the swap",
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      number: 3,
      title: "Swap for $KYA on Blast.fun",
      description: "Use Blast.fun to exchange your crypto for delicious $KYA tokens",
      bgColor: "bg-accent",
      textColor: "text-accent-foreground"
    },
    {
      number: 4,
      title: "Hold & Enjoy Perks",
      description: "Unlock giveaways, cookbook access, and exclusive benefits",
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    }
  ];

  return (
    <section id="how-to-buy" className="py-16 bg-muted" data-testid="how-to-buy-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" data-testid="how-to-buy-title">
            How to Buy <span className="text-primary sparkle-text">$KYA</span> 💰✨💎
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="how-to-buy-description">
            Follow these simple steps to get your hands on the tastiest meme coin
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.map((step) => {
            const isBlastStep = step.number === 3;
            const StepComponent = isBlastStep ? 'a' : 'div';
            const stepProps = isBlastStep ? {
              href: "https://blast.fun/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            } : {
              className: "bg-card rounded-xl p-6 shadow-lg border border-border"
            };
            
            return (
              <StepComponent 
                key={step.number} 
                {...stepProps}
                data-testid={`buy-step-${step.number}`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`${step.bgColor} ${step.textColor} rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
                {isBlastStep && (
                  <p className="text-primary font-medium mt-2">
                    Click to visit Blast.fun →
                  </p>
                )}
              </StepComponent>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-4 rounded-xl font-semibold text-lg mb-4"
            data-testid="button-watch-video"
          >
            <Video className="w-5 h-5 mr-3" />
            Watch How-to Video
          </Button>
          <p className="text-sm text-muted-foreground" data-testid="video-unlock-message">
            <Lock className="w-4 h-4 mr-1 inline" />
            Video unlocks on Kya's birthday at midnight EST
          </p>
        </div>
      </div>
    </section>
  );
}
