import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomApplicationForm from "@/components/CustomApplicationForm";

const Apply = () => {
  // Block the ConvertKit script from loading on this page
  useEffect(() => {
    // Remove the script tag if it exists - check multiple times
    const removeScript = () => {
      const scripts = document.querySelectorAll('script[data-uid="887ca30a1c"], script[src*="gummi.kit.com/887ca30a1c"]');
      scripts.forEach(script => script.remove());
    };
    
    removeScript();
    const scriptInterval = setInterval(removeScript, 100);

    // Prevent the script from executing if it tries to load
    const originalAppendChild = document.body.appendChild;
    const originalInsertBefore = document.body.insertBefore;
    
    document.body.appendChild = function(node: any) {
      if (node && node.tagName === 'SCRIPT' && 
          (node.getAttribute?.('data-uid') === '887ca30a1c' || 
           node.src?.includes('gummi.kit.com/887ca30a1c'))) {
        return node; // Don't actually append it
      }
      return originalAppendChild.call(this, node);
    };

    document.body.insertBefore = function(node: any, ref: any) {
      if (node && node.tagName === 'SCRIPT' && 
          (node.getAttribute?.('data-uid') === '887ca30a1c' || 
           node.src?.includes('gummi.kit.com/887ca30a1c'))) {
        return node; // Don't actually insert it
      }
      return originalInsertBefore.call(this, node, ref);
    };

    return () => {
      clearInterval(scriptInterval);
      document.body.appendChild = originalAppendChild;
      document.body.insertBefore = originalInsertBefore;
    };
  }, []);

  // Remove any ConvertKit email signup forms from the bottom corner (injected by global script)
  useEffect(() => {
    const removeBottomCornerForms = () => {
      // Remove ALL ConvertKit/Gummi forms - be very aggressive
      const selectors = [
        'form[data-sv-form]',
        '.ck_form',
        '[id*="ck"]',
        '[class*="convertkit"]',
        '[class*="formkit"]',
        '[data-sv-form]',
        '[id*="gummi"]',
        '[class*="gummi"]',
        'form[action*="convertkit"]',
        'form[action*="gummi"]',
        '[data-uid="887ca30a1c"]',
        'iframe[src*="convertkit"]',
        'iframe[src*="gummi"]',
        '[data-uid*="887ca30a1c"]',
        'div[data-uid*="887ca30a1c"]'
      ];

      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => {
            // Only keep if it's inside our application form
            const isInApplicationForm = element.closest('form, [class*="application"], [id*="application"], [class*="CustomApplication"], [class*="custom-application"]');
            if (!isInApplicationForm) {
              element.remove();
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });

      // Remove any divs that contain forms (ConvertKit/Gummi often wraps forms in divs)
      const allDivs = document.querySelectorAll('div');
      allDivs.forEach(div => {
        const hasForm = div.querySelector('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"], [id*="gummi"]');
        if (hasForm) {
          const isInApplicationForm = div.closest('form, [class*="application"], [id*="application"], [class*="CustomApplication"]');
          if (!isInApplicationForm) {
            // Check if this div is at the bottom of the page (likely the floating form)
            const rect = div.getBoundingClientRect();
            const isAtBottom = rect.bottom > window.innerHeight - 100 || rect.top > window.innerHeight * 0.7;
            const isFixed = window.getComputedStyle(div).position === 'fixed';
            if (isAtBottom || isFixed) {
              div.remove();
            }
          }
        }
      });

      // Remove any forms in the footer (this page's footer)
      const footer = document.querySelector('footer');
      if (footer) {
        const allFooterElements = footer.querySelectorAll('*');
        allFooterElements.forEach(element => {
          if (element.tagName === 'FORM' || 
              element.id?.includes('ck') || 
              element.id?.includes('gummi') ||
              element.className?.toString().includes('convertkit') ||
              element.className?.toString().includes('gummi') ||
              element.className?.toString().includes('formkit')) {
            element.remove();
          }
        });
      }

      // Remove any fixed/floating elements that look like forms
      const allFixedElements = Array.from(document.querySelectorAll('*')).filter(el => {
        const style = window.getComputedStyle(el);
        return (style.position === 'fixed' || style.position === 'absolute') && (
          el.tagName === 'FORM' ||
          el.id?.includes('ck') ||
          el.id?.includes('gummi') ||
          el.className?.toString().includes('convertkit') ||
          el.className?.toString().includes('gummi') ||
          el.className?.toString().includes('formkit') ||
          el.querySelector('form[data-sv-form]') ||
          el.querySelector('.ck_form') ||
          el.querySelector('[id*="ck"]') ||
          el.querySelector('[id*="gummi"]')
        );
      });
      allFixedElements.forEach(el => {
        const isInApplicationForm = el.closest('form, [class*="application"], [id*="application"]');
        if (!isInApplicationForm) {
          el.remove();
        }
      });

      // Remove any elements directly in body that look like forms
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach(child => {
        if (child.tagName === 'FORM' || 
            child.id?.includes('ck') || 
            child.id?.includes('gummi') ||
            child.className?.toString().includes('convertkit') ||
            child.className?.toString().includes('gummi')) {
          const isInApplicationForm = child.closest('form, [class*="application"], [id*="application"]');
          if (!isInApplicationForm && child.id !== 'root') {
            child.remove();
          }
        }
      });

      // Remove any elements with email input fields that aren't in our form
      const emailInputs = document.querySelectorAll('input[type="email"], input[placeholder*="Email"], input[placeholder*="email"]');
      emailInputs.forEach(input => {
        const isInApplicationForm = input.closest('form, [class*="application"], [id*="application"], [class*="CustomApplication"]');
        if (!isInApplicationForm) {
          // Remove the form containing this input
          const form = input.closest('form, div, section');
          if (form && form !== document.body && form.id !== 'root') {
            form.remove();
          }
        }
      });

      // Remove any buttons with "Skrá mig" or similar text that aren't in our form
      const allButtons = document.querySelectorAll('button, [role="button"], input[type="submit"], a[role="button"]');
      allButtons.forEach(button => {
        const buttonText = button.textContent?.toLowerCase() || button.innerText?.toLowerCase() || '';
        if ((buttonText.includes('skrá') || buttonText.includes('sign up') || buttonText.includes('subscribe')) && 
            buttonText.length < 50) { // Short text suggests it's a signup button
          const isInApplicationForm = button.closest('form, [class*="application"], [id*="application"], [class*="CustomApplication"]');
          if (!isInApplicationForm) {
            // Remove the entire parent container
            let parent = button.parentElement;
            while (parent && parent !== document.body && parent.id !== 'root') {
              const parentText = parent.textContent?.toLowerCase() || '';
              if (parentText.includes('email') || parentText.includes('skrá') || parent.tagName === 'FORM' || parent.tagName === 'DIV') {
                parent.remove();
                break;
              }
              parent = parent.parentElement;
            }
          }
        }
      });

      // Specifically target "Skrá mig" button text
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const text = el.textContent || el.innerText || '';
        if (text.includes('Skrá mig') || text.includes('Skrá mig.') || text.includes('skrá mig')) {
          const isInApplicationForm = el.closest('form, [class*="application"], [id*="application"], [class*="CustomApplication"]');
          if (!isInApplicationForm && el.tagName !== 'BODY' && el.id !== 'root') {
            // Check if this element or its parent has an email input
            const hasEmailInput = el.querySelector('input[type="email"]') || el.closest('[class*="email"]');
            if (hasEmailInput) {
              let toRemove = el;
              // Try to find the form/container
              while (toRemove && toRemove !== document.body && toRemove.id !== 'root') {
                if (toRemove.tagName === 'FORM' || toRemove.querySelector('input[type="email"]')) {
                  toRemove.remove();
                  break;
                }
                toRemove = toRemove.parentElement;
              }
            }
          }
        }
      });
    };

    // Remove immediately multiple times to catch forms that load quickly
    removeBottomCornerForms();
    setTimeout(removeBottomCornerForms, 50);
    setTimeout(removeBottomCornerForms, 100);
    setTimeout(removeBottomCornerForms, 200);
    setTimeout(removeBottomCornerForms, 500);
    setTimeout(removeBottomCornerForms, 1000);
    setTimeout(removeBottomCornerForms, 2000);
    
    const interval = setInterval(removeBottomCornerForms, 100);

    // Also use MutationObserver to catch forms as they're added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        removeBottomCornerForms();
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'style']
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide any ConvertKit/Gummi forms */
        form[data-sv-form],
        .ck_form,
        [id*="ck"]:not([id*="application"]):not([id*="root"]),
        [class*="convertkit"],
        [class*="gummi"]:not([id*="gummi-form-container"]),
        [data-uid="887ca30a1c"],
        div:has(input[type="email"]):not(form):not([class*="application"]):not([id*="application"]),
        div:has(button:contains("Skrá mig")):not([class*="application"]):not([id*="application"]) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
        }
      `}</style>
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden" style={{
      backgroundImage: `
        radial-gradient(ellipse 1000px 800px at 10% 5%, hsl(var(--primary)/0.20) 0%, transparent 60%),
        radial-gradient(ellipse 900px 700px at 85% 95%, hsl(var(--primary)/0.14) 0%, transparent 60%)
      `,
      backgroundSize: '100% 2000px, 100% 2000px',
      backgroundPosition: '0 0, 0 100%',
      backgroundRepeat: 'no-repeat, no-repeat'
    }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-black tracking-tight uppercase font-display">
                GF<span className="text-primary">Training</span>
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Sæktu um <span className="text-primary font-black">VIP Þjálfun</span> hjá GF Training
            </h1>
            
            <div className="space-y-6 max-w-3xl mx-auto text-left">
              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Vertu sá maður sem þú veist að þú getur verið 👉</strong> Komumst að rót vandans sem hefur haldið þér frá því að komast í þitt drauma form
                </p>
              </div>

              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Taktu stjórnina aftur 👉</strong> Umbreyttu líkamanum, endurheimtu sjálfstraustið og sýndu að <strong>þú ert bara rétt að byrja!</strong>
                </p>
              </div>

              <div className="text-lg leading-relaxed">
                <p className="mb-4">
                  <strong>✅ Taktu fyrsta skrefið í átt að sterkari og heilbrigðari þér 👉</strong> Sæktu um núna til að sjá hvort VIP þjálfun hendi þér...
                </p>
              </div>
            </div>
          </div>

          {/* Custom Application Form */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Umsókn í VIP Þjálfun</h2>
              <p className="text-foreground/60">Fylltu út formið hér að neðan til að byrja</p>
            </div>
            
            <CustomApplicationForm />
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4">
            <div className="text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors mr-4">Persónuverndarstefna</a>
              <a href="#" className="hover:text-primary transition-colors">Skilmálar</a>
            </div>
            
            
            <div className="text-sm text-foreground/60">
              Hafa samband við GF Training<br />
              <a href="mailto:support@gftraining.com" className="text-primary hover:text-primary/80">
                support@gftraining.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Apply;
