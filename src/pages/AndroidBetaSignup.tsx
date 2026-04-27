import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

const AndroidBetaSignup = () => {
  const [state, handleSubmit] = useForm("xnjlrwww");

  return (
    <>
      <SEO
        title="Android beta biðlisti | GF Training"
        description="Skráðu þig á biðlista fyrir Android prófanir á GF Training appinu."
        canonical="https://gftraining.is/android"
      />

      <div className="min-h-screen bg-background text-foreground">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/images/gf-training-logo10.png" alt="GF Training" className="h-10 w-auto" />
            </Link>
            <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
              <ArrowLeft size={16} />
              Til baka
            </Link>
          </div>
        </nav>

        <section className="pt-28 pb-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display">
                Skráning í <span className="text-primary">Android prófanir</span>
              </h1>
              <p className="mt-4 text-foreground/70">
                Vertu með í fyrstu Android útgáfunni af GF Training. Við sendum þér tölvupóst um leið og þú færð aðgang.
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
              <CardContent className="pt-6">
                {state.succeeded ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                    <h2 className="text-2xl font-bold">Takk fyrir skráninguna!</h2>
                    <p className="text-foreground/70">
                      Við höfum tekið við skráningunni þinni og látum þig vita þegar Android prófanir opna.
                    </p>
                    <Button asChild className="mt-2">
                      <Link to="/">Fara á forsíðu</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Fullt nafn *</Label>
                      <Input id="name" type="text" name="name" required />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Netfang *</Label>
                      <Input id="email" type="email" name="email" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Símanúmer</Label>
                      <Input id="phone" type="tel" name="phone" placeholder="Valfrjálst" />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="android_device">Hvaða Android síma notar þú?</Label>
                      <Input id="android_device" type="text" name="android_device" placeholder="T.d. Samsung S24 / Pixel 8" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Athugasemdir</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Hvað viltu helst prófa í appinu?"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <ValidationError errors={state.errors} />

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg"
                    >
                      {state.submitting ? "Sendi..." : "Skrá mig í Android prófanir"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AndroidBetaSignup;
