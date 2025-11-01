import { useEffect, useState, useRef } from "react";
import { Check } from "lucide-react";
import { trackFacebookEvent } from "@/components/FacebookPixel";

const EmailSignup2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Load Gummi script in both containers - the script can inject forms where it's placed
    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      
      // Load it in the first container (only if not already there)
      const container1 = document.getElementById('gummi-form-container');
      if (container1 && !container1.querySelector('script[data-uid="c71d9827c7"]')) {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.setAttribute('data-uid', 'c71d9827c7');
        script1.src = 'https://gummi.kit.com/c71d9827c7/index.js';
        container1.appendChild(script1);
      }

      // Also load it in the second container (below testimonials) - only if not already there
      const container2 = document.getElementById('gummi-form-container-2');
      if (container2 && !container2.querySelector('script[data-uid="c71d9827c7"]')) {
        const script2 = document.createElement('script');
        script2.async = true;
        script2.setAttribute('data-uid', 'c71d9827c7');
        script2.src = 'https://gummi.kit.com/c71d9827c7/index.js';
        container2.appendChild(script2);
      }

      // Check if form loaded after a delay
      setTimeout(() => {
        const hasForm1 = container1?.querySelector('form') || container1?.querySelector('iframe');
        if (!hasForm1) {
          setShowFallback(true);
        }
      }, 2000);
    }

    // Listen for successful form submissions from Gummi
    // Don't intercept - let Gummi handle validation first
    // Check for success indicators after Gummi processes the form
    const checkForSuccess = () => {
      // Look for Gummi success indicators (they might add classes or change content)
      const containers = document.querySelectorAll('#gummi-form-container, #gummi-form-container-2');
      containers.forEach(container => {
        // Gummi typically shows a success message or hides the form on success
        const successIndicator = container.querySelector('[class*="success"], [class*="thank"], .form-success, .form-submitted');
        if (successIndicator) {
          setIsSubmitted(true);
          // Track Facebook conversion event
          trackFacebookEvent('Lead', {
            content_name: 'Email Signup',
            content_category: 'Newsletter',
          });
        }
      });
    };

    // Watch for changes in the form containers (when Gummi updates after submission)
    const observer = new MutationObserver(() => {
      checkForSuccess();
    });

    const containers = document.querySelectorAll('#gummi-form-container, #gummi-form-container-2');
    containers.forEach(container => {
      observer.observe(container, { childList: true, subtree: true, attributes: true });
    });
    
    // Also listen for submit events but don't prevent default - let Gummi handle it
    const handleSubmit = (e: Event) => {
      // Don't do anything here - just let Gummi process it
      // We'll check for success after a delay
      setTimeout(() => {
        checkForSuccess();
      }, 1000);
    };
    
    document.addEventListener('submit', handleSubmit, false); // Use false, not true

    return () => {
      document.removeEventListener('submit', handleSubmit, false);
      observer.disconnect();
      const existingScripts = document.querySelectorAll('script[data-uid="c71d9827c7"]');
      existingScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-black text-primary-foreground">G</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Gudmundur Fridgeirsson</h1>
          <p className="text-foreground/70">GF Training Coach</p>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-foreground leading-relaxed mb-4">
            Næstu 30 daga ætla ég að kenna þér allt sem þú þarf að vita um{" "}
            <span className="text-primary">líkamsrækt, næringu og hugarfar</span>{" "}
            til að lifa heilbrigðri og hollari lífstíl
          </h2>
          
          <p className="text-sm text-foreground/80 leading-relaxed">
            ÓKEYPIS 30 daga æfinga- og næringarsería í tölvupósti - Einföld dagleg skref sem virka í alvöru. 
            Engin vitleysa - bara plan, stuðningur og mælanlegur árangur.
          </p>
        </div>

        {/* Email Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Takk fyrir!
              </h2>
            </div>
          ) : (
            <div id="gummi-form-container">
              {/* Gummi script will inject the form here */}
              {showFallback && (
                <div className="text-center text-sm text-foreground/70">
                  Loading form...
                </div>
              )}
            </div>
          )}
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Þetta færð þú:</h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Skref-fyrir-skref 30 daga plan (stutt skilaboð + "verkefni dagsins")
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Æfingar eftir þínu stigi (byrjandi → lengra kominn)
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Tækni & endurheimt: upphitun, cooldown, hvíld, svefn
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Mælingar & framvinda: hvernig þú fylgist með raunverulegum árangri
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Næring án öfga: prótein, kolvetni, fita — einfaldar formúlur
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/90">
                Hugarfar & vanar: aðferðir sem halda þér við efnið
              </span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-sm text-foreground/80">100% ókeypis — getur hætt hvenær sem er</p>
          <p className="text-sm text-foreground/80">Enginn ruslpóstur — bara aðferðir sem virka raunverulega</p>
        </div>

        {/* Testimonial */}
        <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Meðmæli:</h3>
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed mb-4">
            "Ég hjálpa fólki að hætta að giska og ná loksins árangri. Engir skyndikúrar, engin töfralausn — bara skýrt kerfi sem þú getur fylgt. Þessi 30 daga sería eru sömu verkfæri og ég nota með viðskiptavinum mínum til að sjá raunverulegar breytingar á nokkrum vikum."
          </blockquote>
          <div className="text-sm">
            <div className="font-bold text-foreground">Gudmundur Fridgeirsson</div>
            <div className="text-foreground/70">GF Training Coach</div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <blockquote className="text-sm text-foreground/90 italic leading-relaxed mb-4">
            "Ég var búin að prófa mjög mikið til þess að koma mér af stað því mér fannst ræktin svo leiðinleg EN það breyttist algerlega þegar ég byrjaði í þjálfun hjá GFtraining. Kom mér af stað og er loksins að ná að halda mig við ræktina"
          </blockquote>
          <div className="text-sm text-primary font-medium">
            - Viðskiptavinur GF Training
          </div>
        </div>

        {/* Second Email Form */}
        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">
                Takk fyrir!
              </h2>
            </div>
          ) : (
            <div id="gummi-form-container-2">
              {/* Gummi script will inject the form here */}
            </div>
          )}
        </div>

        {/* Footer */}
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
