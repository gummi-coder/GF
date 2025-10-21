import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Method = () => {
  const benefits = [
    "Transform Their Bodies",
    "So You Can Display Your Strength",
    "Showcase Your Self Respect",
    "Live As An Example To Your Family",
  ];

  const avoids = [
    "Not Settle For Unhealthy, Not Confident, Not Feeling Good About Yourself",
    "Not Allow You To Say 'Your Best Is Behind You...'",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            No gimmicks. No Fad Diets. No bs.
            <br />
            <span className="text-primary">Long Term Real Results that last.</span>
          </h2>
          <p className="text-xl text-foreground/80 font-bold font-sans">
            We're In The business of helping men like YOU
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-semibold font-sans">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          {avoids.map((avoid, i) => (
            <div key={i} className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-lg md:text-xl font-sans">{avoid}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg md:text-xl font-sans">
              We will help you regain your personal power & feel confident in your skin.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg md:text-xl font-sans">
              With <span className="font-bold">long term, sustainable approaches</span> to health and fitness 
              that will leave you in <span className="font-bold">control of your body and the way it looks for the rest of your life.</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-12 py-7 rounded-full text-lg"
            onClick={() => window.location.href = 'http://localhost:8082/apply'}
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;
