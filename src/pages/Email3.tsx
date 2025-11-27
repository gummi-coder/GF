import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const Email3 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Remove any Kit forms that appear outside our container
    const removeStrayForms = () => {
      const allForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"], [class*="formkit"], [data-sv-form]');
      const container = document.getElementById('kit-form-container-email3');
      
      allForms.forEach(form => {
        const isInContainer = form.closest('#kit-form-container-email3');
        if (!isInContainer) {
          form.remove();
        } else {
          // If there are multiple forms in the container, keep only the first one
          const formsInContainer = container?.querySelectorAll('form[data-sv-form], [data-sv-form]');
          if (formsInContainer && formsInContainer.length > 1) {
            // Keep the first one, remove the rest
            for (let i = 1; i < formsInContainer.length; i++) {
              formsInContainer[i].remove();
            }
          }
        }
      });
      
      // Also remove duplicate scripts
      const scripts = document.querySelectorAll('script[data-uid="0e08d24af9"]');
      if (scripts.length > 1) {
        for (let i = 1; i < scripts.length; i++) {
          scripts[i].remove();
        }
      }
    };

    removeStrayForms();
    const interval = setInterval(removeStrayForms, 500);

    // Load Kit script directly into the container (like EmailSignup2 does)
    if (!scriptLoadedRef.current) {
      scriptLoadedRef.current = true;
      
      // Wait for container to be available
      const loadScript = () => {
        const container = document.getElementById('kit-form-container-email3');
        if (container && !container.querySelector('script[data-uid="0e08d24af9"]')) {
          const script = document.createElement('script');
          script.async = true;
          script.setAttribute('data-uid', '0e08d24af9');
          script.src = 'https://gummi.kit.com/0e08d24af9/index.js';
          container.appendChild(script);
        } else if (!container) {
          // Retry if container not ready yet
          setTimeout(loadScript, 100);
        }
      };
      
      // Try immediately, then retry after a short delay
      loadScript();
      setTimeout(loadScript, 500);
    }

    // Listen for success
    if (formContainerRef.current) {
      const observer = new MutationObserver(() => {
        removeStrayForms();
        const successEl = formContainerRef.current?.querySelector('.formkit-success, [class*="success"], .formkit-submitted');
        if (successEl) {
          setIsSubmitted(true);
        }
      });
      
      observer.observe(formContainerRef.current, { childList: true, subtree: true, attributes: true });
      
      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    }

    return () => clearInterval(interval);
  }, []);

  // Add custom styles for Kit form to match the design exactly
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .kit-form-container form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .kit-form-container input[type="text"],
      .kit-form-container input[type="email"],
      .kit-form-container input {
        width: 100% !important;
        height: 2.75rem !important;
        background: white !important;
        color: black !important;
        border: none !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem 1rem !important;
        font-size: 1rem !important;
        font-weight: 500 !important;
        margin-bottom: 0 !important;
        pointer-events: auto !important;
        z-index: 10 !important;
        position: relative !important;
      }
      .kit-form-container input::placeholder {
        color: #6b7280 !important;
      }
      .kit-form-container button[type="submit"],
      .kit-form-container input[type="submit"] {
        width: 100% !important;
        height: 3rem !important;
        background: #3b82f6 !important;
        color: white !important;
        border: none !important;
        border-radius: 0.5rem !important;
        font-size: 1rem !important;
        font-weight: 700 !important;
        letter-spacing: 0.025em !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
        text-transform: none !important;
      }
      .kit-form-container button[type="submit"]:hover,
      .kit-form-container input[type="submit"]:hover {
        background: #2563eb !important;
        transform: scale(1.02);
      }
      .kit-form-container label {
        display: none !important;
      }
      /* Hide name field if it exists - but be careful not to hide email */
      .kit-form-container input[name*="name"]:not([type="email"]),
      .kit-form-container input[name*="first"]:not([type="email"]),
      .kit-form-container input[type="text"]:not([type="email"]):not([name*="email"]) {
        display: none !important;
      }
      /* Make sure email input is always visible */
      .kit-form-container input[type="email"],
      .kit-form-container input[name*="email"],
      .kit-form-container input[placeholder*="email" i],
      .kit-form-container input[placeholder*="Email" i] {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        width: 100% !important;
        height: 2.75rem !important;
        background: white !important;
        color: black !important;
        border: none !important;
        border-radius: 0.5rem !important;
        padding: 0.75rem 1rem !important;
        font-size: 1rem !important;
        font-weight: 500 !important;
        margin-bottom: 1rem !important;
      }
      /* Ensure form is visible and interactive */
      .kit-form-container form,
      .kit-form-container iframe,
      .kit-form-container [data-sv-form] {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        pointer-events: auto !important;
        position: relative !important;
        z-index: 10 !important;
      }
      /* Make sure inputs can be focused and typed in */
      .kit-form-container input:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
      }
      .kit-form-container * {
        pointer-events: auto !important;
      }
      /* Ensure all form elements are interactive */
      #kit-form-container-email3,
      #kit-form-container-email3 * {
        pointer-events: auto !important;
        user-select: auto !important;
        -webkit-user-select: auto !important;
      }
      #kit-form-container-email3 input,
      #kit-form-container-email3 input[type="email"],
      #kit-form-container-email3 input[type="text"] {
        cursor: text !important;
        pointer-events: auto !important;
        -webkit-appearance: none !important;
        appearance: none !important;
      }
      #kit-form-container-email3 button,
      #kit-form-container-email3 button[type="submit"],
      #kit-form-container-email3 input[type="submit"] {
        cursor: pointer !important;
        pointer-events: auto !important;
      }
      /* Override any Kit default styles that might block interaction */
      #kit-form-container-email3 form {
        pointer-events: auto !important;
      }
      #kit-form-container-email3 iframe {
        pointer-events: auto !important;
      }
      /* Make absolutely sure nothing is blocking */
      #kit-form-container-email3 input[disabled],
      #kit-form-container-email3 input[readonly] {
        pointer-events: auto !important;
        opacity: 1 !important;
      }
      /* Remove any overlays that might block */
      #kit-form-container-email3::before,
      #kit-form-container-email3::after {
        display: none !important;
        pointer-events: none !important;
      }
      /* Ensure the entire container is interactive */
      #kit-form-container-email3 {
        touch-action: auto !important;
        -webkit-touch-callout: default !important;
      }
      /* Hide forms outside container */
      body > form[data-sv-form],
      body > .ck_form:not(.kit-form-container .ck_form),
      body > [id*="ck"]:not(.kit-form-container [id*="ck"]) {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">
      {/* Subtle blue glow from top-left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 py-12 relative z-10 w-full">
        {/* Logo */}
        <div className="absolute top-8 left-8 md:left-12 z-20">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight uppercase font-display text-white">
              GF<span className="text-primary">Training</span>
            </span>
          </a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto mt-20 lg:mt-0">
          {/* Left Column - Content */}
          <div className="space-y-8 text-left max-w-2xl">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Eina <span className="text-blue-500">ókeypis æfingaprógramið</span> sem þú þarft í Janúar
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Breyttu líkamanum, bættu heilsuna og byrjaðu janúar af krafti með sama æfingakerfi og ég nota til að ná árangri með mínum viðskiptavinum.
            </p>

            {/* Benefits List */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base md:text-lg text-gray-200 font-medium">
                  Ókeypis aðgangur að hágæða æfingaplani
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base md:text-lg text-gray-200 font-medium">
                  Fáðu 6 daga æfingarprógram beint í pósthólfið
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base md:text-lg text-gray-200 font-medium">
                  Vertu tilbúinn fyrir janúar og slepptu hefðbundnu "átaki"
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual and Form */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-md mx-auto lg:max-w-full" style={{ pointerEvents: 'none' }}>
            
            {/* Workout Plan Card Visual */}
            <div className="relative z-10 w-full max-w-md rounded-lg overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
              <div className="relative bg-white rounded-lg shadow-2xl">
                <img 
                  src="/images/workout-plan-preview.png" 
                  alt="Workout Plan Preview" 
                  className="w-full h-auto block"
                />
                
                {/* Heavy blur overlay on bottom third - matching reference exactly */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-[33%] z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.6) 60%, transparent 100%)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)'
                  }}
                ></div>
              </div>
            </div>

            {/* Form Card - Overlapping the visual with prominent blue glow */}
            <div className="absolute bottom-[-25px] md:bottom-[-45px] z-50 w-full max-w-[95%] md:max-w-sm" style={{ pointerEvents: 'auto' }}>
              <div 
                className="bg-[#0a0a0a] rounded-2xl p-6 md:p-8 relative"
                style={{
                  border: '2px solid rgba(59, 130, 246, 0.9)',
                  boxShadow: '0 0 50px rgba(59, 130, 246, 0.6), 0 0 100px rgba(59, 130, 246, 0.4), inset 0 0 30px rgba(59, 130, 246, 0.15)',
                  pointerEvents: 'auto'
                }}
              >
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-6">
                    <div className="w-14 h-14 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7 text-blue-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      Takk fyrir!
                    </h2>
                    <p className="text-gray-300">
                      Pósturinn er á leiðinni.
                    </p>
                  </div>
                ) : (
                  <div 
                    ref={formContainerRef} 
                    id="kit-form-container-email3" 
                    className="kit-form-container"
                    style={{ 
                      pointerEvents: 'auto', 
                      position: 'relative', 
                      zIndex: 100,
                      isolation: 'isolate'
                    }}
                  >
                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center leading-tight" style={{ pointerEvents: 'none' }}>
                      Eina sem ég þarf er netfengið þitt og ég sendi það strax á þig
                    </h2>
                    {/* Kit Form will be injected here by the script */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email3;
