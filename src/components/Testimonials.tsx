import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Þjálfunin er alveg frábær og akkúrat það sem ég þurfti til að byrja að koma mér af stað. Ég var alveg hættur að nenna þessu þegar ég var að mæta í ræktina með ekkert plan og ég vissi ekkert hvað ég ætti að borða eða neitt. Gummi lét mig hafa gott prógram og ég fékk næringaraðstoð sem kenndi mér að laga mitt eigið mataræði án þess að þurfa að borða bara kjúkling og hrísgrjón alla daga. Er mjög ánægður",
      author: "Einar",
      highlight: "GF Training tók óvissuna úr ferlinu",
    },
    {
      text: "Ég er 50 ára og þetta er fyrsta þjálfunin sem hefur raunverulega hjálpað mér að sjá breytingar í mörg ár. Gummi veit alveg hvað hann er að tala um. Maður hefur dagleg samskipti við hann og appið er einfalt og þæginlegt til notkunar.",
      author: "Simon",
      highlight: "Þetta prógramm virkar – líka eftir fertugt",
    },
    {
      text: "GF training veitti mér frábæra fræðslu, gott æfingarplan og leiðsögn í næringu. Gummi vill hjálpa manni að ná árangri og það hvetur mann áfram. Ég fékk þjálfun sem hentaði mér og sá árangur nánast strax. Stuðningurinn er frábær og ég mæli 100% með þjálfun hjá honum Gumma.”",
      author: "Heiðar",
      highlight: "Frábært og traust prógramm",
    },
    {
      text: "Ég lærði vel inn á að telja kaloríur og macros sem hjálpaði mér að ná loksins árangrinum mínum. Ég missti yfir 10kg og náði að byggja þau aftur upp í vöðva! Daglegu venjurnar mínar eru orðnar miklu heilbrigðari og mér líður mun betur með sjálfann mig”",
      author: "Andri",
      highlight: "GF Training bætti upp það sem vantaði – næringu, þjálfun og aga",
    },
    {
      text: "Gummi er alger snillingur. Skemmtilegar æfingar og geggjaðar til að byggja upp vöðva.",
      author: "Bjarki",
      highlight: "Besta ákvörðunin sem ég hef tekið fyrir sjálfan mig",
    },
    {
      text: "Mjög góð og einstaklingsmiðuð þjálfun! Allt svo vel sett saman í appinu. Mjög þægilegt að geta haldið utan um allt á sama stað og sjá árangurinn. Ég fékk mikinn stuðning því mér þótti ræktin ekki skemmtileg en Gummi breytti því alveg hjá mér! Takk",
      author: "Kristján",
      highlight: "Alvöru árangur",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary text-lg font-bold mb-4 font-sans">Lestu sögur viðskiptavina</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Star Rating */}
          <div className="lg:sticky lg:top-24 pt-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-8 h-8 fill-star text-star" />
                ))}
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                <span className="text-primary">4.9/5 stjörnur</span>
                <br />
                <span className="text-foreground">frá</span>
                <br />
                <span className="text-primary">150+ meðmæli</span>
              </h2>
              
              <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                Lestu hvers vegna hundruðir viðskiptavina elska GF Training og hvernig það hjálpaði þeim að verða sterkari og líða betur með sjálfan sig!
              </p>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
                onClick={() => window.location.href = '/pricing'}
              >
                skrá mig í dag
              </Button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="break-inside-avoid bg-card border border-border/20 rounded-2xl p-8 shadow-lg shadow-white/20 backdrop-blur-sm mb-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#ffc800] text-[#ffc800]" />
                  ))}
                </div>
                
                {/* Headline Quote */}
                <h3 className="font-bold text-lg mb-4 font-display text-primary">
                  "{testimonial.highlight}"
                </h3>
                
                {/* Body Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 font-sans font-medium">
                  "{testimonial.text}"
                </p>
                
                {/* Author Name */}
                <p className="text-foreground/60 font-sans text-sm">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="text-center py-16 mt-20">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-display leading-tight max-w-5xl mx-auto">
            "Að byrja í GF Training var besta ákvörðunin sem ég hef tekið.
            <br />
            <span className="text-primary">Ég hef aldrei verið jafn orkumikll og sterkur."</span>
          </p>
          <p className="text-foreground/70 font-sans text-2xl mb-8">- GF Training meðlimur, Gunnar</p>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-xl shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            onClick={() => window.location.href = '/pricing'}
          >
            skrá mig núna
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
