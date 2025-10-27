import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomApplicationForm from "@/components/CustomApplicationForm";

const Apply = () => {

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
        radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
      `,
      backgroundSize: '100% 2000px, 100% 2000px',
      backgroundPosition: '0 0, 0 100%',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tight uppercase font-display">
                GF<span className="text-primary">Training</span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Apply for your <span className="text-primary font-black">1:1 body Transformation</span> assessment Right now
            </h1>
            
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Break Free From Frustration 👉</strong> Uncover what's really holding you back from getting toned after 40, and <strong>finally feel at home in your own skin!</strong>
                </p>
              </div>

              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Find Your Inner Warrior 👉</strong> Transform your body, reclaim your power, and prove that <strong>your strongest, most confident self is still ahead of you!</strong>
                </p>
              </div>

              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Take the First Step Toward a Confident, Healthier You 👉</strong> Apply now to see if you qualify...
                </p>
              </div>
            </div>
          </div>

          {/* Custom Application Form */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Umsókn um líkamsbreytingu</h2>
              <p className="text-foreground/60">Fylltu út formið hér að neðan til að byrja</p>
            </div>
            
            <CustomApplicationForm />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4">
            <div className="text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
            </div>
            
            
            <div className="text-sm text-foreground/60">
              Contact GF Training<br />
              <a href="mailto:support@gftraining.com" className="text-primary hover:text-primary/80">
                support@gftraining.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Apply;
