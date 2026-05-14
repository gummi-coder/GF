import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const NewsletterCta = () => (
  <div className="text-center space-y-4 py-4">
    <p className="text-sm text-foreground/80 leading-relaxed">
      Skráning í tölvupóstlistann fer nú í gegnum sambandið.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
    >
      Hafa samband
    </Link>
  </div>
);

const EmailSignup2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
            <img
              src="/images/DSC02226 copy.JPG"
              alt="Gudmundur Fridgeirsson"
              className="w-full h-full object-cover scale-125"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Gudmundur Fridgeirsson</h1>
          <p className="text-foreground/70">GF Training Coach</p>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground leading-relaxed mb-4">
            Næstu 30 daga ætla ég að kenna þér allt sem þú þarft að vita um{" "}
            <span className="text-primary">líkamsrækt, næringu og hugarfar</span> til að lifa heilbrigðari og hollari lífstíl
          </h2>

          <p className="text-sm text-foreground/80 leading-relaxed">
            ÓKEYPIS 30 daga æfinga- og næringarsería í tölvupósti - Einföld dagleg skref sem virka í alvöru. Engin vitleysa - bara plan,
            stuðningur og mælanlegur árangur.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <NewsletterCta />
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Þetta færð þú:</h3>

          <div className="grid grid-cols-1 gap-4">
            {[
              'Skref-fyrir-skref 30 daga plan (stutt skilaboð + "verkefni dagsins")',
              "Æfingar eftir þínu stigi (byrjandi → lengra kominn)",
              "Tækni & endurheimt: upphitun, cooldown, hvíld, svefn",
              "Mælingar & framvinda: hvernig þú fylgist með raunverulegum árangri",
              "Næring án öfga: prótein, kolvetni, fita - einfaldar formúlur",
              "Hugarfar & vanar: aðferðir sem halda þér við efnið",
            ].map((text) => (
              <div key={text} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-8 space-y-2">
          <p className="text-sm text-foreground/80">100% ókeypis - getur hætt hvenær sem er</p>
          <p className="text-sm text-foreground/80">Enginn ruslpóstur - bara aðferðir sem virka raunverulega</p>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed mb-4">
            "Ég hjálpa fólki að hætta að giska og ná loksins árangri. Engir skyndikúrar, engin töfralausn, bara skýrt kerfi sem þú getur fylgt. Þessi 30 daga sería eru sömu verkfæri og ég nota með viðskiptavinum mínum til að sjá raunverulegar breytingar á nokkrum vikum."
          </blockquote>
          <div className="text-sm">
            <div className="font-bold text-foreground">Gudmundur Fridgeirsson</div>
            <div className="text-foreground/70">GF Training Coach</div>
          </div>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Meðmæli:</h3>
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed mb-4">
            "Ég var búin að prófa mjög mikið til þess að koma mér af stað því mér fannst ræktin svo leiðinleg EN það breyttist algerlega þegar ég byrjaði í þjálfun hjá GFtraining. Kom mér af stað og er loksins að ná að halda mig við ræktina"
          </blockquote>
          <div className="text-sm text-primary font-medium">- Sigurgeir, meðlimur GF Training</div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <NewsletterCta />
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-yellow-500">👉</span>
            <span className="text-sm text-foreground/80">Allt sent beint í pósthólfið þitt.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup2;
