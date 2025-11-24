import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Method = () => {
  const benefits = [
    "að breyta líkamanum sínum",
    "sýna styrk sinn",
    "sýna sjálfsvirðingu sína",
    "vera fyrirmynd fyrir fjölskylduni",
  ];

  const avoids = [
    "Ég vill ekki sjá þig sætta þig við að vera óheilbrigður, án sjálfstrausts eða óánægður með sjálfan þig.",
    "Ég vill ekki leyfa þér að trúa að þín \"Bestu ár\" sér búin",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display leading-tight md:leading-tight tracking-tight max-w-4xl mx-auto" style={{ textWrap: "balance" }}>
            Engar skyndilausnir. Ekkert Kjaftæði. Ekkert bull.
            <br />
            <span className="text-primary">Raunverulegur árangur sem endist</span>
          </h2>
          <p className="text-xl text-foreground/80 font-bold font-sans">
            Ég er í þeim bransa að hjálpa körlum eins og þér að
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
              Ég hjálpa þér að vera sterkari og finna sjálfstraustið aftur.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg md:text-xl font-sans">
              Með <span className="font-bold">langtíma, sjálfbærri nálgun</span> á heilsu og líkamsrækt sem færir þér <span className="font-bold">stjórn á líkamanum og hvernig hann lítur út</span>.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-12 py-7 rounded-full text-lg"
            onClick={() => window.location.href = 'http://localhost:8082/pricing'}
          >
            Skrá mig
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Method;
