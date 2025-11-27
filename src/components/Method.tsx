import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Method = () => {
  const benefits = [
    "Breyta líkamanum sínum.",
    "Byggja upp styrk styrk sinn.",
    "Bera virðingu fyrir sjálfum sér.",
    "Verða fyrirmynd fjölskyldunar.",
  ];

  const avoids = [
    "Sætta sig við að vera óheilgrigður, með litið sjálfstraust eða óánægður með sjálfan þig.",
    "Leyfa þér að trúa því að þín \"bestu ár\" séu búin.",
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
              Verða sterkari og finna sjálfstraustið aftur.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <p className="text-lg md:text-xl font-sans">
              Ná sýnum markmiðium og líða vel í sýni eigin líkama.
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
