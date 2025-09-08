import { Twitter, Instagram, MessageCircle } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function CommunitySection() {
  const socialPlatforms = [
    {
      name: "Follow on X",
      description: "Latest updates & announcements",
      icon: Twitter,
      color: "text-blue-500",
      href: "#"
    },
    {
      name: "Follow on Instagram",
      description: "Behind-the-scenes cooking content",
      icon: Instagram,
      color: "text-pink-500",
      href: "#"
    },
    {
      name: "Follow on TikTok",
      description: "Quick recipes & cooking tips",
      icon: FaTiktok,
      color: "text-gray-800",
      href: "#"
    },
    {
      name: "Join Telegram",
      description: "Community chat & discussions",
      icon: MessageCircle,
      color: "text-blue-600",
      href: "#"
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
      </div>
    </section>
  );
}
