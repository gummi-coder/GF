import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AskorunSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    kennitala: "",
    message: "",
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValid =
    formData.fullName.trim() && formData.email.trim() && formData.phone.trim() && formData.kennitala.trim() && formData.terms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !isValid) return;
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("kennitala", formData.kennitala);
      if (formData.message) fd.append("message", formData.message);
      fd.append("source", "askorun");
      fd.append("offer", "6-week-challenge");
      await fetch("https://formspree.io/f/mrbokzzz", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      setIsSubmitted(true);
    } catch {
      // swallow, keep UX simple
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="min-h-screen bg-background text-foreground flex items-center justify-center px-4"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
            radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
          `,
          backgroundSize: "100% 2000px, 100% 2000px",
          backgroundPosition: "0 0, 0 100%",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="max-w-lg w-full text-center bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl md:text-3xl font-black mb-2">Takk fyrir skráningu!</h1>
          <p className="text-foreground/80">Við sendum þér staðfestingu og næstu skref innan skamms.</p>
          <div className="mt-6">
            <Button onClick={() => (window.location.href = "/askorun")}>Til baka</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden px-4"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
          radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
        `,
        backgroundSize: "100% 2000px, 100% 2000px",
        backgroundPosition: "0 0, 0 100%",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="max-w-2xl mx-auto pt-28 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black font-display leading-tight">
            Skráning – <span className="text-primary">6 vikna áskorun</span>
          </h1>
          <p className="text-foreground/80 mt-2">Fylltu út upplýsingarnar hér að neðan til að tryggja þér sæti.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
          <div>
            <label className="block text-sm mb-1">Fullt nafn</label>
            <Input
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Fullt nafn"
              className="bg-background/60"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Netfang</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Netfang"
                className="bg-background/60"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Símanúmer</label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Símanúmer"
                className="bg-background/60"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Kennitala</label>
            <Input
              required
              value={formData.kennitala}
              onChange={(e) => setFormData({ ...formData, kennitala: e.target.value })}
              placeholder="000000-0000"
              className="bg-background/60"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Markmið eða athugasemd (valfrjálst)</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Segðu mér stuttlega frá markmiðum þínum"
              className="bg-background/60"
            />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              required
            />
            Ég samþykki <a href="/terms" className="text-primary hover:underline">skilmála & persónuvernd</a>.
          </label>
          <div className="pt-2">
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-8 py-6 rounded-full"
            >
              {isSubmitting ? "Skrái..." : "Skrá mig núna"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskorunSignup;


