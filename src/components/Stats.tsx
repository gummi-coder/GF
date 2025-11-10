import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
            Taktu fyrsta skrefið og vertu hluti af ört vaxandi hópi karla sem eru að <span className="text-primary">breyta lífi sínu með GF Training.</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans">
            GF Training er hraðast vaxandi netþjálfunarfyrirtæki fyrir karla á Íslandi.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/10">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aH849lDG6zQ"
              title="GF Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center font-display">
            GF Training aðferðin er öflugasta kerfið fyrir karlmenn til að brenna fitu, byggja styrk og móta líkamann.
          </h3>
          <p className="text-lg text-foreground/80 text-center mb-8 font-sans">
            Hún virkar óháð bakrgunni og reynslu.
          </p>
          <div className="text-center">
            <Link to="/pricing">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-lg"
              >
                Skrá mig núna
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
