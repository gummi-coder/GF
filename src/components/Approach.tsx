import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Approach = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-display">
              <span className="text-primary">VIP fjarþjálfun fyrir karlmenn</span> sem vilja raunverlagar breytingar
            </h2>
            <p className="text-xl font-semibold text-foreground/90 mb-6 font-sans">
              Það er fátt verra en að líða illa í eigin líkama...
            </p>
            <div className="space-y-4 text-lg text-foreground/80">
              <p className="font-sans">
                👉 Fjárþjálfun hjálpar körlum að breyta hugarfari, hegðun og venjum
              </p>
              <p className="font-sans">
                👉 Engin önnur aðferð skilar þér jafn djúpum og varanlegum árangri.
              </p>
              <p className="font-sans">
                👉 <span className="font-bold text-foreground">Ég hjálpa þér að breyta lífsstílnum - ekki bara líkamanum.</span>
              </p>
            </div>
            <div className="mt-8">
              <Link to="/apply">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-lg">
                  Sækja um
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/10 shadow-2xl bg-card/40 max-w-md">
              <img
                src="/images/2 3.png"
                alt="VIP fjarþjálfun fyrir karlmenn"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
