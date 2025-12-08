import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface SignupFormData {
  fullName: string;
  email: string;
  phone: string;
  kennitala: string;
  about: string;
  fitnessLevel: string;
  goals: string;
  program: string;
  terms: boolean;
}

const Signup = () => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get('plan');
  
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    phone: "",
    kennitala: "",
    about: "",
    fitnessLevel: "",
    goals: "",
    program: planParam || "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update program when plan parameter changes
  useEffect(() => {
    if (planParam && (planParam === 'basic' || planParam === 'pro')) {
      setFormData((prev) => ({ ...prev, program: planParam }));
    }
  }, [planParam]);

  // Remove any ConvertKit email signup forms from this page
  useEffect(() => {
    const removeConvertKitForms = () => {
      // Remove ConvertKit forms that might be injected
      const convertKitForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"]');
      convertKitForms.forEach(form => form.remove());
    };

    // Remove immediately and set up interval to catch any that load later
    removeConvertKitForms();
    const interval = setInterval(removeConvertKitForms, 500);

    return () => clearInterval(interval);
  }, []);
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.kennitala.trim() !== "" &&
    formData.about.trim() !== "" &&
    formData.fitnessLevel.trim() !== "" &&
    formData.goals.trim() !== "" &&
    formData.program.trim() !== "" &&
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
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, typeof value === "boolean" ? (value ? "yes" : "no") : value);
      });

      const response = await fetch("https://formspree.io/f/xpwoqzyo", {
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
          email: "",
          phone: "",
          kennitala: "",
          about: "",
          fitnessLevel: "",
          goals: "",
          program: "",
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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
        radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
      `,
      backgroundSize: '100% 2000px, 100% 2000px',
      backgroundPosition: '0 0, 0 100%',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      <Navigation />

      {/* Signup Form Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div>
            {/* Signup Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 font-display text-center">
                <span className="text-foreground">Skráning</span>
              </h2>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Búðu til aðgang þinn</CardTitle>
                </CardHeader>
                {isSubmitted ? (
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Takk fyrir skráninguna!</h3>
                      <p className="text-foreground/70">Ég hef samband fljótlega.</p>
                    </div>
                  </CardContent>
                ) : (
                  <CardContent className="space-y-6">
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
                      <Label htmlFor="phone" className="text-foreground">Símanúmer</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Símanúmer" 
                        className="bg-background/50 border-border/20"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="kennitala" className="text-foreground">Kennitala *</Label>
                      <Input 
                        id="kennitala" 
                        placeholder="Kennitala" 
                        className="bg-background/50 border-border/20"
                        value={formData.kennitala}
                        onChange={(e) => setFormData((prev) => ({ ...prev, kennitala: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="about" className="text-foreground">Upplýsingar um þig</Label>
                      <Textarea 
                        id="about" 
                        placeholder="Lýstu þér og hvað þú ert að leita að..." 
                        className="bg-background/50 border-border/20 min-h-[100px]"
                        value={formData.about}
                        onChange={(e) => setFormData((prev) => ({ ...prev, about: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fitnessLevel" className="text-foreground">Núverandi getustig *</Label>
                      <Select value={formData.fitnessLevel} onValueChange={(value) => setFormData((prev) => ({ ...prev, fitnessLevel: value }))}>
                        <SelectTrigger className="bg-background/50 border-border/20">
                          <SelectValue placeholder="Veldu núverandi getustig" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Byrjandi</SelectItem>
                          <SelectItem value="intermediate">Miðlungs</SelectItem>
                          <SelectItem value="advanced">Íþróttamaður</SelectItem>
                          <SelectItem value="expert">Sérfræðingur</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-foreground">Hvað er markmið þitt? *</Label>
                      <Textarea 
                        id="goals" 
                        placeholder="Lýstu aðal markmiðum þínum (t.d. þyngdartap, vöðvaaukning, styrkur, þol, o.s.frv.)" 
                        className="bg-background/50 border-border/20 min-h-[100px]"
                        value={formData.goals}
                        onChange={(e) => setFormData((prev) => ({ ...prev, goals: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="program" className="text-foreground">Val á áætlun</Label>
                      <Select value={formData.program} onValueChange={(value) => setFormData((prev) => ({ ...prev, program: value }))}>
                        <SelectTrigger className="bg-background/50 border-border/20">
                          <SelectValue placeholder="Veldu æfingaáætlun" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic - 3 mánaða áætlun</SelectItem>
                          <SelectItem value="pro">Pro - 6 mánaða áætlun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" checked={formData.terms} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: Boolean(checked) }))} />
                      <Label htmlFor="terms" className="text-sm text-foreground/80">
                        Ég samþykki skilmála og persónuverndarstefnu *
                      </Label>
                    </div>
                    
                    <Button onClick={handleSubmit} disabled={isSubmitting || !isFormValid} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                      {isSubmitting ? "Sendi..." : "Byrja núna"}
                    </Button>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Signup;
