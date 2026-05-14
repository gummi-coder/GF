import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlayCircle, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import SEO from "@/components/SEO";

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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-primary selection:text-black">
      <SEO 
        title="Fjarþjálfun | GF Training" 
        description="Persónuleg fjarþjálfun sem skilar árangri. Sérsniðið æfingaplan, mataræði og eftirfylgni."
      />

      {/* Minimal Top Banner */}
      <div className="bg-white text-black py-2.5 px-4 text-center text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="text-red-500">●</span> FJARÞJÁLFUN | OPPIÐ FYRIR UMSÓKNIR
      </div>

      <main>
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              Ert þú það sem hamlar <br className="hidden md:block" />
              <span className="text-white/60">árangrinum þínum?</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 font-medium max-w-3xl mx-auto pt-4">
              Skráðu þig í fjarþjálfun — Fjarlægðu getgáturnar og fáðu kerfi sem virkar.
            </p>

            {/* Video Placeholder (Vidalytics style) */}
            <div className="relative w-full aspect-video bg-[#111] border border-white/10 rounded-xl mt-12 overflow-hidden group cursor-pointer shadow-2xl">
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

            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mt-10 leading-relaxed">
              Þetta er persónuleg fjarþjálfun þar sem þú færð sérsniðið æfingaplan, markvissa næringarráðgjöf og eftirfylgni frá þjálfara sem hefur hjálpað hundruðum að ná sínu besta formi.
            </p>

            <div className="pt-8">
              <Button 
                onClick={scrollToPricing}
                className="bg-primary hover:bg-primary/90 text-black font-black text-lg md:text-xl px-10 md:px-14 h-16 md:h-20 rounded-sm w-full md:w-auto shadow-[0_0_40px_rgba(237,255,43,0.2)] hover:shadow-[0_0_60px_rgba(237,255,43,0.4)] transition-all uppercase tracking-wide"
              >
                Ég er tilbúinn að byrja
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof / Testimonials */}
        <section className="py-16 border-y border-white/10 bg-[#111]">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-center text-xl font-bold text-white/80 mb-12">Hvað fólk er að segja:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Jón Jónsson", text: "Besta ákvörðun sem ég hef tekið. Missti 10 kíló og hef aldrei verið sterkari." },
                { name: "Gunnar Gunnarsson", text: "Loksins kerfi sem ég get fylgt. Mæli 100% með GF Training." },
                { name: "Sigurður Sigurðsson", text: "Frábært viðmót og fagleg vinnubrögð. Þetta breytti öllu fyrir mig." }
              ].map((t, i) => (
                <div key={i} className="bg-[#1a1a1a] p-8 rounded-lg border border-white/5">
                  <div className="flex text-primary mb-4">
                    {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{t.text}"</p>
                  <p className="font-bold">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3 Pillars Section */}
        <section className="py-24 px-6" id="innifalid">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">
              Hvað færðu í fjarþjálfuninni:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="space-y-4">
                <div className="text-6xl font-black text-white/10 mb-2">#1</div>
                <h3 className="text-2xl font-bold text-primary">Persónuleg eftirfylgni</h3>
                <p className="text-white/70 leading-relaxed">
                  Þú færð vikulegt yfirferð og aðhald. Við förum yfir árangurinn, lögum það sem þarf að laga og tryggjum að þú sért alltaf á réttri leið að þínu markmiði.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl font-black text-white/10 mb-2">#2</div>
                <h3 className="text-2xl font-bold text-primary">Sérsniðið æfingaplan</h3>
                <p className="text-white/70 leading-relaxed">
                  Við brjótum niður hvernig þú átt að æfa til að hámarka árangur. Planið er sérsniðið að þínum aðstæðum, hvort sem þú æfir heima eða í ræktinni.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-6xl font-black text-white/10 mb-2">#3</div>
                <h3 className="text-2xl font-bold text-primary">Mataræði & Venjur</h3>
                <p className="text-white/70 leading-relaxed">
                  Þú færð skýr skref til að brjótast í gegnum hindranir. Við setjum upp mataræði sem hentar þínum lífsstíl svo þú náir árangri án þess að svelta þig.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <Button 
                onClick={scrollToPricing}
                className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-10 h-14 rounded-sm uppercase tracking-wide"
              >
                Ég er tilbúinn að byrja
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ / Info Section */}
        <section className="py-24 px-6 bg-[#111]" id="spurningar">
          <div className="max-w-3xl mx-auto space-y-16">
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Hvernig fer fjarþjálfunin fram?</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Þetta er ekki bara eitthvað app. Þetta er fjarþjálfun. Með mér.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Bústu við engum innantómum hvatningarræðum. Það þýðir - við förum beint í verkið.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Í byrjun förum við yfir stöðuna þína, setjum upp markmið og búum til ramma sem tryggir að þú náir árangri. Þetta er sama kerfi og ég hef notað til að hjálpa hundruðum viðskiptavina.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Í hverri viku förum við yfir árangurinn, greinum hvað gengur vel og lögum það sem má betur fara.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Hverju get ég átt von á?</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Markmiðið: Þú gengur í burtu með skýr, raunhæf skref í hverri viku.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Þú færð minn tíma og athygli. Við sníðum ráðgjöfina að þínum lífsstíl, reynslu, markmiðum og aðstæðum.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Þetta er persónuleg aðstoð sem beinist að þinni stærstu áskorun, hvort sem það er mataræðið, æfingarnar eða hugarfarið.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Hentar þetta mér?</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Ef þú ert ekki tilbúinn að leggja á þig vinnuna, þá er þetta <strong>ekki</strong> fyrir þig.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Ef þú vilt ná raunverulegum árangri og ert tilbúinn að fylgja leiðbeiningum, <strong>þá getum við hjálpað.</strong>
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Við höfum unnið með fólki á öllum aldri og úr öllum stéttum. Hvort sem þú ert byrjandi eða lengra kominn, þá aðlögum við kerfið að þér.
              </p>
            </div>

            <div className="space-y-4" id="pricing">
              <h2 className="text-2xl md:text-3xl font-bold">Hvað kostar fjarþjálfunin?</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Verðið er 24.995 kr. á mánuði. Þetta gerir okkur kleift að:
              </p>
              <ol className="list-decimal list-inside text-white/70 leading-relaxed text-lg space-y-2 ml-2">
                <li>Halda gæðunum í hámarki (ég tek aðeins inn takmarkaðan fjölda í einu)</li>
                <li>Veita þér þá persónulegu þjónustu sem þú þarft til að ná árangri</li>
              </ol>
              <p className="text-white/70 leading-relaxed text-lg mt-4">
                Ef þú hefur ekki náð árangri hingað til, þá er kominn tími á breytingu.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Ef þú ert tilbúinn, þá getum við hjálpað þér að komast á næsta stig.
              </p>
            </div>

            <div className="pt-16 pb-10" id="umsokn">
              <div className="container mx-auto max-w-2xl">
                <div className="space-y-8">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                      Byrjaðu með <span className="text-primary">Fjarþjálfun</span>
                    </h1>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                      Einstaklingsmiðað fjarþjálfun með persónulegum þjálfara.
                    </p>
                  </div>

                  {/* Pricing Card */}
                  <div className="bg-[#111] rounded-xl border border-white/10 p-6 md:p-8">
                    <div className="text-center mb-8">
                      <div className="flex items-baseline justify-center gap-1 mb-1">
                        <span className="text-5xl font-black tracking-tight">
                          24.995
                        </span>
                        <span className="text-xl font-bold text-white/50">kr.</span>
                      </div>
                      <div className="text-white/60 font-medium text-sm">á mánuði</div>
                    </div>

                    {/* Signup Form */}
                    {isSubmitted ? (
                      <div className="space-y-6 py-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8 text-black" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Takk fyrir skráninguna!</h3>
                          <p className="text-white/70 mb-4">Þú færð tölvupóst með leiðbeiningum um hvernig á að byrja.</p>
                          <Link to="/">
                            <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                              Til baka á forsíðuna
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 text-left">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-white">Fullt nafn *</Label>
                          <Input 
                            id="fullName" 
                            placeholder="Fullt nafn" 
                            className="bg-black/50 border-white/20 text-white"
                            value={formData.fullName}
                            onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="kennitala" className="text-white">Kennitala *</Label>
                          <Input 
                            id="kennitala" 
                            placeholder="000000-0000" 
                            className="bg-black/50 border-white/20 text-white"
                            value={formData.kennitala}
                            onChange={(e) => setFormData((prev) => ({ ...prev, kennitala: e.target.value }))}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">Netfang *</Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="Netfang" 
                            className="bg-black/50 border-white/20 text-white"
                            value={formData.email}
                            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="goal" className="text-white">Hvað er markmið þitt? *</Label>
                          <Input 
                            id="goal" 
                            placeholder="T.d. vöðvaaukning, fitubrennsla, styrkur..." 
                            className="bg-black/50 border-white/20 text-white"
                            value={formData.goal}
                            onChange={(e) => setFormData((prev) => ({ ...prev, goal: e.target.value }))}
                          />
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                          <Checkbox 
                            id="terms" 
                            className="mt-1 border-white/50 data-[state=checked]:bg-primary data-[state=checked]:text-black"
                            checked={formData.terms}
                            onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked as boolean }))}
                          />
                          <Label htmlFor="terms" className="text-sm text-white/80 leading-tight">
                            Ég samþykki <Link to="/terms#terms" className="text-primary hover:underline">skilmála</Link> og <Link to="/terms#privacy" className="text-primary hover:underline">persónuverndarstefnu</Link> *
                          </Label>
                        </div>

                        <Button 
                          className="w-full h-12 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-xl mt-4 transition-all"
                          onClick={handleSubmit}
                          disabled={!isFormValid || isSubmitting}
                        >
                          {isSubmitting ? "Sendi..." : "Byrja núna"}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 px-2">
                    {[
                      "Einstaklingsmiðað æfingaplan",
                      "Næringarráðgjöf",
                      "Tveggja vikna eftirfylgni",
                      "Aðgangur að appinu",
                      "Stanslaus samskipti við þjálfara"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm font-medium text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </Link>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base text-white/60">
              <Link to="/terms#terms" className="hover:text-white transition-colors">Skilmálar</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Hafa samband</Link>
              <Link to="/" className="hover:text-white transition-colors">Appið</Link>
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
