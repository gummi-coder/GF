import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle, Check, Plus, X, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

type Testimonial = {
  name: string;
  initialBg: string;
  reviews: string;
  time: string;
  isNew: boolean;
  highlight: string;
  text: string;
  offset: string;
};

const testimonialsTop: Testimonial[] = [
  {
    name: "Einar Tómasson",
    initialBg: "bg-[#4285F4]",
    reviews: "12 reviews",
    time: "2 weeks ago",
    isNew: true,
    highlight: "Besta ákvörðun sem ég hef tekið.",
    text: "Missti 10 kíló og hef aldrei verið sterkari. Ég byrjaði að sjá árangur strax á fyrstu vikunum.",
    offset: "md:-translate-y-4",
  },
  {
    name: "Gunnar Þorsteinsson",
    initialBg: "bg-[#9C27B0]",
    reviews: "5 reviews",
    time: "1 month ago",
    isNew: true,
    highlight: "Loksins kerfi sem ég get fylgt.",
    text: "Mæli 100% með GF Training. Þetta er ekki bara æfingaplan, heldur lífsstílsbreyting sem virkar.",
    offset: "md:translate-y-8",
  },
  {
    name: "Sigurður Már",
    initialBg: "bg-[#E91E63]",
    reviews: "8 reviews",
    time: "3 months ago",
    isNew: false,
    highlight: "Frábært viðmót og fagleg vinnubrögð.",
    text: "Þetta breytti öllu fyrir mig. Ég hef prófað mörg forrit en þetta er það fyrsta sem ég hef haldið mig við.",
    offset: "md:-translate-y-2",
  },
];

const testimonialsBottom: Testimonial[] = [
  {
    name: "Magnús Steinarsson",
    initialBg: "bg-[#0F9D58]",
    reviews: "6 reviews",
    time: "3 weeks ago",
    isNew: true,
    highlight: "Fjarþjálfunin skilar raunverulegum árangri.",
    text: "Ég fékk sérsniðið plan og vikulega eftirfylgni sem hélt mér á réttri leið.",
    offset: "md:translate-y-6",
  },
  {
    name: "Ólafur Rafnsson",
    initialBg: "bg-[#F4B400]",
    reviews: "9 reviews",
    time: "2 months ago",
    isNew: false,
    highlight: "Mataræðið var loksins einfalt að fylgja.",
    text: "Ég hélt að ég þyrfti að svelta mig til að ná markmiðum. Kerfið passaði við líf mitt og ég sá breytingu strax.",
    offset: "md:-translate-y-6",
  },
  {
    name: "Björn Helgi",
    initialBg: "bg-[#DB4437]",
    reviews: "15 reviews",
    time: "5 months ago",
    isNew: false,
    highlight: "Persónuleg aðstoð sem skilar sér.",
    text: "Hver spurning var svöruð með skýrleika og ég vissi alltaf hvað ég átti að gera næst. Mæli eindregið með.",
    offset: "md:translate-y-2",
  },
];

const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div
    className={`mx-auto w-full max-w-md bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200/80 shadow-md md:shadow-xl text-black flex flex-col gap-3 md:gap-4 transform transition-transform ${testimonial.offset}`}
  >
    <div className="flex items-center gap-2.5 md:gap-3 min-w-0">
      <div className={`w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full ${testimonial.initialBg} flex items-center justify-center text-white font-medium text-base md:text-lg`}>
        {testimonial.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <div className="font-bold text-sm md:text-[15px] leading-tight">{testimonial.name}</div>
        <div className="text-gray-500 text-[11px] md:text-xs mt-0.5 truncate">{testimonial.reviews}</div>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <div className="flex text-[#fbbc04]">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
      <span className="text-gray-500 text-[11px] md:text-xs">{testimonial.time}</span>
      {testimonial.isNew && (
        <span className="bg-gray-100 text-gray-800 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded border border-gray-200">NEW</span>
      )}
    </div>
    <p className="text-gray-800 text-sm md:text-[15px] leading-relaxed">
      <span className="bg-[#fef08a] px-1 rounded box-decoration-clone">{testimonial.highlight}</span>{" "}
      {testimonial.text}
    </p>
  </div>
);

const faqItems = [
  {
    question: "Hvernig fer fjarþjálfunin fram?",
    content: (
      <>
        <p>Í byrjun förum við yfir stöðuna þína, setjum upp markmið og búum til ramma sem tryggir að þú náir árangri. Þetta er sama kerfi og ég hef notað til að hjálpa hundruðum viðskiptavina.</p>
        <p>Í hverri viku förum við yfir árangurinn, greinum hvað gengur vel og lögum það sem má betur fara.</p>
      </>
    ),
  },
  {
    question: "Hverju get ég átt von á?",
    content: (
      <>
        <p>Markmiðið: Þú gengur í burtu með skýr, raunhæf skref í hverri viku.</p>
        <p>Þú færð minn tíma og athygli. Við sníðum ráðgjöfina að þínum lífsstíl, reynslu, markmiðum og aðstæðum.</p>
        <p>Þetta er persónuleg aðstoð sem beinist að þinni stærstu áskorun, hvort sem það er mataræðið, æfingarnar eða hugarfarið.</p>
      </>
    ),
  },
  {
    question: "Hentar þetta mér?",
    content: (
      <>
        <p>Ef þú ert ekki tilbúinn að leggja á þig vinnuna, þá er þetta <strong>ekki</strong> fyrir þig.</p>
        <p>Ef þú vilt ná raunverulegum árangri og ert tilbúinn að fylgja leiðbeiningum, <strong>þá getum við hjálpað.</strong></p>
        <p>Við höfum unnið með fólki á öllum aldri og úr öllum stéttum. Hvort sem þú ert byrjandi eða lengra kominn, þá aðlögum við kerfið að þér.</p>
      </>
    ),
  },
  {
    question: "Hvað kostar fjarþjálfunin?",
    content: (
      <>
        <p>Verðið er 24.995 kr. á mánuði. Þetta gerir okkur kleift að:</p>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>Halda gæðunum í hámarki (ég tek aðeins inn takmarkaðan fjölda í einu)</li>
          <li>Veita þér þá persónulegu þjónustu sem þú þarft til að ná árangri</li>
        </ol>
        <p>Ef þú hefur ekki náð árangri hingað til, þá er kominn tími á breytingu.</p>
        <p>Ef þú ert tilbúinn, þá getum við hjálpað þér að komast á næsta stig.</p>
      </>
    ),
  },
];

const primaryCtaClass =
  "group bg-primary hover:bg-[#eeff28] text-black font-black text-base md:text-lg px-10 md:px-14 h-14 md:h-[4.25rem] rounded-xl w-full sm:w-auto min-w-[300px] uppercase tracking-wide border border-black/15 shadow-[0_6px_0_0_#0a0a0a,0_10px_32px_rgba(230,255,40,0.45)] hover:shadow-[0_4px_0_0_#0a0a0a,0_14px_40px_rgba(230,255,40,0.55)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_0_#0a0a0a] transition-all duration-150 ease-out";

const formSubmitClass =
  "group w-full h-14 md:h-[3.75rem] bg-primary hover:bg-[#eeff28] text-black font-black text-lg rounded-xl mt-3 uppercase tracking-wide border border-black/15 shadow-[0_5px_0_0_#000,0_8px_28px_rgba(230,255,40,0.35)] hover:shadow-[0_3px_0_0_#000,0_12px_32px_rgba(230,255,40,0.45)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_2px_0_0_#000] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0";

const Fjarthjalfun = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /** Legacy anchor from old in-page nav; keep URL clean */
  useEffect(() => {
    if (location.hash === "#yfirlit") {
      navigate({ pathname: location.pathname, search: location.search }, { replace: true });
    }
  }, [location.hash, location.pathname, location.search, navigate]);

  const scrollToPricing = () => {
    document.getElementById("umsokn")?.scrollIntoView({ behavior: "smooth" });
  };

  const allFaqOpen = faqItems.map((_, i) => `item-${i}`);
  const [openFaqItems, setOpenFaqItems] = useState<string[]>(allFaqOpen);
  const [faqHasCollapsedOnce, setFaqHasCollapsedOnce] = useState(false);

  const handleFaqValueChange = (value: string[]) => {
    if (!faqHasCollapsedOnce && value.length < openFaqItems.length) {
      setOpenFaqItems([]);
      setFaqHasCollapsedOnce(true);
      return;
    }
    setOpenFaqItems(value);
  };

  const [formData, setFormData] = useState({
    fullName: "",
    kennitala: "",
    email: "",
    goal: "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.kennitala.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.goal.trim() !== "" &&
    formData.terms === true;

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!isFormValid) {
      alert("Vinsamlegast fylltu út alla reiti og samþykktu skilmála áður en þú heldur áfram.");
      return;
    }
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('kennitala', formData.kennitala);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('goal', formData.goal);
      formDataToSend.append('plan', 'fjarthjalfun');
      formDataToSend.append('period', 'monthly');
      formDataToSend.append('terms', formData.terms ? 'yes' : 'no');

      const response = await fetch("https://formspree.io/f/maqqqwew", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          kennitala: "",
          email: "",
          goal: "",
          terms: false,
        });
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

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-primary selection:text-black">
      <SEO 
        title="Fjarþjálfun | GF Training" 
        description="Persónuleg fjarþjálfun sem skilar árangri. Sérsniðið æfingaplan, mataræði og eftirfylgni."
      />

      {/* Sticky signup pill — always visible */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-2 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <button
          type="button"
          onClick={scrollToPricing}
          className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-white/95 text-black px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase transition-all border border-black/10 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          Fjarþjálfun | Opnið fyrir umsóknir
        </button>
      </div>

      <main className="pt-11">
        {/* Hero — black ends ~80% down the video; white starts under the bottom edge */}
        <div className="bg-[#0a0a0a] text-white overflow-visible">
          <div className="max-w-4xl mx-auto text-center px-6 pt-16 md:pt-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              <span className="block">Er ekki kominn tíma á að</span>
              <span className="block text-white/60">losa þig við aukakílóin?</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/80 font-medium max-w-3xl mx-auto mt-6">
              Það er enginn að fara koma og bjarga þér, svo taktu fyrsta skrefið í dag og skráðu þig í fjarþjálfun.
            </p>

            {/* Black bg stops ~85% down the video; bottom strip sits on white */}
            <div className="relative mt-10 md:mt-12 pb-[48%] md:pb-[47%]">
              <div className="absolute inset-x-0 top-0 z-20 aspect-video bg-[#111] border border-white/10 rounded-xl overflow-hidden group cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(237,255,43,0.3)]">
                    <PlayCircle className="w-10 h-10 text-black" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white/70">
                  <span>00:00 / 03:45</span>
                  <span>GF Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 pb-20 md:pb-28 pt-[calc(9%+1rem)] md:pt-28">
          <div className="max-w-3xl mx-auto text-center space-y-8 md:space-y-10">
            <p className="text-xl md:text-2xl lg:text-[1.65rem] text-black leading-snug md:leading-snug font-normal px-2">
              Þetta er persónuleg fjarþjálfun þar sem þú færð{" "}
              <span className="font-bold">sérsniðið æfingaplan</span>, markvissa næringarráðgjöf og{" "}
              <span className="font-bold">eftirfylgni</span> frá þjálfara sem hefur hjálpað hundruðum að ná sínu besta formi.
            </p>

            <Button onClick={scrollToPricing} className={primaryCtaClass}>
              <span className="inline-flex items-center justify-center gap-2.5">
                Ég er tilbúinn að byrja
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </span>
            </Button>
          </div>
        </div>

        {/* Social Proof / Testimonials */}
        <section className="py-12 md:py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-center text-xl md:text-3xl font-bold text-black mb-8 md:mb-16">Hvað fólk er að segja:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {testimonialsTop.map((t, i) => (
                <ReviewCard key={i} testimonial={t} />
              ))}
            </div>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-20 bg-white text-black" id="innifalid">
          {/* Torn Banner — wide with torn top/bottom edges */}
          <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 mb-16 md:mb-20 mt-4 drop-shadow-xl overflow-hidden">
            <div className="w-full h-6 md:h-8 bg-[url('/images/torn-edge-top.svg')] bg-repeat-x bg-bottom" style={{ backgroundSize: '1200px 100%' }}></div>

            <div className="bg-[#1a1a1a] py-10 md:py-14 px-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center text-white tracking-tight max-w-5xl mx-auto">
                Hvað færðu í <span className="underline decoration-4 underline-offset-4 decoration-primary">fjarþjálfuninni</span>:
              </h2>
            </div>

            <div className="w-full h-6 md:h-8 bg-[url('/images/torn-edge-bottom.svg')] bg-repeat-x bg-top" style={{ backgroundSize: '1200px 100%' }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-6">
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-10">
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-black tracking-tight">#1: Persónuleg eftirfylgni</h3>
                <div className="aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
                  <img src="/images/IMG_2091.jpg" alt="Persónuleg eftirfylgni" className="w-full h-full object-cover object-center" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] px-2 font-medium">
                  Þú færð vikulegt árangurs check-ins og aðhald. Við förum yfir árangurinn, lögum það sem þarf að laga og tryggjum að þú náir þínu markmiði.
                </p>
              </div>
              
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-black tracking-tight">#2: Sérsniðið æfingaplan</h3>
                <div className="aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
                  <img src="/images/IMG_3234.jpg" alt="Sérsniðið æfingaplan" className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] px-2 font-medium">
                  Við brjótum niður hvernig þú átt að æfa til að hámarka árangur. Planið er sérsniðið að þínum aðstæðum, hvort sem þú æfir heima eða í ræktinni.
                </p>
              </div>
              
              <div className="space-y-6 text-center">
                <h3 className="text-2xl font-black tracking-tight">#3: Mataræði & Venjur</h3>
                <div className="aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
                  <img src="/images/mataræði-venjur.jpg" alt="Mataræði & Venjur" className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] px-2 font-medium">
                  Þú færð skýr skref til að brjótast í gegnum hindranir. Við setjum upp mataræði sem hentar þínum lífsstíl svo þú náir árangri án þess að svelta þig.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button onClick={scrollToPricing} className={primaryCtaClass}>
                <span className="inline-flex items-center justify-center gap-2.5">
                  Ég er tilbúinn að byrja
                  <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
              </Button>
            </div>

            <div className="mt-16 md:mt-32">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                {testimonialsBottom.map((t, i) => (
                  <ReviewCard key={i} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="py-14 md:py-16 px-6 bg-white text-black" id="umsokn">
          <div className="max-w-xl mx-auto">
            <div className="space-y-7">
              {/* Header */}
              <div className="text-center mb-1">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
                  Byrjaðu með Fjarþjálfun
                </h1>
              </div>

              {/* Pricing Card */}
              <div className="bg-[#111] text-white rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden">
                {/* Yellow accent line on top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                
                <div className="text-center mb-6 pb-6 border-b border-gray-800">
                  <div className="flex items-baseline justify-center gap-1 mb-0.5">
                    <span className="text-5xl font-black tracking-tight text-white">
                      24.995
                    </span>
                    <span className="text-xl font-bold text-gray-400">kr.</span>
                  </div>
                  <div className="text-gray-400 font-medium text-sm">á mánuði</div>
                </div>

                {/* Signup Form */}
                {isSubmitted ? (
                  <div className="space-y-5 py-5">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-7 h-7 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Takk fyrir skráninguna!</h3>
                      <p className="text-gray-400 mb-5">Þú færð tölvupóst með leiðbeiningum um hvernig á að byrja.</p>
                      <Link to="/">
                        <Button className={`${primaryCtaClass} min-w-0 h-12 md:h-14 text-base px-8 shadow-[0_4px_0_0_#0a0a0a,0_8px_24px_rgba(230,255,40,0.4)]`}>
                          Til baka á forsíðuna
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-left">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-300 font-medium ml-1">Fullt nafn *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="Jón Jónsson" 
                        className="bg-[#222] border-gray-800 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="kennitala" className="text-gray-300 font-medium ml-1">Kennitala *</Label>
                      <Input 
                        id="kennitala" 
                        placeholder="000000-0000" 
                        className="bg-[#222] border-gray-800 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        value={formData.kennitala}
                        onChange={(e) => setFormData((prev) => ({ ...prev, kennitala: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-medium ml-1">Netfang *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="jon@daemi.is" 
                        className="bg-[#222] border-gray-800 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goal" className="text-gray-300 font-medium ml-1">Hvað er markmið þitt? *</Label>
                      <Input 
                        id="goal" 
                        placeholder="T.d. vöðvaaukning, fitubrennsla, styrkur..." 
                        className="bg-[#222] border-gray-800 text-white placeholder:text-gray-500 h-12 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        value={formData.goal}
                        onChange={(e) => setFormData((prev) => ({ ...prev, goal: e.target.value }))}
                      />
                    </div>

                    <div className="flex items-start space-x-3 pt-2 pb-1 ml-1">
                      <Checkbox 
                        id="terms" 
                        className="mt-1 border-gray-600 data-[state=checked]:bg-primary data-[state=checked]:text-black data-[state=checked]:border-primary"
                        checked={formData.terms}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked as boolean }))}
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-400 leading-tight">
                        Ég samþykki <Link to="/terms#terms" className="text-white underline decoration-gray-600 underline-offset-2 hover:decoration-primary hover:text-primary transition-colors font-medium">skilmála</Link> og <Link to="/terms#privacy" className="text-white underline decoration-gray-600 underline-offset-2 hover:decoration-primary hover:text-primary transition-colors font-medium">persónuverndarstefnu</Link> *
                      </Label>
                    </div>

                    <Button
                      className={formSubmitClass}
                      onClick={handleSubmit}
                      disabled={!isFormValid || isSubmitting}
                    >
                      <span className="inline-flex items-center justify-center gap-2.5">
                        {isSubmitting ? "Sendi..." : "Byrja núna"}
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                        )}
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="pt-4 pb-24 px-6 bg-white text-black" id="spurningar">
          <div className="max-w-3xl mx-auto">
            <Accordion
              type="multiple"
              value={openFaqItems}
              onValueChange={handleFaqValueChange}
              className="space-y-4"
            >
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  id={item.question.startsWith("Hvað kostar") ? "pricing" : undefined}
                  className="border-0"
                >
                  <AccordionTrigger className="group bg-black hover:no-underline rounded-xl data-[state=open]:rounded-b-none px-6 py-6 md:py-8 text-white font-bold text-lg md:text-2xl lg:text-[1.75rem] text-center [&>svg:last-child]:hidden relative">
                    <span className="flex-1 pr-10">{item.question}</span>
                    <Plus className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 group-data-[state=open]:hidden" />
                    <X className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 hidden group-data-[state=open]:block" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-white text-gray-800 px-6 md:px-8 py-6 md:py-8 text-base md:text-lg leading-relaxed rounded-b-xl">
                    <div className="space-y-4">{item.content}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-10 md:mt-12 flex justify-center">
              <Button onClick={scrollToPricing} className={primaryCtaClass}>
                <span className="inline-flex items-center justify-center gap-2.5">
                  Ég er tilbúinn að byrja
                  <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity shrink-0">
              <img
                src="/images/gf-training-logo10.png"
                alt="GF Training"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
              />
            </Link>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-white/60">
              <Link to="/hjalp" className="hover:text-white transition-colors">Hjálp</Link>
              <Link to="/terms#terms" className="hover:text-white transition-colors">Skilmálar</Link>
              <Link to="/terms#privacy" className="hover:text-white transition-colors">Persónuvernd</Link>
              <Link to="/" className="hover:text-white transition-colors">Forsíða</Link>
            </div>
          </div>
          
          <div className="text-center text-sm md:text-base text-white/50 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4">
              Árangur er ekki tryggður og fer eftir þinni eigin vinnu, skuldbindingu og eftirfylgni. Við gefum ekki læknisfræðileg ráð.
            </p>
            <p>
              Copyright © {new Date().getFullYear()} GF Training. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fjarthjalfun;
