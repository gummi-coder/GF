import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLanding from "./pages/AppLanding";
import AppRedirect from "./pages/AppRedirect";
import Terms from "./pages/Terms";
import Hjalp from "./pages/Hjalp";
import Fjarthjalfun from "./pages/Fjarthjalfun";
import ScrollToTop from "@/components/ScrollToTop";
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
          <Route path="/" element={<AppLanding />} />
          <Route path="/hjalp" element={<Hjalp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/fjarthjalfun" element={<Fjarthjalfun />} />
          <Route path="/fjarthalfun" element={<Fjarthjalfun />} />
          {/* QR code on main page */}
          <Route path="/app-download" element={<AppRedirect />} />
          {/* Legacy URLs → home or fjarþjálfun */}
          <Route path="/app-signup" element={<Navigate to="/fjarthalfun" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
