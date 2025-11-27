import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

// X (Twitter) Icon
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2H21l-6.5 7.43L22 22h-6.09l-4.76-6.2L5.6 22H3l7.02-8.02L2 2h6.18l4.3 5.7L18.244 2Zm-1.066 18h1.635L7.935 4H6.24l10.938 16Z"/>
  </svg>
);

// TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 8.5c-2.45 0-4.57-1.7-5.12-4.05V4h-3.1v11.18a3.18 3.18 0 1 1-2.26-3.05V9.9A6.28 6.28 0 1 0 12.78 22c3.12 0 5.65-2.38 5.97-5.42l.03-.34v-6.1A7.1 7.1 0 0 0 21 10.4V8.5Z"/>
  </svg>
);

const Footer = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for ConvertKit form to load and move it to our container
    const checkForForm = setInterval(() => {
      if (formContainerRef.current) {
        // Look for ConvertKit form elements
        const convertKitForm = document.querySelector('form[data-sv-form]') || 
                               document.querySelector('.ck_form') ||
                               document.querySelector('[id*="ck"]');
        
        if (convertKitForm && formContainerRef.current && !formContainerRef.current.contains(convertKitForm)) {
          formContainerRef.current.appendChild(convertKitForm as Node);
          clearInterval(checkForForm);
        }
      }
    }, 100);

    // Stop checking after 10 seconds
    setTimeout(() => clearInterval(checkForForm), 10000);

    return () => clearInterval(checkForForm);
  }, []);

  return (
    <footer className="pb-6 px-8">
      {/* Main Footer */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start mb-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-lg font-black">
                GF<span className="text-primary">TRAINING</span>
              </span>
            </div>
            <p className="text-white/60 text-xs mb-4 leading-relaxed">
              Ég hjálpa körlum að verða sterkari og finna sjálfstraust.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <XIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Flýtileiðir</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/60 hover:text-primary transition-colors text-xs">Heim</a></li>
              <li><a href="/how-it-works" className="text-white/60 hover:text-primary transition-colors text-xs">Hvernig þjálfun virkar</a></li>
              <li><a href="/fjarthjalfun" className="text-white/60 hover:text-primary transition-colors text-xs">Fjarþjálfun</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Efni</h4>
            <ul className="space-y-2">
              <li><a href="/apply" className="text-white/60 hover:text-primary transition-colors text-xs">VIP umsókn</a></li>
              <li><a href="/about" className="text-white/60 hover:text-primary transition-colors text-xs">Um GF Training</a></li>
              <li><a href="/contact" className="text-white/60 hover:text-primary transition-colors text-xs">Hafa samband</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Lög og skilmálar</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-white/60 hover:text-primary transition-colors text-xs">Skilmálar</a></li>
              <li><a href="/terms" className="text-white/60 hover:text-primary transition-colors text-xs">Persónuverndarstefna</a></li>
              <li><a href="/contact" className="text-white/60 hover:text-primary transition-colors text-xs">Þjónustuver</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold text-white mb-1">Fáðu uppfærslur</h3>
            <p className="text-white/60 text-xs">Nýjustu ráðin um heilsu og þjálfun</p>
          </div>
          
          <div className="max-w-sm mx-auto" ref={formContainerRef}>
            {/* ConvertKit form will be injected here */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="text-center">
            <div className="text-white/60 text-xs">
              <p>© 2025 GF Training. Öll réttindi áskilin.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
