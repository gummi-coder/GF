import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Clock, Target, Award, Lock, Smartphone, Utensils, Brain, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const testimonials = [
    {
      name: "Einar",
      age: "28", 
      text: "Mjög ánægður. Fékk plan sem hentaði mér mjög vel og þurfti ekki að mæta oftar en ég komst í ræktina."
    },
    {
      name: "Guðmundur",
      age: "41",
      text: "Gummi kom mér í besta form lífs míns! Ég vissi ekki hvað góður þjálfari gat gert mikið fyrir heilsuna þar til ég skráði mig hjá Gumma."
    },
    {
      name: "Jón Þór",
      age: "34",
      text: "Það finnst hvað Gummi vill hjálpa manni að ná markmiðum. Það er ekkert kjaftæði og bara skýrar leiðbeiningar hvað maður þarf að gera til að sjá framfarir."
    }
  ];

  return (
    <>
      <SEO
        title="Verðskrá - Fjarþjálfun og Einkaþjálfun | GF Training"
        description="Skoðaðu verðskrá okkar fyrir fjarþjálfun og einkaþjálfun. Sérsniðin þjálfun fyrir karla. Frá grunni til VIP þjálfunar. Byrjaðu ferilinn þinn í dag."
        keywords="fjarþjálfun verð, einkaþjálfun verð, þjálfun verð, fjarþjálfun fyrir karla verð, einkaþjálfun fyrir karla verð, líkamsrækt verð, GF Training verð"
        canonical="https://gftraining.is/pricing"
      />
      <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1️⃣ Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-foreground">Veldu þinn</span>{" "}
            <span className="text-primary">þjálfunarpakka</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Hvort sem þú ert að byrja upp á nýtt eða vilt taka æfingarnar þínar á næsta stig, þá er til plan sem hjálpar þér að ná markmiðunum þínum.
          </p>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Allir þjálfunarpakkar innihalda aðgang að appinu, einstaklingsmiðaða þjálfun og næringar stuðning.
          </p>
        </div>
      </section>

      {/* 2️⃣ Tiered Pricing Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <Card className="bg-card/30 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-foreground/80 mb-2">
                  Basic
                </CardTitle>
                <p className="text-foreground/60 text-sm">3 Mánaða binditími</p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-foreground mb-2">24,990 ISK</div>
                  <div className="text-foreground/60 text-sm">á mánuði</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Einstaklingsmiðað æfingaplan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Næringarráðgjöf</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Tveggja vikna eftirfylgni</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Aðgangur að appinu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Stanslaus samskipti við þjálfara</span>
                  </div>
                </div>

                <div className="mt-8">
                 <Link to="/signup?plan=basic">
                   <Button 
                     className="w-full bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground font-bold py-4 rounded-lg border border-secondary/30 transition-all"
                   >
                     Byrjaðu núna
                   </Button>
                 </Link>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tier - Most Popular */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/50 relative scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  Vinsælasta
                </div>
              </div>
              
              <CardHeader className="text-center pb-6 pt-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Pro
                </CardTitle>
                <p className="text-foreground/60 text-sm">6 Mánaða binditími</p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">19,990 ISK</div>
                  <div className="text-foreground/60 text-sm">á mánuði</div>
                  <div className="text-primary text-sm font-medium mt-1">Sparar 20% með 6 mánaða skuldbindingu</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Allt í Basic, auk:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Byggja upp langtíma ávana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Markmiða endurskoðun</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Lífsstíls eftirfylgni</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Mánaðarleg endurskoðun</span>
                  </div>
                </div>

                <div className="mt-8">
                 <Link to="/signup?plan=pro">
                   <Button 
                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all hover:scale-105"
                   >
                     Byrjaðu núna
                   </Button>
                 </Link>
                </div>
              </CardContent>
            </Card>

            {/* VIP Tier - Application Only */}
            <Card className="bg-card/30 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  VIP
                </CardTitle>
                <p className="text-foreground/60 text-sm">3 Mánaða binditími</p>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mt-2">
                  Takmarkað pláss
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">40,000 ISK</div>
                  <div className="text-foreground/60 text-sm">á mánuði</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Allt í Pro, auk:</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Vikuleg myndsímtöl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">forgangs stuðningur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Byrjunar inntöku símtal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Hugarfarsþjálfun</span>
                  </div>
                </div>

                <div className="mt-8">
                <Link to="/apply">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all hover:scale-105"
                  >
                    Sækja um núna
                  </Button>
                </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3️⃣ What's Included Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Hvað er innifalið í</span>{" "}
              <span className="text-primary">hverjum pakka</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Æfingaplan sérsniðinn að markmiðum þínum</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Matarplan eða makró leiðbeiningar</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Aðgangur að appinu{'\u00A0'}með kennslumyndböndum</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Ábyrgðar eftirfylgni til að halda þér á réttu brautinni</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Framvinda eftirfylgni og vana kerfi</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Árangur frá</span>{" "}
              <span className="text-primary">viðskiptavinum</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Þetta er venjulegt fólk sem ákvað að taka fyrsta skrefið, rétt eins og þú getur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-star text-star" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border/20 pt-4">
                    <div className="font-bold text-foreground">{testimonial.name}, {testimonial.age}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-display">
                <span className="text-foreground">Tilbúinn að byrja</span>{" "}
                <span className="text-primary">þjálfunarferðina?</span>
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Veldu þann pakka sem hentar þér og þínum markmiðum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup?plan=basic">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-full">
                    Byrja 3 mánaða þjálfun
                  </Button>
                </Link>
                <Link to="/signup?plan=pro">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-full">
                    Byrja 6 mánaða þjálfun
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-display">
                <span className="text-foreground">Viltu fulla</span>{" "}
                <span className="text-primary">VIP upplifun?</span>
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Sæktu um okkar einkaréttasta þjálfunarprogram með takmarkað pláss.
              </p>
              <Link to="/apply">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                  Sækja um VIP þjálfun
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Pricing;