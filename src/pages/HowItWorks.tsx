import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Check, Users, MessageCircle, Clock, Smartphone, Target, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    { id: 1, title: "a1", src: "/images/a1.PNG", alt: "Screenshot a1" },
    { id: 2, title: "a2", src: "/images/a2.PNG", alt: "Screenshot a2" },
    { id: 3, title: "a3", src: "/images/a3.PNG", alt: "Screenshot a3" },
    { id: 4, title: "a4", src: "/images/a4.PNG", alt: "Screenshot a4" },
    { id: 5, title: "a5", src: "/images/a5.PNG", alt: "Screenshot a5" },
    { id: 6, title: "a6", src: "/images/a6.PNG", alt: "Screenshot a6" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  // Auto-slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + transformations.length) % transformations.length;
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sérstakur þjálfari",
      description: "Hver meðlimur í GF Training fær þjálfara sem er vottaður í bæði næringu og líkamsrækt, þannig færðu sérfræðiþekkingu sem er sniðin að þér og þínum markmiðum.",
      benefits: [
        "Þjálfarinn fylgist með árangrinum þínum, stillir planið eftir þörfum og hjálpar þér að halda þér á réttri braut í gegnum allt ferlið.",
        "Hvort sem markmið þitt er fitutap, aukinn styrkur eða betri heildarheilsa, þá mótar þjálfarinn þinn áætlun sem hentar nákvæmlega þér.",
        "Vikuleg check-ins tryggja að áætlunin þróist með þér og árangrinum sem þú nærð."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Vikuleg Check-ins",
      description: "Vikulegar check-ins gera þér kleift að fínstilla áætlunina með þjálfaranum þínum, þannig þróast planið með árangrinum þínum.",
      benefits: [
        "Stilltu næringuna, æfingarnar og daglegu venjurnar í takt við breyttar þarfir, svo þú haldir áfram að ná árangri.",
        "Fagnaðu áföngum, taktu á móti áskorunum og fáðu persónulega endurgjöf til að viðhalda hvatningu og framförum.",
        "Á tveggja vikna fresti eru myndsímtal með þjálfaranum, sem veitir stuðning og aukna ábyrgð."
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Næringar þjálfun",
      description: "Þjálfarinn þinn hjálpar þér að skilja makró næringuna, byggja upp einfalt matarplan og taka ákvarðanir sem passa inn í þinn lífsstíl.",
      benefits: [
        "Þú færð persónulegar aðlögun út frá árangri og óskum - engar skyndilausnir, engar óraunhæfar takmarkanir.",
        "Lærðu að næra líkamann fyrir orku, bata og langtíma árangur - án þess að hætta að njóta matarins sem þú elskar.",
        "Þú munt loksins fá stjórn á næringunni og finna sjálfstraustið í hvernig þú borðar fyrir markmiðin þín."
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Markmiðasetning",
      description: "GF Training hjálpar þér að móta venjur, rútínu og hugarfar sem halda þér stöðugum - jafnvel þegar lífið verður erfitt.",
      benefits: [
        "Þú setur skýr markmið með þjálfaranum þínum og lærir að vinna í gegnum stöðnun, viðhalda hvatningu og taka aðgerðir á hverjum degi.",
        "Þú þróar með þér andlegan styrk til að fylgja eftir - ekki bara í nokkrar vikur, heldur til frambúðar.",
        "Ef þú þarft stuðning eða leiðsögn er þjálfarinn þinn alltaf aðeins ein skilaboð í burtu."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 aðgengi í þjálfara",
      description: "Ef þú ert með einhverjar spurningar þá er þjálfarinn þinn alltaf aðeins ein skilaboð í burtu.",
      benefits: [
        "Sendu persónulegar spurningar hvenær sem er og fáðu svör innan 24 klukkustunda til að halda þér á réttri braut.",
        "Samskiptin þín við þjálfarann eru trúnaðarmál, svo þú getur verið fullkomlega rólegur með að ræða HVAÐ sem er.",
        "Skráðu æfingarnar þínar, fylgstu með þyngdum og endurtekningum, og sjáðu árangurinn þinn - allt á einum stað."
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "GF Training App",
      description: "Öll okkar þjálfun fer fram i GF Training appinu þar sem þú getur fylgst með  þyngdum, næringu og árangurinn þínum - allt á einum stað.",
      benefits: [
        "Fáðu aðgang að æfingasafni með myndböndum sem sýna rétta framkvæmd til að hámarka árangur og forðast meiðsli.",
        "Þjálfarinn þinn uppfærir áætlanirnar beint í appinu, þannig að allt er einfalt, skipulagt og auðvelt að fylgja eftir.",
        "Fylgstu með næringu, æfingum og framförum með okkar fullkomna skráningarkerfi."
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Hvernig virkar þetta? - Fjarþjálfun og Einkaþjálfun | GF Training"
        description="Lærðu hvernig fjarþjálfun og einkaþjálfun virkar hjá GF Training. Skoðaðu ferlið frá upphafi til enda og hvernig við hjálpum körlum að ná markmiðum sínum."
        keywords="hvernig virkar fjarþjálfun, hvernig virkar einkaþjálfun, þjálfun ferli, GF Training ferli, líkamsrækt ferli"
        canonical="https://gftraining.is/how-it-works"
      />
      <div
        className="min-h-screen bg-background text-foreground relative"
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
            <span className="text-primary">Skýr og sjálfbær leið</span>{" "}
            <span className="text-primary">til að</span>{" "}
            <span className="text-foreground">byggja upp og viðhalda</span>
            <br />
            <span className="text-primary">þínum draumalíkama</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Sérhannað æfingarprógram</h3>
              <p className="text-foreground/80">Þú færð sérhannað æfingaprógram sem er hannað fyrir þig og þín markmið.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Leiðbeiningar um næringu</h3>
              <p className="text-foreground/80">Þú færð Næringarráðgjöf eða næringarplön sem henta þér og þínum lífsstíll.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Markmiðasetning</h3>
              <p className="text-foreground/80">Þú lærir að setja þér raunhæf markmið sem þú nærð að halda þér við.</p>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-12">
            Hjá GF Training færðu aðgang að GF Traning appinu þar sem þú hefur aðgang að æfingarplani, nærigngar plani, árangri þínum og margt fleira.
          </p>

          {/* Progress Photos Slideshow */}
          <div className="mb-16">
            {/* Slideshow */}
            <div className="relative max-w-5xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-4 md:gap-10">
                {/* Left slide (blurred, clickable) */}
                <button 
                  onClick={prevSlide}
                  className="w-40 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden opacity-60 blur-[1px] hover:opacity-80 transition-all cursor-pointer shadow-none border-0 bg-transparent"
                >
                  <img
                    src={transformations[getSlideIndex(-1)].src}
                    alt={transformations[getSlideIndex(-1)].alt}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                      if (!el.dataset.fallbackTried) {
                        el.dataset.fallbackTried = '1';
                        if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                        if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                      }
                      el.src = '/placeholder.svg';
                      el.className = 'w-full h-full object-contain p-6';
                    }}
                  />
                </button>

                {/* Center slide (focused) */}
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden scale-105 md:scale-110 shadow-xl bg-transparent border-0">
                  <img
                    src={transformations[currentSlide].src}
                    alt={transformations[currentSlide].alt}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                      if (!el.dataset.fallbackTried) {
                        el.dataset.fallbackTried = '1';
                        if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                        if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                      }
                      el.src = '/placeholder.svg';
                      el.className = 'w-full h-full object-contain p-6';
                    }}
                  />
                </div>

                {/* Right slide (blurred, clickable) */}
                <button 
                  onClick={nextSlide}
                  className="w-40 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden opacity-60 blur-[1px] hover:opacity-80 transition-all cursor-pointer shadow-none border-0 bg-transparent"
                >
                  <img
                    src={transformations[getSlideIndex(1)].src}
                    alt={transformations[getSlideIndex(1)].alt}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                      if (!el.dataset.fallbackTried) {
                        el.dataset.fallbackTried = '1';
                        if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                        if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                      }
                      el.src = '/placeholder.svg';
                      el.className = 'w-full h-full object-contain p-6';
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          <Button 
             size="lg"
             className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
             onClick={() => window.location.href = '/pricing'}
           >
            Skrá mig núna
           </Button>
        </div>
      </section>

      {/* How It Works Section - Similar to Testimonials Layout */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary text-lg font-bold mb-4 font-sans">GF Training</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Svona virkar GF Training</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Raunveruleg breyting krefst meira en fræðslu - hún krefst umhverfis sem styður þig til að breyta lífinu þínu nægir ekki bara að vita hvað á að gera.
              GF Training gefur þér allt sem þú þarft til að ná varanlegum árangri - prófað ferli, hugarfarsvinnu, sérfræðilega leiðsögn og umhverfi sem gerir breytinguna óumflýjanlega.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Photo/Content that scrolls */}
            <div className="lg:sticky lg:top-24 lg:self-start pt-8">
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-8 h-8 fill-star text-star" />
                  ))}
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                  <span className="text-primary">Sönnuð</span>
                  <br />
                  <span className="text-foreground">Aðferð</span>
                </h2>
                
                <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                  Skref-fyrir-skref ferlið okkar hefur hjálpað fjölda karla að ná draumalíkama og viðhalda honum til lengri tíma.
                </p>

                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
                  onClick={() => (window.location.href = '/pricing')}
                >
                  Byrja þína ferð
                </Button>
              </div>
            </div>

            {/* Right side - Large text content */}
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-2xl font-display text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-foreground/90 text-lg leading-relaxed font-sans">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">GF Training hefur</span>{" "}
              <span className="text-primary">sannaðan árangur</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Taktu fyrsta skrefið og vertu hluti af ört vaxandi hópi karla sem<br />
              eru að breyta lífi sínu með GF Training.
            </p>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl bg-card/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/C4x-xCEcg2k?rel=0&modestbranding=1"
                title="Hvernig þjálfun virkar - GF Training"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground/80 mb-8">
              <span className="font-bold text-foreground">Með yfir <span className="text-primary">150+</span> meðmæli</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-primary">Taktu stjórn á þínu lífi</span>{" "}
            <span className="text-foreground">og vertu sá maður sem þú veist að þú getur verið</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Við tökum aðeins við takmörkuðum fjölda skjólstæðinga og höfum strangar kröfur þegar kemur að gæðum og þjálfurum,
            <span className="font-bold text-foreground"> þannig að sæti í GF Training VIP eru alltaf takmörkuð.</span>
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Ef þú ert tilbúinn að sjá hvort þú eigir rétt á plássi, fylltu út stutt umsóknareyðublað (2-3 mínútur) og bókaðu símtal við okkur.
            <br />
            <br />
            Framtíðar þú mun þakka þér, <span className="font-bold">svo eftir hverju ertu að bíða?</span>
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={() => window.location.href = '/apply'}
          >
            Sækja um í VIP
          </Button>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default HowItWorks;