import { useEffect } from "react";

const EmailSignup1 = () => {
  // Remove any ConvertKit email signup forms from the bottom corner (injected by global script)
  useEffect(() => {
    const removeBottomCornerForms = () => {
      // Remove ConvertKit forms that might be injected by the global script from index.html
      // Target forms that are NOT in our designated container
      const allForms = document.querySelectorAll('form[data-sv-form], .ck_form, [id*="ck"], [class*="convertkit"]');
      allForms.forEach(form => {
        // Only remove if it's not in our designated container
        const isInContainer = form.closest('#gummi-form-container');
        if (!isInContainer) {
          form.remove();
        }
      });
      
      // Also check for Gummi forms that might be injected elsewhere
      const allGummiForms = document.querySelectorAll('[id*="gummi"]');
      allGummiForms.forEach(form => {
        const isInContainer = form.closest('#gummi-form-container');
        const isContainer = form.id === 'gummi-form-container';
        if (!isInContainer && !isContainer) {
          form.remove();
        }
      });
    };

    // Remove immediately and set up interval to catch any that load later
    removeBottomCornerForms();
    const interval = setInterval(removeBottomCornerForms, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Load Gummi script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '887ca30a1c');
    script.src = 'https://gummi.kit.com/887ca30a1c/index.js';
    document.head.appendChild(script);

    // Also try to load it in the form container
    const formContainer = document.getElementById('gummi-form-container');
    if (formContainer) {
      formContainer.innerHTML = `
        <script async data-uid="887ca30a1c" src="https://gummi.kit.com/887ca30a1c/index.js"></script>
      `;
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[data-uid="887ca30a1c"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-foreground mb-4 font-display">
            GF<span className="text-primary">Training</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight font-display">
            <span className="text-primary">Vikuleg</span> ráð til að verða sterkari og til að halda þér í <span className="text-primary">þínu besta formi</span>
          </h2>
          
          <p className="text-xl text-foreground/80 leading-relaxed">
            Einn tölvupóstur á viku - raunhæf þjálfunarráð sem virka í alvöru.
          </p>

          {/* Gummi Form Container */}
          <div className="max-w-md mx-auto">
            <div id="gummi-form-container" className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <script async data-uid="887ca30a1c" src="https://gummi.kit.com/887ca30a1c/index.js"></script>
            </div>
          </div>

          <p className="text-sm text-foreground/60">
            Vertu með líkamsræktar áhugamönnum sem halda sér áfram
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-foreground/40">
            © 2025 GF Training. Öll réttindi áskilin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup1;
