import { Instagram, MessageCircle } from "lucide-react";
import { FaTiktok, FaSnapchatGhost, FaTwitch, FaTelegramPlane } from "react-icons/fa";

export function CommunitySection() {
  const socialPlatforms = [
    {
      name: "Follow on Instagram",
      description: "Behind-the-scenes cooking content",
      icon: Instagram,
      color: "text-pink-500",
      href: "https://www.instagram.com/cookinwitkya/"
    },
    {
      name: "Follow on TikTok",
      description: "Quick recipes & cooking tips",
      icon: FaTiktok,
      color: "text-white",
      href: "https://www.tiktok.com/@cookinwitkya?_t=8sdsxdpbq1d&_r=1"
    },
    {
      name: "Follow on Snapchat",
      description: "Daily cooking adventures",
      icon: FaSnapchatGhost,
      color: "text-yellow-400",
      href: "https://www.snapchat.com/@cookinwitkya?invite_id=Y9-q2Et6&locale=en_US&share_id=0ij3fGfFQbWz2B_Vv85L0w&sid=d55e65a5f36947c39e6da3867bce3152"
    },
    {
      name: "Watch on Twitch",
      description: "Live cooking streams",
      icon: FaTwitch,
      color: "text-purple-500",
      href: "https://www.twitch.tv/cooknwitkya"
    }
  ];

  return (
    <section id="community" className="py-16" data-testid="community-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" data-testid="community-title">
            Join the <span className="text-accent sparkle-text">$KYA Fam</span> 👨‍👩‍👧‍👦✨💕
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="community-description">
            Turn on notifications, follow, and stay cooking with us across all platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <a 
              key={index}
              href={platform.href}
              className="bg-card hover:bg-muted rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 shadow-lg border border-border block"
              data-testid={`social-platform-${index + 1}`}
            >
              <platform.icon className={`w-10 h-10 ${platform.color} mb-4 mx-auto`} />
              <h3 className="font-semibold text-lg mb-2">{platform.name}</h3>
              <p className="text-muted-foreground text-sm">{platform.description}</p>
            </a>
          ))}
        </div>
        
        {/* Telegram Group - Special CTA */}
        <div className="mt-16 text-center">
          <div className="glitter-bg rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-3xl text-primary-foreground mb-4 sparkle-text" data-testid="telegram-title">
              Join Our Exclusive Telegram! 🚀✨
            </h3>
            <p className="text-xl text-primary-foreground mb-6 opacity-90">
              Get insider updates, participate in exclusive giveaways, and connect with the $KYA community! 💎
            </p>
            <a 
              href="https://t.me/cookingwithkyaSUI" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl floating-cta"
              data-testid="button-join-telegram"
            >
              <FaTelegramPlane className="w-6 h-6 mr-3" />
              Join Telegram Group
            </a>
            <p className="text-sm text-primary-foreground mt-4 opacity-75">
              🔥 Limited spots available! Join now for early access to $KYA drops!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
