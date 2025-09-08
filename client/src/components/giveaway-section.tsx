import { Button } from "@/components/ui/button";
import { Heart, UserPlus, MessageCircle, Sparkles } from "lucide-react";

export function GiveawaySection() {
  const entryMethods = [
    {
      icon: Heart,
      title: "Like & Retweet",
      description: "Like & Retweet the launch post"
    },
    {
      icon: UserPlus,
      title: "Follow Accounts",
      description: "Follow Kya's official accounts"
    },
    {
      icon: MessageCircle,
      title: "Comment Recipes",
      description: "Comment what recipes you want next"
    }
  ];

  return (
    <section className="py-16 glitter-bg" data-testid="giveaway-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 sparkle-text" data-testid="giveaway-title">
          72-Hour Giveaway Contest 🎉✨💖
        </h2>
        <p className="text-xl text-primary-foreground mb-8" data-testid="giveaway-description">
          To celebrate our launch, we're giving away $KYA coins to our amazing community!
        </p>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8" data-testid="giveaway-rules">
          <h3 className="font-semibold text-2xl text-primary-foreground mb-6">How to Enter:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-primary-foreground">
            {entryMethods.map((method, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3"
                data-testid={`giveaway-method-${index + 1}`}
              >
                <method.icon className="w-8 h-8" />
                <p className="text-center font-medium">{method.title}</p>
                <p className="text-center text-sm opacity-80">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg"
          data-testid="button-enter-giveaway"
        >
          <Sparkles className="w-5 h-5 mr-3" />
          Enter the Giveaway
        </Button>
      </div>
    </section>
  );
}
