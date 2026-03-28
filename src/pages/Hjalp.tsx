import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const SUPPORT_EMAIL = "gummi@gftraining.is";

const Hjalp = () => {
  return (
    <>
      <SEO
        title="Hjálp | GF Training"
        description="Þarftu aðstoð með GF Training appinu eða þjónustu? Sendu tölvupóst á gummi@gftraining.is."
        keywords="hjálp, GF Training, aðstoð, app"
        canonical="https://gftraining.is/hjalp"
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
        <nav className="fixed top-6 left-4 right-4 z-50">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 max-w-[1200px] mx-auto">
            <div className="flex items-center h-16">
              <Link to="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <ArrowLeft size={20} />
                <span className="text-sm font-medium">Tilbaka</span>
              </Link>
            </div>
          </div>
        </nav>

        <section className="pt-28 pb-24 px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-black font-display mb-6">
              <span className="text-primary">Hjálp</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-10">
              Ef þú þarft aðstoð með appinu, áskrift eða eitthvað annað, sendu okkur tölvupóst, við svörum eins fljótt og auðið er.
            </p>

            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Hjálp%20-%20GF%20Training`}
              className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm px-8 py-8 hover:border-primary/40 transition-colors group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary group-hover:bg-primary/25 transition-colors">
                <Mail className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground/60 mb-1">Sendu póst á</p>
                <p className="text-xl font-bold text-primary break-all">{SUPPORT_EMAIL}</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hjalp;
