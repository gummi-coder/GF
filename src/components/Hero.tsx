import { Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Star Rating */}
        <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-star text-star drop-shadow-sm" />
          ))}
          <span className="text-foreground/90 ml-3 text-lg font-medium">
            Með yfir <span className="font-bold text-primary">150+</span> Meðmæli
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in font-display">
          <span className="text-primary">Taktu stjórn á þínu lífi og</span>{" "}
          <span className="text-foreground">vertu sá maður sem þú veist að þú getur verið</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto mb-12 animate-fade-in leading-relaxed font-sans">
          Ekkert bull. Engar afsakanir. Bara árangur sem endist.
          <br />
          Við erum hér til að hjálpa körlum eins og þér að taka stjórnina aftur.
        </p>

        {/* Video Section */}
        <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl group cursor-pointer">
            {/* Video Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                <Button
                  size="lg"
                  className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-24 h-24 group-hover:scale-110 transition-transform"
                >
                  <Play className="w-12 h-12 fill-current" />
                </Button>
              </div>
            </div>
            
            {/* Coach Label */}
            <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-lg">
              COACH GF
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/pricing">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-7 rounded-full animate-fade-in shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Skrá mig núna!
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
