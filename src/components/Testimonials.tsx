import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      text: "GF Training fjarlægði alla óvissu úr þjálfuninni. Í stað þess að eyða tíma í að finna út æfingar og mataræði sjálfur, er ég með þjálfara sem leiðbeinir mér, fylgist með mér og heldur mér ábyrgan. Á aðeins fjórum mánuðum hef ég séð frábæran árangur, ég byggi upp vöðva, léttist, bæti úthald og finn orku sem ég hef ekki fundið í mörg ár. Þetta prógramm er raunhæft, ég get borðað uppáhaldsmatinn minn og æfingarnar passa fullkomlega inn í dagskrána mína.",
      author: "Einar",
      highlight: "GF Training tók óvissuna úr ferlinu",
    },
    {
      text: "Ég er 50 ára og þetta er fyrsta prógrammið sem hefur raunverulega hjálpað mér að sjá breytingar í mörg ár. Þeir koma fram við mann eins og fjölskyldu. Maður hefur dagleg samskipti við þjálfarann sinn og mataræðið er einfalt, þú lærir að velja réttu matinn byggt á vísindum. Þetta er ekkert kjaftæði bara árangur.",
      author: "Simon",
      highlight: "Þetta prógramm virkar – líka eftir fertugt",
    },
    {
      text: "Þeir standa við allt sem þeir lofa, fræðslu, næringar leiðsögn og æfingakerfi sem skapa heilbrigðan og sjálfbæran lífsstíl. Ég er karl á miðjum aldri með hormónabreytingar og þeir vissu nákvæmlega hvað átti að leggja áherslu á og hvaða þjálfari myndi henta mér. Ég sá árangur nánast strax. Stuðningurinn er frábær – fagmennskan og samfélagið gera allan muninn. Mæli 100% með.",
      author: "Heiðar",
      highlight: "Frábært og traust prógramm",
    },
    {
      text: "Að fá þjálfara sem leiðbeinir mér í gegnum æfingar og kennir mér að fylgja makróum var það sem ég hafði saknað. Líkamsbyggingin mín, útlit og sjálfstraust hafa breyst stórkostlega – en það mikilvægasta er að ég hef breytt lífsstílnum mínum og matarvenjum til frambúðar.",
      author: "Andri",
      highlight: "GF Training bætti upp það sem vantaði – næringu, þjálfun og aga",
    },
    {
      text: "Að fá þjálfara í þessu prógrammi og breyta líkamanum mínum þegar ég hélt að það væri orðið of seint, hefur bókstaflega breytt lífi mínu. Stuðningurinn, sérsniðna nálgunin og ferðalagið í heild sinni hafa verið algjörlega lífsbreytandi.",
      author: "Bjarki",
      highlight: "Besta ákvörðunin sem ég hef tekið fyrir sjálfan mig",
    },
    {
      text: "Þú færð raunverulega einstaklingsmiðaða þjálfun. Æfingarnar eru hannaðar fyrir þig, og þú færð stuðning og hvatningu allan tímann. Prógrammið kennir þér raunhæfar væntingar, hjálpar líkamanum að jafna efnaskipti og gerir þig sterkari. Ef þú ert stöðugur og vinnur verkið – þetta virkar.",
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

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
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
            <span className="text-primary">Ég hef aldrei verið jafn orkumikll og sterkari."</span>
          </p>
          <p className="text-foreground/70 font-sans text-2xl mb-8">- GF Training meðlimur, Gunnar</p>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-xl shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            onClick={() => window.location.href = 'http://localhost:8082/pricing'}
          >
            skrá mig núna
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
