import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

interface AppSignupFormData {
  fullName: string;
  kennitala: string;
  email: string;
  goal: string;
  terms: boolean;
}

const AppSignup = () => {
  const [searchParams] = useSearchParams();
  const initialPeriod = searchParams.get('period') || 'monthly';
  
  const [paymentPeriod, setPaymentPeriod] = useState<"monthly" | "annual">(initialPeriod as "monthly" | "annual" || "monthly");
  const [formData, setFormData] = useState<AppSignupFormData>({
    fullName: "",
    kennitala: "",
    email: "",
    goal: "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update payment period from URL parameter
  useEffect(() => {
    const periodFromUrl = searchParams.get('period');
    if (periodFromUrl === 'annual' || periodFromUrl === 'monthly') {
      setPaymentPeriod(periodFromUrl as "monthly" | "annual");
    }
  }, [searchParams]);

  // Disable Gummi/ConvertKit forms on this page
  useEffect(() => {
    const removeConvertKitForms = () => {
      const gummiForms = document.querySelectorAll(
        'body > .gummi-form-container, body > [id*="gummi-form"], body > form[data-sv-form], body > .ck_form'
      );
      gummiForms.forEach(form => {
        if (!form.closest('[data-app-signup]')) {
          (form as HTMLElement).style.display = 'none';
          (form as HTMLElement).remove();
        }
      });
    };
    
    removeConvertKitForms();
    const interval = setInterval(removeConvertKitForms, 500);
    setTimeout(() => clearInterval(interval), 10000);
    
    return () => clearInterval(interval);
  }, []);

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.kennitala.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.goal.trim() !== "" &&
    formData.terms === true;

  const pricing = paymentPeriod === 'annual' 
    ? { price: '3.192 kr.', period: 'á mánuði', total: '38.304 kr. á ári', savings: '20%' }
    : { price: '3.990 kr.', period: 'á mánuði', total: '', savings: '' };

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
      formDataToSend.append('plan', 'app');
      formDataToSend.append('period', paymentPeriod);
      formDataToSend.append('terms', formData.terms ? 'yes' : 'no');

      // Use different form endpoints based on payment period
      const formEndpoint = paymentPeriod === 'annual' 
        ? "https://formspree.io/f/xlgggrjd"  // Árlegt
        : "https://formspree.io/f/maqqqwew"; // Mánaðarlegt

      const response = await fetch(formEndpoint, {
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
    <div 
      data-app-signup
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
      {/* Navigation - Simple */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/images/gf-training-logo10.png" alt="GF Training" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
            <ArrowLeft size={16} />
            Til baka
          </Link>
        </div>
      </nav>

      {/* Signup Form Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-black font-display">
                Byrjaðu með <span className="text-primary">GF Training appinu</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl mx-auto">
                Allt sem þú þarft til að ná árangri. Æfingar, næring og eftirfylgni í einu appi.
              </p>
            </div>

            {/* Pricing Card */}
            <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
              <CardContent className="pt-6">
                {/* Payment Period Toggle */}
                <div className="flex justify-center mb-6">
                  <div className="relative inline-flex bg-card/60 backdrop-blur-sm border border-white/20 rounded-full p-1.5 shadow-lg">
                    {/* Sliding Background */}
                    <div
                      className={`absolute top-1.5 bottom-1.5 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-300 ease-out ${
                        paymentPeriod === "monthly" 
                          ? "left-1.5 w-[calc(50%-6px)]" 
                          : "left-[calc(50%-3px)] w-[calc(50%-6px)]"
                      }`}
                    ></div>
                    <button
                      onClick={() => setPaymentPeriod("monthly")}
                      className={`relative px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 z-10 min-w-[140px] ${
                        paymentPeriod === "monthly"
                          ? "text-white"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      Mánaðarleg
                    </button>
                    <button
                      onClick={() => setPaymentPeriod("annual")}
                      className={`relative px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 z-10 min-w-[140px] ${
                        paymentPeriod === "annual"
                          ? "text-white"
                          : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      Árleg
                    </button>
                  </div>
                </div>

                <div className="text-center mb-6">
                  {paymentPeriod === 'annual' && (
                    <div className="inline-block bg-green-500/20 text-green-500 font-bold px-3 py-1 rounded-full text-xs mb-4">
                      Sparar {pricing.savings}
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-5xl font-black font-display tracking-tight">
                      {pricing.price.split(' ')[0]}
                    </span>
                    <span className="text-xl font-bold text-foreground/50">kr.</span>
                  </div>
                  <div className="text-foreground/60 font-medium mb-1 text-sm">{pricing.period}</div>
                  {pricing.total && (
                    <div className="text-xs text-foreground/40">{pricing.total}</div>
                  )}
                </div>

                {/* Signup Form */}
                {isSubmitted ? (
                  <div className="space-y-6 py-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Takk fyrir skráninguna!</h3>
                      <p className="text-foreground/70 mb-4">Þú færð tölvupóst með leiðbeiningum um hvernig á að byrja.</p>
                      <Link to="/">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          Til baka á forsíðuna
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">Fullt nafn *</Label>
                      <Input 
                        id="fullName" 
                        placeholder="Fullt nafn" 
                        className="bg-background/50 border-border/20"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="kennitala" className="text-foreground">Kennitala *</Label>
                      <Input 
                        id="kennitala" 
                        placeholder="000000-0000" 
                        className="bg-background/50 border-border/20"
                        value={formData.kennitala}
                        onChange={(e) => setFormData((prev) => ({ ...prev, kennitala: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Netfang *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Netfang" 
                        className="bg-background/50 border-border/20"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goal" className="text-foreground">Hvað er markmið þitt? *</Label>
                      <Input 
                        id="goal" 
                        placeholder="T.d. vöðvaaukning, fitubrennsla, styrkur..." 
                        className="bg-background/50 border-border/20"
                        value={formData.goal}
                        onChange={(e) => setFormData((prev) => ({ ...prev, goal: e.target.value }))}
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2 pt-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.terms} 
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: Boolean(checked) }))}
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm text-foreground/80 leading-relaxed cursor-pointer">
                        Ég samþykki <Link to="/terms" className="text-primary hover:underline">skilmála</Link> og <Link to="/terms" className="text-primary hover:underline">persónuverndarstefnu</Link> *
                      </Label>
                    </div>
                    
                    <Button 
                      onClick={handleSubmit} 
                      disabled={isSubmitting || !isFormValid} 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sendi..." : "Byrja núna"}
                    </Button>
                    
                    <p className="text-xs text-center text-foreground/40">
                      Engin binding. Hættu hvenær sem er.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground/80">Aðgangur að 30+ æfingaplömum</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground/80">Myndbönd við hverja æfingu</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground/80">Mataræði og uppskriftir</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-foreground/80">Skráning á framförum</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppSignup;

