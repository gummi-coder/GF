import { useEffect } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Mail, ExternalLink, Link as LinkIcon, Twitter, CalendarDays, Globe, Dumbbell, Calculator } from "lucide-react";

// Customize your links here - easy to add, remove, or modify
const links = [
  {
    title: "Frír líkamsræktar grunnur",
    url: "/email2",
    icon: CalendarDays,
    color: "bg-primary/90 hover:bg-primary",
    isVip: false
  },
  {
    title: "Macros Reiknivél",
    url: "/macros",
    icon: Calculator,
    color: "bg-primary/90 hover:bg-primary",
    isVip: false
  },
  {
    title: "Skráðu þig í fjarþjálfun",
    url: "https://www.gftraining.is/pricing",
    icon: Dumbbell,
    color: "bg-primary hover:bg-primary/90",
    isVip: false
  },
  {
    title: "VIP Umsókn",
    url: "https://www.gftraining.is/apply",
    icon: LinkIcon,
    color: "bg-primary hover:bg-primary/90",
    isVip: false
  },
  {
    title: "Skráðu þig á póstlistann minn",
    url: "/email1",
    icon: Mail,
    color: "bg-primary/80 hover:bg-primary/90",
    isVip: false
  },
  {
    title: "GF Training heimasíða",
    url: "https://gftraining.is",
    icon: ExternalLink,
    color: "bg-primary/85 hover:bg-primary/95",
    isVip: false
  },
];

// Customize your profile info here
const profile = {
  name: "Guðmundur Friðgeirsson",
  title: "GF Training",
  bio: "Hjálpa körlum að vera besta útgáfan af sjálfum sér",
  image: "/images/DSC02226 copy.JPG", // Change this to your profile image path
};

const Links = () => {
  // Remove any ConvertKit email signup forms from this page
  useEffect(() => {
    const removeConvertKitForms = () => {
      // Remove ConvertKit forms that might be injected
      const convertKitForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"], [id*="gummi"]');
      convertKitForms.forEach(form => form.remove());
    };

    // Remove immediately and set up interval to catch any that load later
    removeConvertKitForms();
    const interval = setInterval(removeConvertKitForms, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden flex items-center justify-center py-12 px-4"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
          radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
        `,
        backgroundSize: '100% 2000px, 100% 2000px',
        backgroundPosition: '0 0, 0 100%',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {/* Profile Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center scale-125"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10" />
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl font-black mb-2 font-display">
            {profile.name}
          </h1>
          <p className="text-xl text-primary font-bold mb-3">
            {profile.title}
          </p>
          <p className="text-foreground/70 text-sm max-w-xs mx-auto">
            Ég hjálpa körlum að vera besta útgáfan
            <br />
            af sjálfum sér
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${link.color} text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-lg active:scale-95`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.title}</span>
              </a>
            );
          })}
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center items-center gap-6">
          <a
            href="https://instagram.com/gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://tiktok.com/@gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="TikTok"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com/@gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://t.me/gftraining"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors"
            aria-label="Telegram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} GF Training
          </p>
        </div>
      </div>
    </div>
  );
};

export default Links;

