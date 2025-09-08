import { Flame, Users, BookOpen, Globe } from "lucide-react";

export function RoadmapSection() {
  const roadmapSteps = [
    {
      number: 1,
      title: "Preheat the Oven – Launch",
      description: "Coin creation, birthday drop, first community posts. Getting our kitchen ready for the main course!",
      icon: Flame,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    },
    {
      number: 2,
      title: "Mix the Ingredients – Community Growth",
      description: "Giveaways, recipe suggestions, engagement contests. Building our community one family member at a time.",
      icon: Users,
      bgColor: "bg-secondary",
      textColor: "text-secondary-foreground"
    },
    {
      number: 3,
      title: "Cookbook Utility – Real Value",
      description: "Fan recipes become part of a community cookbook, NFT drops & exclusive perks for holders.",
      icon: BookOpen,
      bgColor: "bg-accent",
      textColor: "text-accent-foreground"
    },
    {
      number: 4,
      title: "Serve it Hot – Expansion",
      description: "Collabs, partnerships, and scaling the $KYA kitchen worldwide. Taking our recipe global!",
      icon: Globe,
      bgColor: "bg-primary",
      textColor: "text-primary-foreground"
    }
  ];

  return (
    <section id="roadmap" className="py-16" data-testid="roadmap-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" data-testid="roadmap-title">
            The $KYA <span className="text-accent sparkle-text">Recipe</span> 🥘✨💖
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="roadmap-description">
            Follow our step-by-step roadmap to crypto success, seasoned with community love
          </p>
        </div>
        
        <div className="space-y-8">
          {roadmapSteps.map((step, index) => (
            <div 
              key={step.number} 
              className="roadmap-step bg-card rounded-2xl p-8 shadow-lg border border-border"
              data-testid={`roadmap-step-${step.number}`}
            >
              <div className="flex items-start space-x-6">
                <div className={`${step.bgColor} ${step.textColor} rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-2xl mb-3 flex items-center">
                    <step.icon className={`mr-2 ${step.number === 1 ? 'text-primary' : step.number === 2 ? 'text-secondary' : step.number === 3 ? 'text-accent' : 'text-primary'}`} />
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
