import CustomApplicationForm from "@/components/CustomApplicationForm";
import SEO from "@/components/SEO";

const Apply = () => {
  return (
    <>
      <SEO
        title="VIP Umsókn - Einkaþjálfun með takmarkaðu plássi | GF Training"
        description="Sæktu um VIP þjálfun með takmarkaðu plássi. Premium einkaþjálfun fyrir karla sem vilja ná bestum árangri. Sérsniðin þjálfun og næringarráðleggingar."
        keywords="VIP þjálfun, VIP umsókn, einkaþjálfun VIP, premium þjálfun, einkaþjálfun með takmarkaðu plássi, GF Training VIP"
        canonical="https://gftraining.is/apply"
      />
      <div
        className="min-h-screen bg-background text-foreground relative overflow-hidden"
        style={{
          backgroundImage: `
        radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
        radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
      `,
          backgroundSize: "100% 2000px, 100% 2000px",
          backgroundPosition: "0 0, 0 100%",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
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

        <div className="pt-24">
          <div className="container mx-auto max-w-4xl px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Sæktu um <span className="text-primary font-black">VIP Þjálfun</span> hjá GF Training
              </h1>

              <div className="space-y-6 max-w-3xl mx-auto text-left">
                <div className="text-lg leading-relaxed">
                  <p className="mb-4">
                    <strong>✅ Vertu sá maður sem þú veist að þú getur verið 👉</strong> Komumst að rót vandans sem hefur haldið þér frá því að komast í þitt drauma form
                  </p>
                </div>

                <div className="text-lg leading-relaxed">
                  <p className="mb-4">
                    <strong>✅ Taktu stjórnina aftur 👉</strong> Breyttu líkamanum, endurheimtu sjálfstraustið og sýndu að <strong>þú ert bara rétt að byrja!</strong>
                  </p>
                </div>

                <div className="text-lg leading-relaxed">
                  <p className="mb-4">
                    <strong>✅ Taktu fyrsta skrefið í átt að sterkari og heilbrigðari þér 👉</strong> Sæktu um núna til að sjá hvort VIP þjálfun hendi þér...
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Umsókn í VIP Þjálfun</h2>
                <p className="text-foreground/60">Fylltu út formið hér að neðan til að byrja</p>
              </div>

              <CustomApplicationForm />
            </div>
          </div>
        </div>

        <footer className="bg-card/30 backdrop-blur-sm border-t border-white/10 py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center space-y-4">
              <div className="text-sm text-foreground/60">
                <a href="#" className="hover:text-primary transition-colors mr-4">
                  Persónuverndarstefna
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Skilmálar
                </a>
              </div>

              <div className="text-sm text-foreground/60">
                Hafa samband við GF Training
                <br />
                <a href="mailto:gummi@gftraining.is" className="text-primary hover:text-primary/80">
                  gummi@gftraining.is
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Apply;
