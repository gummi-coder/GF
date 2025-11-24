import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("https://formspree.io/f/xanlqojz", {
        method: "POST",
        body: formDataToSend,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Villa kom upp. Reyndu aftur síðar.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const faqs = [
    {
      question: "Hvernig byrja ég hjá GF Training?",
      answer: "Það er einfalt! Smelltu á ‘SÆKJA UM NÚNA’ hnappinn á vefsíðunni, fylltu út stutta umsókn, og við höfum samband innan 24 klukkustunda til að ræða markmið þín."
    },
    {
      question: "Hvað gerir GF Training öðruvísi en æfingaraðferðir?",
      answer: "GF Training býður upp á persónulega 1:1 þjálfun, sérsniðna næringaráætlun og stuðningsríkt samfélag. Þjálfararnir okkar eru vottaðir sérfræðingar sem vinna með þér að því að búa til sjálfbæra áætlun sem passar við þinn lífsstíl og markmið."
    },
    {
      question: "Hvað kostar prógrammið?",
      answer: "Verðið fer eftir því hvaða prógram þú velur. Við bjóðum upp á mismunandi pakka sem henta bæði mismunandi fjárhagsáætlunum og markmiðum."
    },
    {
      question: "Þarf ég sérstök tæki eða búnað?",
      answer: "Nei, enginn sérstakur búnaður er nauðsynlegur! Prógrömin okkar eru hönnuð til að virka með því sem þú hefur til ráðstöfunar - hvort sem það er heilsurækt, heimabúnaður eða bara líkamsþyngdaræfingar. Þjálfarinn þinn aðlagar æfingarnar að þínum aðstæðum."
    },
    {
      question: "Hversu oft hef ég samskipti við þjálfarann minn?",
      answer: "Þú færð reglulegar eftirfylgnir með þjálfaranum þínum, yfirleitt vikulega eða á tveggja vikna fresti eftir prógrami. Auk þess hefurðu 24/7 stuðning í gegnum appið okkar, þannig að þú getur spurt spurninga hvenær sem er."
    },
    {
      question: "Hvað ef ég er algjör byrjandi?",
      answer: "Frábært! Prógrömin okkar henta öllum - frá byrjendum til lengra kominna. Þjálfarinn þinn byrjar þar sem þú ert staddur og hjálpar þér að taka framförum í réttu tempói fyrir líkama þinn og markmið."
    },
    {
      question: "Get ég sett áskriftina á pásu eða hætt við hana?",
      answer: "Nei, eftir að þú hefur valið prógram og undirritað samninginn er ekki hægt að hætta við fyrr en samningstímanum lýkur. Þetta tryggir að þú skuldbindir þig til ferlisins og nærð þeim árangri sem þú ert að stefna að."
    },
    {
      question: "Bjóðið þið upp á næringarráðgjöf?",
      answer: "Algjörlega! Næringin er lykilhluti af okkar prógrami. Þjálfarinn þinn útbýr sérsniðna næringaráætlun út frá markmiðum þínum, smekk og lífsstíl. Við leggjum áherslu á sjálfbærar venjur sem þú getur viðhaldið til lengri tíma."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">Hafa samband</span>{" "}
            <span className="text-foreground">við okkur</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Ert þú tilbúinn að taka fyrsta skrefið? Við erum hér til að hjálpa þér á hverju skrefi. Hafðu samband við teymið okkar og ræðum hvernig við getum hjálpað þér að ná markmiðum þínum.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 font-display">
                <span className="text-foreground">Sendu okkur skilaboð</span>
              </h2>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Hafðu samband</CardTitle>
                </CardHeader>
                {isSubmitted ? (
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary-foreground text-2xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Takk fyrir að hafa samband!</h3>
                      <p className="text-foreground/70">Við svörum innan 24 klukkustunda.</p>
                    </div>
                  </CardContent>
                ) : (
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-foreground">Fornafn</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Fornafn" 
                          className="bg-background/50 border-border/20"
                          value={formData.firstName}
                          onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-foreground">Eftirnafn</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Eftirnafn" 
                          className="bg-background/50 border-border/20"
                          value={formData.lastName}
                          onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Netfang</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="netfang@dæmi.is" 
                        className="bg-background/50 border-border/20"
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">Sími</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+354 555 1234" 
                        className="bg-background/50 border-border/20"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">Efni</Label>
                      <Input 
                        id="subject" 
                        placeholder="Hvernig getum við hjálpað?" 
                        className="bg-background/50 border-border/20"
                        value={formData.subject}
                        onChange={(e) => setFormData((p) => ({ ...p, subject: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">Skilaboð</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Segðu okkur frá markmiðum þínum og hvernig við getum hjálpað..."
                        className="bg-background/50 border-border/20 min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                      />
                    </div>
                    
                    <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg">
                      {isSubmitting ? "Senda..." : "Senda skilaboð"}
                    </Button>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 font-display">
                <span className="text-foreground">Upplýsingar um samskipti</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Netfang</h3>
                    <p className="text-foreground/80">gummi@gftraining.is</p>
                    <p className="text-foreground/60 text-sm">Við svörum innan 24 klst.</p>
                  </div>
                </div>
                
                
                
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Staðsetning</h3>
                    <p className="text-foreground/80">Á netinu - um allan heim</p>
                    <p className="text-foreground/60 text-sm">Þjónustum Íslendinga um allan heim</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Spjall</h3>
                    <p className="text-foreground/80">Aðgengilegt á vefnum okkar</p>
                    <p className="text-foreground/60 text-sm">Fáðu skjót svör við spurningum</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Af hverju að velja GF Training?</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Persónuleg þjálfun</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sérsniðin næringaráætlanir</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Stuðningur og eftirfylgni allan sólarhringinn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sannaður árangur hjá tugum meðlima</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Algengar</span>{" "}
              <span className="text-primary">spurningar</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Finndu svör við algengustu spurningunum um GF Training og þjónustuna okkar.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ert þú tilbúinn að taka</span>
            <br />
            <span className="text-primary">fyrsta skrefið?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Byrjaðu ferðina að sterkari og sjálfsöruggari útgáfu af sjálfum þér. 
            Liðið okkar er tilbúið að hjálpa þér að ná markmiðum þínum.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={() => window.location.href = '/pricing'}
          >
            Skrá mig núna
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
