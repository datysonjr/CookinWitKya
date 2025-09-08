import { Button } from "@/components/ui/button";
import { Users, Utensils, Cake, Heart } from "lucide-react";
import kyaPhoto2 from "@assets/kya-landing-page-photo-2_1757358946164.png";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={kyaPhoto2} 
              alt="$KYA logo engraved in a cooking pan with pink kitchen utensils" 
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
              data-testid="about-image"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" data-testid="about-title">
              Who is <span className="text-primary sparkle-text">Kya</span>? 👩‍🍳✨💕
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="about-description">
              Kya is an online cooking creator bringing flavor, culture, and good vibes to the internet. 
              Now, she's stirring up something new – $KYA, a community-driven meme coin inspired by her 
              passion for food and fun.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4" data-testid="feature-community">
                <Users className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Community-powered & fan-focused</h3>
                  <p className="text-muted-foreground">Built by the community, for the community</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-cooking">
                <Utensils className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Cooking meets crypto culture</h3>
                  <p className="text-muted-foreground">Where culinary creativity meets blockchain innovation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-birthday">
                <Cake className="text-primary text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Born on Kya's birthday</h3>
                  <p className="text-muted-foreground">A special celebration that keeps on giving</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold" data-testid="button-follow-journey">
              <Heart className="w-4 h-4 mr-2" />
              Follow Kya's Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
