import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";

// Custom Spotify Icon Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const Footer = () => {
  useEffect(() => {
    // Load Gummi script for footer
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '887ca30a1c');
    script.src = 'https://gummi.kit.com/887ca30a1c/index.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[data-uid="887ca30a1c"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
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
              We help men get stronger and feel confident with sustainable habits.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <SpotifyIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Home</a></li>
              <li><a href="#how-it-works" className="text-white/60 hover:text-primary transition-colors text-xs">How It Works</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Coaches</a></li>
              <li><a href="#success" className="text-white/60 hover:text-primary transition-colors text-xs">Success</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#blog" className="text-white/60 hover:text-primary transition-colors text-xs">Blog</a></li>
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors text-xs">About Us</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Careers</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors text-xs">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-3 text-sm text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Privacy Policy</a></li>
              <li><a href="mailto:support@gftraining.com" className="text-white/60 hover:text-primary transition-colors text-xs">Customer Support</a></li>
              <li><a href="#" className="text-white/60 hover:text-primary transition-colors text-xs">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="text-center mb-4">
            <h3 className="text-sm font-bold text-white mb-1">Stay Updated</h3>
            <p className="text-white/60 text-xs">Get the latest fitness tips</p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-primary text-sm"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-4 py-2 rounded text-sm transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="text-center">
            <div className="text-white/60 text-xs">
              <p>© 2025 GF Training. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
