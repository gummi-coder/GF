import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "150+", label: "Meðmæli", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "GF Ambassadors", icon: <Award className="w-8 h-8" /> },
    { number: "2", label: "GF Training strafsmenn", icon: <Users className="w-8 h-8" /> },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Byrjunin",
      description: "Ég byrjaði að þjálfa vini og fjölskyldu, fannst mér mjög gaman og gefandi að hjálpa fólki og sjá það ná árangri og líða betur með sjálfan sig, það sem byrjaði sem áhuga mál breyttist fljótt í ástríðu, að sjá aðra styrkja, bæta sjálfstraustið og bæta vellíðan"
    },
    {
      year: "2023",
      title: "Útskrifaðist frá ISSA og byrjaði að þjálfa ókunnuga",
      description: "Eftir að hafa útskrifast sem löggiltur einkaþjálfari frá ISSA hóf ég fjarþjálfun hjá GF Training. Þetta var fyrsta skrefið í að byggja upp raunverulegt fyrirtæki og breyta áhuga áhugamáli yfir í faglegt starf, með markmiðið að hjálpa sem flestum að breyta lífi sínu í gegnum þjálfun og næringu."
    },
    {
      year: "2024",
      title: "GF Training Appið verður til",
      description: "Ég þróaði mitt eigið app og flutti allt yfir á einn stað, það gerði mér kleift að þjálfa fleiri á einstaklingsmiðaðan hátt, með sérsniðnum æfingum, næringar plönum og stuðningi, hvar sem fólk er statt í heiminum."
    },
    {
      year: "2025",
      title: "VIP Programið fæðist",
      description: "Til að hjálpa fólki sem vildi taka þetta lengra setti ég af stað GF VIP Programið, háþróað kerfi fyrir þá sem vilja alvöru breytingu. Þetta varð lykilþáttur í að auka árangur og tryggja langtíma niðurstöður hjá viðskiptavinum."
    },
    {
      year: "2026",
      title: "Stækkun og samfélag",
      description: "GF Training stækkar teymið og opnar fyrir fleiri þjálfara. Við byrjum að halda áskoranir og viðburði sem tengja saman fólk sem er að vinna að markmiðum sínum. Fyrirtækið fer úr einstaklingsþjónustu í samfélag og hreyfingu."
    },
    {
      year: "2027",
      title: "Nýtt stig af þjónustu",
      description: "Appið og kerfið verða uppfærð í næstu útgáfu. Við bætum við nýjum lausnum fyrir næringu, endurheimt og heildræna heilsu, GF Training verður fullkomið umhverfi fyrir langtíma árangur."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
          radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
        `,
        backgroundSize: '100% 2000px, 100% 2000px',
        backgroundPosition: '0 0, 0 100%',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">Um</span>{" "}
            <span className="text-foreground">GF Training</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            GF Training er árangursdrifin fjarþjálfun sem styrkir karla með einstaklingsmiðaðri þjálfun, næringu og fræðslu. Með fjarþjálfun, faglegum þjálfar sem styður þig alla leið og vill hjálpa körlum að taka stjórn á eigin heilsu og ná árangri
          </p>

          <p className="text-lg text-foreground/70 max-w-4xl mx-auto mb-16 leading-relaxed">
            Guðmundur Friðgeirsson stofnaði GF Training. Í dag hefur GF Training vaxið í hreyfingu sem hundruðir karla treysta. Markmið mitt er að hjálpa körlum að endurheimta sjálfstraust sitt, styrk og vellíðan – og líða betur í eigin líkama.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Markmið mitt</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Frá því að ég byrjaði árið 2022 hefur markmið mitt verið að breyta lífum.
              </p>
              <p className="text-xl text-foreground/90 font-bold mb-8">
                <span className="text-primary">Ég vill styrkja karla</span>{" "}
                <span className="text-foreground">til að byggja upp styrk, sjálfstraust og</span>{" "}
                <span className="text-foreground">líkama sem þeir eru stoltir af,</span>{" "}
                <span className="text-foreground">á hvaða aldri sem er.</span>
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Framtíðarsýn mitt</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-bold text-foreground">Að verða fullkomna lausnin fyrir karla sem leita eftir styrk, sjálfstrausti og varanlegri umbreytingu.</span>
              </p>
              <p className="text-foreground/70 mt-4">
                Hugsaðu þér allt sem þú þarft, þjálfun, næringu, fræðslu og stuðning, allt á einum stað, sniðið sérstaklega að þér.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Sagan mín</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Ferð breytinga, nýsköpunar og hjálpar til þess að karlar nái bestu útgáfu af sjálfum sér.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="text-4xl font-black text-primary mb-2">{item.year}</div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ert þú tilbúinn að taka </span>
            <span className="text-primary">fyrsta skrefið?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Byrjaðu ferðina að sterkari og sjálfsöruggari útgáfu af sjálfum þér. Liðið okkar er tilbúið að hjálpa þér að ná markmiðum þínum.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Skrá mig núna
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
