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
import Email3 from "./pages/Email3";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
               <ScrollToTop />
               <FacebookPixel />
               <Routes>
                 <Route path="/" element={<Index />} />
                 <Route path="/how-it-works" element={<HowItWorks />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route path="/pricing" element={<Pricing />} />
                 <Route path="/email1" element={<EmailSignup1 />} />
                 <Route path="/email2" element={<EmailSignup2 />} />
                 <Route path="/email3" element={<Email3 />} />
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
