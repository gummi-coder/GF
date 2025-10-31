import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Target, Clock, Dumbbell, Facebook, Youtube, Instagram, Linkedin, Users, Gift, CalendarDays, ShoppingCart, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Askorun = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [exitOpen, setExitOpen] = useState(false);
  const [remindEmail, setRemindEmail] = useState("");

  useEffect(() => {
    const target = new Date("2025-11-10T00:00:00").getTime();
    const id = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Exit-intent capture: show once per session
  useEffect(() => {
    const key = "askorun-exit-shown";
    
    const showExitDialog = () => {
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        setExitOpen(true);
      }
    };
    
    let lastY = 0;
    let lastTime = Date.now();
    
    // Improved mouse exit-intent detection
    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const currentY = e.clientY;
      
      // Track mouse movement - if moving upward quickly toward top
      if (currentY < lastY && currentY <= 10) {
        // Mouse is moving up and near top edge
        showExitDialog();
      }
      
      lastY = currentY;
      lastTime = now;
    };

    // Mouse leaving window at top (original method)
    const onMouseOut = (e: MouseEvent) => {
      const to = (e as MouseEvent & { relatedTarget: EventTarget | null }).relatedTarget;
      // When mouse leaves and no related target, and it's at the top
      if (!to && e.clientY <= 0) {
        showExitDialog();
      }
    };

    // Additional detection: when mouse leaves body at top
    const onBodyMouseLeave = (e: MouseEvent) => {
      if ((e as any).clientY <= 5) {
        showExitDialog();
      }
    };
    
    document.body.addEventListener("mouseleave", onBodyMouseLeave);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      document.body.removeEventListener("mouseleave", onBodyMouseLeave);
    };
  }, []);

  const submitReminder = async () => {
    if (!remindEmail.trim()) return;
    try {
      const fd = new FormData();
      fd.append("email", remindEmail);
      fd.append("source", "askorun-exit-intent");
      await fetch("https://formspree.io/f/mrbokzzz", { method: "POST", body: fd, headers: { Accept: "application/json" } });
      setExitOpen(false);
      setRemindEmail("");
      alert("Takk! Við minnum þig áður en skráningu lýkur.");
    } catch {
      setExitOpen(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
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
      {/* Minimal Header - logo only */}
      <nav className="fixed top-6 left-8 right-8 z-50">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tight uppercase font-display">
                GF<span className="text-primary">Training</span>
              </span>
            </a>
            <div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-2 rounded-full text-sm" onClick={() => (window.location.href = '/askorun-signup')}>
                Skrá mig núna
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 font-display">
            6 Vikna fitu brennslu áætlun
            <span className="block text-primary">- rétt fyrir jólin</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6">
            Byrjum 10. Nóv - Takmarkað pláss
          </p>

          {/* Video */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl bg-card/40">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NUXl4kFLd78?rel=0&modestbranding=1"
                title="Askorun Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {timeLeft && (
            <p className="text-sm md:text-base text-foreground/70 mb-2">
              tilboðinu lýkur eftir: <span className="text-primary font-bold">{timeLeft}</span>
            </p>
          )}
          {/* Limited-spots badge removed per request */}

            <div className="mt-10">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-primary/40 transition-all hover:scale-105"
              onClick={() => (window.location.href = '/askorun-signup')}
            >
              Skrá mig núna
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Touch / Intro (video only handled above) */}

      {/* Exit-intent dialog */}
      <Dialog open={exitOpen} onOpenChange={setExitOpen}>
        <DialogContent className="bg-card/80 backdrop-blur-md border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-xl">Bíddu aðeins! Viltu áminningu?</DialogTitle>
          </DialogHeader>
          <p className="text-foreground/70 text-sm mb-2">
            Viltu að ég minni þig áður en skráningu í áskorunina lýkur? Sláðu inn netfangið þitt hér.
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Netfang" value={remindEmail} onChange={(e) => setRemindEmail(e.target.value)} className="bg-background/60" />
            <Button onClick={submitReminder} className="bg-primary text-primary-foreground">Senda</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* About the Challenge */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-foreground/80 text-lg leading-relaxed">
            Þessi 6 vikna áskorun er fyrir upptekið fólk sem vill komast í gang, fá skýrleika og sjá árangur. Þú færð einfaldar og árangursríkar æfingar og næringu í GF Training appinu, með dagleri eftirfylgni svo þú haldir þig við planið.
          </p>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Dumbbell className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold">Æfingarplan</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Target className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold">Næringarplan</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <CalendarDays className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold">Vikuleg Check-ins</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold">stöðug samskipti</h3>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-bold">Bónusar</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next - vertical timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl relative">
          <h3 className="text-2xl md:text-3xl font-black mb-10 text-center font-display">Hver eru næstu skref</h3>
          {/* center line */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] md:w-[3px] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center py-10">
              <div className="md:col-start-1 text-center md:text-right px-6 md:px-0 md:pr-16">
                <div className="inline-flex items-center gap-2 justify-end mb-2">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold">Skráning</h4>
                </div>
                <p className="text-foreground/70">Skráðu þig í áskorunina og taktu frá þitt pláss</p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute" />
                <div className="relative w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-lg">1</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center py-10">
              <div className="md:col-start-2 text-center md:text-left px-6 md:px-0 md:pl-16">
                <div className="inline-flex items-center gap-2 mb-2 md:justify-start justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold">Fáðu aðgang að appinu</h4>
                </div>
                <p className="text-foreground/70">VIð sendum á þig boð í GF Training appið með leiðbeiningar hvernig þú byrjar</p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute" />
                <div className="relative w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-lg">2</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center py-10">
              <div className="md:col-start-1 text-center md:text-right px-6 md:px-0 md:pr-16">
                <div className="inline-flex items-center gap-2 justify-center md:justify-end mb-2">
                  <Dumbbell className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold">Byjrum 10. Nóv</h4>
                </div>
                <p className="text-foreground/70">Fylgdu planinu, Vikuleg check-ins og sjáðu árangurinn</p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute" />
                <div className="relative w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-lg">3</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center py-10">
              <div className="md:col-start-2 text-center md:text-left px-6 md:px-0 md:pl-16">
                <div className="inline-flex items-center gap-2 mb-2 md:justify-start justify-center">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  <h4 className="text-xl font-bold">Klárast 21. Des</h4>
                </div>
                <p className="text-foreground/70">Áskoruninn klárast 21. Des - Farðu yfir árangurinn þinn og ákvedu þitt næsta skref</p>
              </div>
              <div className="flex justify-center mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute" />
                <div className="relative w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black shadow-lg">4</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-bold mb-2">Endugreiðalegt að fullu!</h4>
            <p className="text-foreground/80">
              Ef eftir fyrstu vikuna þú finnur að þetta er ekki fyrir þig, sendir þú mér email og þú færð allt endurgreitt án útskýringar
            </p>
          </div>
        </div>
      </section>

      {/* Price & CTA */}
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <p className="text-foreground/80 mb-2">Aðeins</p>
            <div className="text-4xl md:text-5xl font-black text-primary mb-2">19 900 kr</div>
            <p className="text-foreground/80 mb-6">fyrir allar 6 vikunar</p>
            <Button
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base md:text-lg px-6 py-4 md:px-10 md:py-6 rounded-full shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 whitespace-nowrap"
              onClick={() => (window.location.href = '/askorun-signup')}
            >
              <span>Skrá mig núna</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Algengar spurningar</h3>
          <Accordion type="single" collapsible className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl">
            <AccordionItem value="q1" className="px-4">
              <AccordionTrigger>Þarf ég búnað?</AccordionTrigger>
              <AccordionContent>
                Enginn sérstakur búnaður er nauðsynlegur. Við aðlögum áætlunina að heimæfingum eða líkamsrækt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="px-4">
              <AccordionTrigger>Hvað ef ég er byrjandi?</AccordionTrigger>
              <AccordionContent>
                Fullkomið. Áætlunin er sniðin að þínu stigi og þróast vikulega.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="px-4">
              <AccordionTrigger>Hvað gerist eftir greiðslu?</AccordionTrigger>
              <AccordionContent>
                Þú færð aðgang að appinu og leiðbeiningar innan nokkurra mínútna svo þú getir byrjað strax.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="px-4">
              <AccordionTrigger>Get ég tekið þátt hvar sem er?</AccordionTrigger>
              <AccordionContent>
                Já. Allt fer fram í GF Training appinu með net‑eftirfylgni, þannig að þú getur tekið þátt hvar sem er í heiminum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="px-4">
              <AccordionTrigger>Hvað ef þetta hentar mér ekki?</AccordionTrigger>
              <AccordionContent>
                Við bjóðum einfalt endurgreiðsluloforð: ef eftir fyrstu vikuna finnst þér þetta ekki henta, sendu okkur tölvupóst og þú færð fulla endurgreiðslu án skýringa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA with countdown */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
            ímyndaðu þér að klára 2025 með stíl, með meira sjálfstraust og stolt/ur af árangrinum sem þú hefur náð
          </h2>
          <p className="text-foreground/80 mb-4">þú ert aðeins einum smelli frá.</p>
          {timeLeft && (
            <p className="text-foreground/70 mb-4">tilboðinu lýkur eftir: <span className="text-primary font-bold">{timeLeft}</span></p>
          )}
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-primary/40 transition-all hover:scale-105"
            onClick={() => (window.location.href = '/askorun-signup')}
          >
            Skrá mig núna
          </Button>
        </div>
      </section>

      {/* Minimal Footer - logo only */}
      <footer className="pb-12 px-8">
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-8 max-w-[1200px] mx-auto text-center">
          <div className="mb-3">
            <span className="text-lg font-black">
              GF<span className="text-primary">TRAINING</span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="text-white/60 hover:text-primary transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs">
            <a href="/terms?context=askorun" className="text-white/60 hover:text-primary transition-colors">Skilmálar</a>
            <span className="text-white/20">•</span>
            <a href="/terms?context=askorun" className="text-white/60 hover:text-primary transition-colors">Persónuverndarstefna</a>
          </div>
          <div className="mt-3 text-white/40 text-xs">© 2025 GF Training</div>
        </div>
      </footer>
    </div>
  );
};

export default Askorun;



