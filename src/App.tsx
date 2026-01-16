import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import EmailSignup1 from "./pages/EmailSignup1";
import EmailSignup2 from "./pages/EmailSignup2";
import EmailSignup4 from "./pages/EmailSignup4";
import Email3 from "./pages/Email3";
import AppLanding from "./pages/AppLanding";
import AppRedirect from "./pages/AppRedirect";
import AppSignup from "./pages/AppSignup";
import GetApp from "./pages/GetApp";
import Macros from "./pages/Macros";
import Apply from "./pages/Apply";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import Terms from "./pages/Terms";
import Askorun from "./pages/Askorun";
import AskorunSignup from "./pages/AskorunSignup";
import Links from "./pages/Links";
import FacebookPixel from "@/components/FacebookPixel";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Global disable for ConvertKit/Gummi forms - can be re-enabled later
const DisableKitForms = () => {
  useEffect(() => {
    // Override gummi function to prevent form creation
    const disableGummi = () => {
      if (typeof (window as any).gummi === 'function') {
        (window as any).gummi = function() {
          // Disabled - do nothing
          return;
        };
      }
    };

    // Run immediately
    disableGummi();

    // Keep checking in case script loads later
    const interval = setInterval(disableGummi, 500);
    
    // Also use MutationObserver to catch when gummi gets defined
    const observer = new MutationObserver(disableGummi);
    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DisableKitForms />
      <BrowserRouter>
               <ScrollToTop />
               <FacebookPixel />
               <Routes>
                 <Route path="/" element={<AppLanding />} />
                 <Route path="/home" element={<Index />} />
                 <Route path="/how-it-works" element={<HowItWorks />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route path="/pricing" element={<Pricing />} />
                 <Route path="/email1" element={<EmailSignup1 />} />
                 <Route path="/email2" element={<EmailSignup2 />} />
                 <Route path="/email3" element={<Email3 />} />
                 <Route path="/email4" element={<EmailSignup4 />} />
                 <Route path="/app-download" element={<AppRedirect />} />
                 <Route path="/app-signup" element={<AppSignup />} />
                 <Route path="/get-app" element={<GetApp />} />
                 <Route path="/macros" element={<Macros />} />
                 <Route path="/apply" element={<Apply />} />
                 <Route path="/signup" element={<Signup />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/askorun" element={<Askorun />} />
                <Route path="/askorun-signup" element={<AskorunSignup />} />
                <Route path="/links" element={<Links />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                 <Route path="*" element={<NotFound />} />
               </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
