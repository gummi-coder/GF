import { useEffect, useState, useRef } from "react";
import { Check, Star, ArrowRight, Quote } from "lucide-react";
import { trackFacebookEvent } from "@/components/FacebookPixel";
import { Button } from "@/components/ui/button";

const EmailSignup4 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const scriptLoadedRef = useRef(false);

  // Remove any ConvertKit email signup forms from the bottom corner
  useEffect(() => {
    const removeBottomCornerForms = () => {
      const allForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"]');
      allForms.forEach(form => {
        const isInContainer = form.closest('#gummi-form-container, #gummi-form-container-2');
        if (!isInContainer) {
          form.remove();
        }
      });
      
      const allGummiForms = document.querySelectorAll('[id*="gummi"]');
      allGummiForms.forEach(form => {
        const isInContainer = form.closest('#gummi-form-container, #gummi-form-container-2');
        const isContainer = form.id === 'gummi-form-container' || form.id === 'gummi-form-container-2';
        if (!isInContainer && !isContainer) {
          form.remove();
        }
      });
    };

    removeBottomCornerForms();
    const interval = setInterval(removeBottomCornerForms, 500);
    return () => clearInterval(interval);
  }, []);

  // Script loading logic
  useEffect(() => {
    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      
      const loadScript = (containerId: string) => {
        const container = document.getElementById(containerId);
        if (container && !container.querySelector('script[data-uid="c71d9827c7"]')) {
          const script = document.createElement('script');
          script.async = true;
          script.setAttribute('data-uid', 'c71d9827c7');
          script.src = 'https://gummi.kit.com/c71d9827c7/index.js';
          container.appendChild(script);
        }
      };

      loadScript('gummi-form-container');
      loadScript('gummi-form-container-2');

      setTimeout(() => {
        const container1 = document.getElementById('gummi-form-container');
        const hasForm1 = container1?.querySelector('form') || container1?.querySelector('iframe');
        if (!hasForm1) {
          setShowFallback(true);
        }
      }, 2000);
    }

    const checkForSuccess = () => {
      const containers = document.querySelectorAll('#gummi-form-container, #gummi-form-container-2');
      containers.forEach(container => {
        const successIndicator = container.querySelector('[class*="success"], [class*="thank"], .form-success, .form-submitted');
        if (successIndicator) {
          setIsSubmitted(true);
          trackFacebookEvent('Lead', {
            content_name: 'Email Signup',
            content_category: 'Newsletter',
          });
        }
      });
    };

    const observer = new MutationObserver(checkForSuccess);
    const containers = document.querySelectorAll('#gummi-form-container, #gummi-form-container-2');
    containers.forEach(container => {
      observer.observe(container, { childList: true, subtree: true, attributes: true });
    });
    
    const handleSubmit = () => {
      setTimeout(checkForSuccess, 1000);
    };
    
    document.addEventListener('submit', handleSubmit, false);

    return () => {
      document.removeEventListener('submit', handleSubmit, false);
      observer.disconnect();
      const existingScripts = document.querySelectorAll('script[data-uid="c71d9827c7"]');
      existingScripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-6 py-6 md:py-12">
        
        {/* Brand / Logo Area */}
        <div className="flex flex-col items-center mb-6 animate-fade-in">
          <div className="relative mb-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 ring-2 ring-primary/20 shadow-2xl">
              <img 
                src="/images/DSC02226 copy.JPG" 
                alt="Gudmundur Fridgeirsson" 
                className="w-full h-full object-cover scale-110"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
          <div className="text-center space-y-0.5">
            <h3 className="text-base font-bold tracking-tight text-white">Guðmundur Friðgeirsson</h3>
            <p className="text-primary/90 text-xs font-medium tracking-wide uppercase">GF Training Coach</p>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center mb-6 space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
            <Star className="w-3 h-3 fill-current" />
            100% Ókeypis 30 Daga Plan
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white leading-[1.1] font-display tracking-tight drop-shadow-lg">
            30 daga <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">líkamsræktar- og næringarplan</span> sem virkar í alvöru
          </h1>
          
          <p className="text-base text-white/70 leading-relaxed max-w-sm mx-auto hidden md:block">
            Dagleg einföld skref í tölvupósti. Engin öfgar, engin gisk – bara skýrt kerfi sem hjálpar þér að byrja og halda áfram.
          </p>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm mx-auto md:hidden">
            Dagleg einföld skref í tölvupósti. Skýrt kerfi sem hjálpar þér að byrja.
          </p>
        </div>

        {/* Primary Form Container */}
        <div className="relative mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-transparent rounded-2xl blur opacity-30" />
          <div className="relative bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl ring-1 ring-white/5">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Takk fyrir skráninguna!</h2>
                <p className="text-white/60">Fyrsti pósturinn er á leiðinni til þín.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div id="gummi-form-container" className="min-h-[300px] flex flex-col justify-center">
                   {/* Fallback layout if script takes time */}
                   {showFallback && (
                     <div className="flex flex-col items-center justify-center space-y-3 py-8 text-white/40 animate-pulse">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span className="text-sm">Hleð inn skráningarformi...</span>
                     </div>
                   )}
                </div>
                {/* Visual Fake Button to show intent before form loads - hidden when form loads usually, but good for design feel */}
              </div>
            )}
          </div>
        </div>

        {/* Value Props / Benefits */}
        <div className="mb-16 space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Þetta færð þú</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          <div className="grid gap-4">
             {[
               "Skref-fyrir-skref daglegt plan í 30 daga",
               "Æfingar sem laga sig að þínu stigi",
               "Einfaldar næringarreglur sem fólk heldur sig við",
               "Verkfæri til að mæla raunverulegan árangur",
               "Hugarfar sem hjálpar þér að klára, ekki gefast upp"
             ].map((benefit, i) => (
               <div key={i} className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                   <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                 </div>
                 <span className="text-base text-white/90 font-medium leading-relaxed pt-1">
                   {benefit}
                 </span>
               </div>
             ))}
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            <Quote className="absolute top-4 left-4 w-12 h-12 text-white/5 -z-10 transform -scale-x-100" />
            
            <blockquote className="text-lg md:text-xl text-white/90 font-medium leading-relaxed text-center mb-6 font-display">
              "Ég hjálpa fólki að hætta að giska og ná loksins árangri. Þetta eru sömu verkfæri og ég nota með viðskiptavinum mínum."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <img src="/images/DSC02226 copy.JPG" alt="Gummi" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white">Guðmundur Friðgeirsson</div>
                <div className="text-xs text-primary uppercase tracking-wide font-bold">Stofnandi GF Training</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof 2 - Testimonial */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
           <div className="flex items-center justify-center gap-1 mb-4">
             {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
           </div>
           <div className="text-center mb-8">
             <p className="text-white/80 italic text-lg leading-relaxed">
               "Ég var búin að prófa mjög mikið til þess að koma mér af stað... það breyttist algerlega þegar ég byrjaði í þjálfun hjá GFtraining."
             </p>
             <p className="mt-4 font-bold text-primary">— Sigurgeir, <span className="text-white/60 font-normal">meðlimur</span></p>
           </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative">
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
             <span className="relative bg-background px-4 text-white/50 text-sm uppercase tracking-widest font-bold">Ertu til?</span>
          </div>

          <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
             <div className="mb-6">
               <h3 className="text-2xl font-bold text-white mb-2">Byrjum strax í dag</h3>
               <p className="text-white/60">Fylltu út formið til að fá fyrsta póstinn.</p>
             </div>
             {/* Second Form Instance */}
             {!isSubmitted && (
               <div id="gummi-form-container-2" className="min-h-[250px] flex flex-col justify-center">
                 {/* Script injects here */}
               </div>
             )}
          </div>
          
          <div className="space-y-4 pt-8 pb-12">
            <p className="text-xs text-white/30 uppercase tracking-widest">
              Enginn ruslpóstur • Getur hætt hvenær sem er
            </p>
            <div className="flex justify-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Trust badges could go here if available, currently just subtle footer */}
               <div className="h-6 w-24 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmailSignup4;
