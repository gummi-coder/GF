import { Link } from "react-router-dom";

const EmailSignup1 = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4 font-display">
            GF<span className="text-primary">Training</span>
          </h1>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight font-display">
            <span className="text-primary">Vikuleg</span> ráð til að verða sterkari og til að halda þér í{" "}
            <span className="text-primary">þínu besta formi</span>
          </h2>

          <p className="text-xl text-foreground/80 leading-relaxed">
            Einn tölvupóstur á viku - raunhæf þjálfunarráð sem virka í alvöru.
          </p>

          <div className="max-w-md mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-4">
              <p className="text-foreground/80 text-sm leading-relaxed">
                Skráning í póstlistann fer nú í gegnum sambandsformið.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Hafa samband
              </Link>
            </div>
          </div>

          <p className="text-sm text-foreground/60">Vertu með líkamsræktar áhugamönnum sem halda sér áfram</p>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-foreground/40">© 2025 GF Training. Öll réttindi áskilin.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup1;
