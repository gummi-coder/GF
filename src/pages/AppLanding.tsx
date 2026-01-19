import React, { useState, useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Check, Star, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowRight, Smartphone, BarChart3, CalendarDays, Dumbbell, Zap, Video, PlayCircle, Trophy, Timer, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const AppLanding = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [mobilePlanIndex, setMobilePlanIndex] = useState(1); // Mobile: cycles through individual plans (0-4 with clones)
  const [desktopPlanIndex, setDesktopPlanIndex] = useState(0); // Desktop: cycles through views (0-1, showing 2 plans each)
  const [pricingPeriod, setPricingPeriod] = useState<"monthly" | "annual">("monthly");
  const [disableTransition, setDisableTransition] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use production URL for QR code so it works when scanned from any device
    const redirectUrl = `https://gftraining.is/app-download`;
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(redirectUrl)}`);
  }, []);

  // Handle scroll detection for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      id: 1,
      title: "Vöðvauppbygging",
      image: "/images/IMG_3234.jpg",
      description: "Vinsælasta planið, hannað til að byggja sterkar, skreyttar fætur og rass. Notar stigvaxandi álag og krefst þess að þú ýtir nálægt bilun í hverju setti fyrir hámarks árangur.",
      duration: "8 vikur",
      sessions: "4",
      popular: true
    },
    {
      id: 2,
      title: "Fitubrennsla",
      image: "/images/IMG_3236.jpg",
      description: "Æfingaplan fyrir allan líkamann sem inniheldur kardíó, hannað til að skora á allan líkamann með innbyggðum hvíldardögum annan hvern dag.",
      duration: "8 vikur",
      sessions: "4",
      popular: false
    },
    {
      id: 3,
      title: "Styrktarþjálfun",
      image: "/images/IMG_3238.jpg",
      description: "Hannað fyrir þá sem vilja auka styrk og byggja upp grunnstyrk. Fókusar á grunngripum og stigvaxandi álagi til að ná hámarks árangri.",
      duration: "12 vikur",
      sessions: "3-4",
      popular: false
    },
    {
      id: 4,
      title: "Heimaæfingar",
      image: "/images/IMG_3237.jpg",
      description: "Fullkomið plan fyrir þá sem vilja æfa heima án tækja. Notar líkamansþyngd og einföld verkfæri til að byggja styrk og vöðva.",
      duration: "6 vikur",
      sessions: "4-5",
      popular: false
    }
  ];

  // Mobile carousel: handle seamless jump from start clone (0) to end (4)
  useEffect(() => {
    if (mobilePlanIndex === 0) {
      const timer = setTimeout(() => {
        setDisableTransition(true);
        setMobilePlanIndex(4);
        setTimeout(() => setDisableTransition(false), 10);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (mobilePlanIndex === 5) {
      const timer = setTimeout(() => {
        setDisableTransition(true);
        setMobilePlanIndex(1);
        setTimeout(() => setDisableTransition(false), 10);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [mobilePlanIndex]);

  // Desktop carousel: show 2 plans at a time, 2 views total (0 = plans 1-2, 1 = plans 3-4)
  const maxDesktopIndex = 1; // Only 2 views (showing 2 plans each)

  const nextPlans = () => {
    // Desktop navigation
    setDesktopPlanIndex((prev) => {
      if (prev >= maxDesktopIndex) {
        return 0; // Loop back to first view
      }
      return prev + 1;
    });
    // Mobile navigation
    setMobilePlanIndex((prev) => {
      if (prev >= 4) {
        return 5; // Go to end clone, useEffect will jump to 1
      }
      return prev + 1;
    });
  };

  const prevPlans = () => {
    // Desktop navigation
    setDesktopPlanIndex((prev) => {
      if (prev <= 0) {
        return maxDesktopIndex; // Loop to last view
      }
      return prev - 1;
    });
    // Mobile navigation
    setMobilePlanIndex((prev) => {
      if (prev <= 1) {
        return 0; // Go to start clone, useEffect will jump to 4
      }
      return prev - 1;
    });
  };

  return (
    <>
      <SEO
        title="GF Training App - Styrktarþjálfun fyrir karla"
        description="Allt sem þú þarft til að ná árangri. Æfingar, næring og eftirfylgni í einu appi fyrir aðeins 3.990 kr."
        keywords="online pt app, æfinga app, þjálfunar app, gf training"
        canonical="https://gftraining.is/"
      />

      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30" data-app-landing>
        
        {/* Navigation - OWNU Style */}
        <nav className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled ? 'bg-background border-b border-white/10' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between relative">
            <Link to="/" className="flex items-center z-10">
              <img src="/images/gf-training-logo10.png" alt="GF Training" className="h-14 sm:h-16 md:h-24 w-auto" />
            </Link>
            
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a 
                href="#features" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                Eiginleikar
              </a>
              <a 
                href="#plans" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                Plön
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                Verð
              </a>
              <a 
                href="#faq" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                Spurningar
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/app-signup" className="hidden md:block">
                <Button className="bg-primary hover:bg-primary/90 text-black font-medium px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm shadow-lg">
                  Byrja núna
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white hover:text-white/80 z-10 p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Horizontal divider line - only show when scrolled */}
            {isScrolled && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`md:hidden border-t ${isScrolled ? 'bg-background border-white/10' : 'bg-black/90 backdrop-blur-sm border-white/20'}`}>
              <div className="px-6 py-4 space-y-4">
                <a 
                  href="#features" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white hover:text-white/70 transition-colors text-sm font-normal py-2 cursor-pointer"
                >
                  Eiginleikar
                </a>
                <a 
                  href="#plans" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white hover:text-white/70 transition-colors text-sm font-normal py-2 cursor-pointer"
                >
                  Plön
                </a>
                <a 
                  href="#pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white hover:text-white/70 transition-colors text-sm font-normal py-2 cursor-pointer"
                >
                  Verð
                </a>
                <a 
                  href="#faq" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white hover:text-white/70 transition-colors text-sm font-normal py-2 cursor-pointer"
                >
                  Spurningar
                </a>
                <Link to="/app-signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-black font-medium px-6 py-2.5 rounded-full text-sm mt-2">
                    Byrja núna
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section with Background Image */}
        <section className="relative pt-24 pb-0 px-6 sm:px-6 lg:px-4 overflow-hidden lg:pt-32 lg:pb-0 min-h-screen sm:min-h-[75vh] lg:min-h-screen flex items-end lg:items-center">
          {/* Background Image - Full height on mobile */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/2 3.png" 
              alt="Background" 
              className="w-full h-full sm:h-[70vh] lg:h-full object-cover object-center"
            />
            {/* Dark overlay for text readability - less dark on mobile */}
            <div className="absolute inset-0 bg-black/40 lg:bg-black/50"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 w-full pb-6 sm:pb-8 lg:pb-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-20 items-center">
              
              {/* Left: Content - Below fold on mobile */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:max-w-none lg:mx-0 px-2 sm:px-0 pt-[100vh] sm:pt-0 -mt-[90vh] sm:mt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] font-display tracking-tight text-white">
                  Byggðu upp styrk, vöðva og sjálfstraust - <span className="text-primary">allt á einum stað</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  GF Training appið hjálpar þér að byggja vöðva, brenna fitu og komast í þitt besta form - í ræktinni eða heima.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Link to="/app-signup" className="w-full sm:w-auto">
                    <Button className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-primary hover:bg-primary/90 text-black font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                      Byrja núna
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-6 pt-2 text-xs sm:text-sm font-medium text-white/80">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-white">4.9</span>
                    <span>(150+ umsagnir)</span>
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div>15k+ æfingar kláraðar</div>
                </div>
              </div>

              {/* Right: App Screenshot - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex relative items-center justify-center lg:justify-end">
                <div className="relative w-[280px] xl:w-[320px] rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                  <img 
                    src="/images/a1.PNG" 
                    alt="GF Training App Home" 
                    className="relative rounded-[2.5rem] shadow-2xl border-4 border-black/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Download Section (OWNU Style) */}
        <section className="pt-0 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 px-6 sm:px-6 lg:px-4 relative overflow-hidden bg-[#1a1a1a]">
           {/* Background Glow Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

           <div className="max-w-7xl mx-auto relative z-10">
             <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
               
               {/* QR Code (Left) - Hidden on mobile */}
               <div className="hidden lg:flex lg:col-span-3 flex-col items-center lg:items-start gap-6">
                 <div className="bg-white p-3 rounded-2xl w-36 h-36 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    {qrCodeUrl && (
                      <img 
                        src={qrCodeUrl}
                        alt="Sækja appið" 
                        className="w-full h-full" 
                      />
                    )}
                 </div>
                 <p className="text-sm font-medium text-center lg:text-left text-white/60 max-w-[150px]">
                   Skannaðu kóðann til að sækja appið.
                 </p>
               </div>

               {/* Main Headline (Center) - Below fold on mobile */}
               <div className="lg:col-span-6 text-center mb-6 sm:mb-8 lg:mb-0 pt-[90vh] lg:pt-0 -mt-[85vh] lg:mt-0">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-display leading-[0.95]">
                   Allt sem þú þarft til að ná <span className="text-primary">alvöru árangri!</span>
                 </h2>
               </div>

               {/* Store Badges (Right) - Below fold on mobile */}
               <div className="lg:col-span-3 flex flex-row sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3 sm:gap-4 lg:gap-8 pt-[90vh] lg:pt-0 -mt-[85vh] lg:mt-0">
                 {/* App Store */}
                 <div className="flex flex-col items-center lg:items-end gap-2">
                    <a href="https://apps.apple.com/es/app/gf-training/id6499074966" target="_blank" rel="noopener noreferrer" className="h-8 sm:h-10 w-[140px] sm:w-[190px] hover:opacity-80 transition-opacity flex items-center justify-center">
                      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-full w-auto" />
                    </a>
                    <div className="hidden sm:flex items-center gap-1">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-white text-white" />)}
                      </div>
                    </div>
                    <div className="hidden sm:block text-xs font-bold text-white/80">4.9 • 150+ einkunnir</div>
                 </div>

                 {/* Google Play */}
                 <div className="flex flex-col items-center lg:items-end gap-2">
                    <a href="https://play.google.com/store/apps/details?id=com.kahunas.io.GFTraining&hl=en" target="_blank" rel="noopener noreferrer" className="h-8 sm:h-10 hover:opacity-80 transition-opacity w-[140px] sm:w-[190px] flex items-center justify-center">
                       <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-full w-auto scale-[1.15]" />
                    </a>
                    <div className="hidden sm:flex items-center gap-1">
                      <div className="flex">
                         {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-white text-white" />)}
                      </div>
                    </div>
                    <div className="hidden sm:block text-xs font-bold text-foreground/80">5.0 • 100+ einkunnir</div>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* Feature Showcase (OWNU Style) */}
        <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 bg-[#1a1a1a] relative overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
               {/* Left: Dual Phones */}
               <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-start">
                  {/* Phone 1 */}
                  <div className="absolute left-1/2 -translate-x-[90px] sm:-translate-x-[100px] lg:left-0 lg:translate-x-0 top-1/2 -translate-y-1/2 z-20 w-[180px] sm:w-[220px] lg:w-[280px] -rotate-6 transform hover:rotate-0 transition-transform duration-500">
                    <img src="/images/a3.PNG" alt="Nutrition Tracking" className="rounded-[2.5rem] shadow-2xl border-4 border-black/40" />
                  </div>
                  {/* Phone 2 */}
                  <div className="absolute left-1/2 -translate-x-[10px] sm:translate-x-0 lg:left-[180px] lg:translate-x-0 top-1/2 -translate-y-1/2 z-10 w-[180px] sm:w-[220px] lg:w-[280px] rotate-6 transform hover:rotate-0 transition-transform duration-500 scale-90 opacity-80 lg:opacity-100">
                    <img src="/images/a4.PNG" alt="Calendar View" className="rounded-[2.5rem] shadow-2xl border-4 border-black/40" />
                  </div>
               </div>

               {/* Right: Content */}
               <div className="space-y-8 relative z-30">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[0.95] text-[#e8e8e3]">
                   Líkamsræktar app sem <span className="text-blue-500">skila þér árangri</span>
                 </h2>
                 
                 <div className="space-y-6 text-lg text-[#e8e8e3]/80 leading-relaxed">
                   <p>
                     GF Training er allt-í-einu líkamsræktar app með tilbúnum æfinga plönum, skýrri framvindu mælingu og einföldu næringarstuðningi og notað af yfir en 14.000 þjálfurum um allan heim og af öllum helstu einkaþjálfurun landsins.
                   </p>
                   <p>
                     Þú færð aðgang að æfinga plöntum sem leiða þig skref fyrir skref, mælingum sem sýna framfarir og hjálp að telja macros svo þú náir markmiðunum þínum. Engin giskið - bara app sem hjálpar þér að mæta reglulega og verða besta útgáfan af sjálfum þér.
                   </p>
                 </div>

                 <Link to="/app-signup" className="inline-block">
                    <Button className="h-14 px-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 font-bold text-lg">
                      Byrja núna
                    </Button>
                 </Link>
               </div>
             </div>

             {/* Bottom Icons */}
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-t border-white/10 pt-12">
               {[
                 { icon: Dumbbell, label: "30+ Plön" },
                 { icon: PlayCircle, label: "Myndbönd" },
                 { icon: BarChart3, label: "Mælingar" },
                 { icon: Zap, label: "Ákefð" },
                 { icon: Trophy, label: "Markmið" },
                 { icon: Timer, label: "Hvíld" },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 text-[#e8e8e3]/60 hover:text-blue-500 transition-colors group cursor-default">
                    <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* Example Plans Section - Brand Colors */}
        <section id="plans" className="py-12 sm:py-16 lg:py-24 px-4 bg-card/30 relative overflow-hidden scroll-mt-20">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Mobile Layout - OWNU Style */}
            <div className="lg:hidden space-y-8">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-black font-display leading-[0.95] text-white text-center">
                Finndu plan sem <span className="text-primary">hentar þér</span>
              </h2>

              {/* Featured Plan Card - Large, Full Width */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                  {/* Hidden carousel for cycling through plans */}
                  <div 
                    ref={mobileCarouselRef}
                    className={`absolute inset-0 flex ${disableTransition ? '' : 'transition-transform duration-500 ease-in-out'}`}
                    style={{ 
                      transform: `translateX(-${mobilePlanIndex * 100}%)`
                    }}
                  >
                    {/* Duplicate last plan at beginning for seamless loop */}
                    <div className="flex-shrink-0 w-full h-full">
                      <div className="relative w-full h-full">
                        <img 
                          src={plans[plans.length - 1].image} 
                          alt={plans[plans.length - 1].title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-black font-display text-white mb-3">
                            {plans[plans.length - 1].title}
                          </h3>
                          <p className="text-sm text-white/90 leading-relaxed mb-4">
                            {plans[plans.length - 1].description}
                          </p>
                          <div className="flex gap-6 text-xs">
                            <div>
                              <div className="font-bold text-white/70 mb-1">LENGD:</div>
                              <div className="font-bold text-white">{plans[plans.length - 1].duration}</div>
                            </div>
                            <div>
                              <div className="font-bold text-white/70 mb-1">ÆFINGAR/VIKU:</div>
                              <div className="font-bold text-white">{plans[plans.length - 1].sessions}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* All plans */}
                    {plans.map((plan, index) => (
                      <div key={`${plan.id}-${index}`} className="flex-shrink-0 w-full h-full">
                        <div className="relative w-full h-full">
                          <img 
                            src={plan.image} 
                            alt={plan.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
                          <div className="absolute inset-0 flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-black font-display text-white mb-3">
                              {plan.title}
                            </h3>
                            <p className="text-sm text-white/90 leading-relaxed mb-4">
                              {plan.description}
                            </p>
                            <div className="flex gap-6 text-xs">
                              <div>
                                <div className="font-bold text-white/70 mb-1">LENGD:</div>
                                <div className="font-bold text-white">{plan.duration}</div>
                              </div>
                              <div>
                                <div className="font-bold text-white/70 mb-1">ÆFINGAR/VIKU:</div>
                                <div className="font-bold text-white">{plan.sessions}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate first plan at end */}
                    <div className="flex-shrink-0 w-full h-full">
                      <div className="relative w-full h-full">
                        <img 
                          src={plans[0].image} 
                          alt={plans[0].title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-black font-display text-white mb-3">
                            {plans[0].title}
                          </h3>
                          <p className="text-sm text-white/90 leading-relaxed mb-4">
                            {plans[0].description}
                          </p>
                          <div className="flex gap-6 text-xs">
                            <div>
                              <div className="font-bold text-white/70 mb-1">LENGD:</div>
                              <div className="font-bold text-white">{plans[0].duration}</div>
                            </div>
                            <div>
                              <div className="font-bold text-white/70 mb-1">ÆFINGAR/VIKU:</div>
                              <div className="font-bold text-white">{plans[0].sessions}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={prevPlans}
                    className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button 
                    onClick={nextPlans}
                    className="w-12 h-12 rounded-full border-2 border-white/20 hover:border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Content Below */}
              <div className="space-y-4 text-center">
                <div className="text-xs font-bold text-primary uppercase tracking-wider">
                  30+ Æfingaplön
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Þú svarar nokkrum spurningum og við finnum plan sem hentar þér og þínum markmiðum.
                </p>
                <div className="pt-2">
                  <Link to="/app-signup">
                    <Button className="h-11 px-8 rounded-full bg-primary hover:bg-primary/90 text-black font-bold text-sm inline-flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                      Byrja núna
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Two Column */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-16">
              
              {/* Left: Content */}
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[0.95] text-white">
                  Finndu plan sem <span className="text-primary">hentar þér</span>
                </h2>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                  Þú svarar nokkrum spurningum og við finnum plan sem hentar þér og þínum markmiðum.
                </p>
                <div>
                  <Link to="/app-signup">
                    <Button className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg inline-flex items-center gap-2 md:gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                      Byrja núna
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right: Plan Cards */}
              <div className="space-y-6">
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-8">
                  30+ Æfingaplön
                </div>
                
                <div className="relative overflow-hidden">
                  <div 
                    ref={desktopCarouselRef}
                    className={`flex gap-6 transition-transform duration-500 ease-in-out`}
                    style={{ 
                      transform: `translateX(calc(-${desktopPlanIndex} * (100% + 1.5rem)))`
                    }}
                  >
                    {/* View 1: Plans 1-2 (index 0-1) */}
                    <div className="flex-shrink-0 w-full flex gap-6">
                      {plans.slice(0, 2).map((plan, index) => (
                        <div 
                          key={`${plan.id}-view1-${index}`}
                          className="flex-shrink-0 w-[calc(50%-12px)] bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img 
                              src={plan.image} 
                              alt={plan.title} 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                              <span className="text-sm font-bold text-white">{plan.title}</span>
                            </div>
                            {plan.popular && (
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block mb-2 border border-primary/30">
                                  <span className="text-xs font-bold text-primary">Vinsælast</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="p-6 space-y-4 bg-card/80">
                            <p className="text-foreground/80 leading-relaxed text-sm">
                              {plan.description}
                            </p>
                            <div className="flex gap-8 text-sm pt-2 border-t border-white/10">
                              <div>
                                <div className="font-bold text-primary mb-1">LENGD:</div>
                                <div className="text-foreground/60">{plan.duration}</div>
                              </div>
                              <div>
                                <div className="font-bold text-primary mb-1">ÆFINGAR/VIKU:</div>
                                <div className="text-foreground/60">{plan.sessions}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* View 2: Plans 3-4 (index 2-3) */}
                    <div className="flex-shrink-0 w-full flex gap-6">
                      {plans.slice(2, 4).map((plan, index) => (
                        <div 
                          key={`${plan.id}-view2-${index}`}
                          className="flex-shrink-0 w-[calc(50%-12px)] bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img 
                              src={plan.image} 
                              alt={plan.title} 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                              <span className="text-sm font-bold text-white">{plan.title}</span>
                            </div>
                            {plan.popular && (
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block mb-2 border border-primary/30">
                                  <span className="text-xs font-bold text-primary">Vinsælast</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="p-6 space-y-4 bg-card/80">
                            <p className="text-foreground/80 leading-relaxed text-sm">
                              {plan.description}
                            </p>
                            <div className="flex gap-8 text-sm pt-2 border-t border-white/10">
                              <div>
                                <div className="font-bold text-primary mb-1">LENGD:</div>
                                <div className="text-foreground/60">{plan.duration}</div>
                              </div>
                              <div>
                                <div className="font-bold text-primary mb-1">ÆFINGAR/VIKU:</div>
                                <div className="text-foreground/60">{plan.sessions}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 pt-4">
                  <button 
                    onClick={prevPlans}
                    className="w-12 h-12 aspect-square rounded-full border-2 border-white/10 hover:border-primary/50 bg-card/50 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 hover:bg-primary/10"
                    style={{ borderRadius: '50%' }}
                  >
                    <ChevronLeft className="w-6 h-6 text-foreground/70 hover:text-primary" />
                  </button>
                  <button 
                    onClick={nextPlans}
                    className="w-12 h-12 aspect-square rounded-full border-2 border-white/10 hover:border-primary/50 bg-card/50 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 hover:bg-primary/10"
                    style={{ borderRadius: '50%' }}
                  >
                    <ChevronRight className="w-6 h-6 text-foreground/70 hover:text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Standalone */}
        <section id="pricing" className="py-12 px-4 bg-card/20 scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black font-display mb-3">
              Einfalt verð. <span className="text-primary">Allt innifalið.</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Engin binding, engin falin gjöld. Aðgangur að öllum plönum og öllum eiginleikum.
            </p>

            {/* Improved Pricing Toggle Switch */}
            <div className="flex justify-center mb-8">
              <div className="relative inline-flex bg-card/60 backdrop-blur-sm border border-white/20 rounded-full p-1.5 shadow-lg">
                {/* Sliding Background */}
                <div
                  className={`absolute top-1.5 bottom-1.5 rounded-full bg-primary shadow-lg shadow-primary/50 transition-all duration-300 ease-out ${
                    pricingPeriod === "monthly" 
                      ? "left-1.5 w-[calc(50%-6px)]" 
                      : "left-[calc(50%-3px)] w-[calc(50%-6px)]"
                  }`}
                ></div>
                <button
                  onClick={() => setPricingPeriod("monthly")}
                  className={`relative px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 z-10 min-w-[140px] ${
                    pricingPeriod === "monthly"
                      ? "text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Mánaðarleg
                </button>
                <button
                  onClick={() => setPricingPeriod("annual")}
                  className={`relative px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 z-10 min-w-[140px] ${
                    pricingPeriod === "annual"
                      ? "text-white"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  Árleg
                </button>
              </div>
            </div>

            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full"></div>
              
              <div className="relative bg-background border-2 border-primary rounded-[2rem] p-6 md:p-8 shadow-2xl">
                {pricingPeriod === "annual" && (
                  <div className="inline-block bg-green-500/20 text-green-500 font-bold px-3 py-1 rounded-full text-xs mb-4">
                    Sparar 20%
                  </div>
                )}
                {pricingPeriod === "monthly" && (
                  <div className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs mb-4">
                    Vinsælast
                  </div>
                )}
                
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl font-black font-display tracking-tight">
                    {pricingPeriod === "annual" ? "3.192" : "3.990"}
                  </span>
                  <span className="text-xl font-bold text-foreground/50">kr.</span>
                </div>
                <div className="text-foreground/60 font-medium mb-1 text-sm">á mánuði</div>
                {pricingPeriod === "annual" && (
                  <div className="text-xs text-foreground/40 mb-6">38.304 kr. á ári</div>
                )}
                {pricingPeriod === "monthly" && (
                  <div className="mb-6"></div>
                )}

                <ul className="space-y-2.5 text-left mb-6 pl-3">
                  {[
                    "Aðgangur að 30+ æfingaplömum",
                    "Myndbönd við hverja æfingu",
                    "Mataræði",
                    "Skráning á framförum",
                    "Regluleg Check-ins",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={`/app-signup?period=${pricingPeriod}`} className="block">
                  <Button className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                    Byrja núna
                  </Button>
                </Link>
                <p className="text-xs text-foreground/40 mt-4">Engin binding. Hættu hvenær sem er.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 sm:py-16 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-8 sm:mb-12 lg:mb-16">
              Svona byrjar þú
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-center relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {[
                { step: "01", title: "Sækja GF Training appið", desc: "Í App Store eða Google Play" },
                { step: "02", title: "Svara nokkrum spurningum", desc: "Svara nokkrum spurningum um markmið og reynslu" },
                { step: "03", title: "Fá plan sem henter þínum markmiðum", desc: "Byrjaðu strax með plani sem passar þér" }
              ].map((item, i) => (
                <div key={i} className="relative z-10 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-card border border-white/10 flex items-center justify-center text-3xl font-black font-display mx-auto shadow-xl">
                    <span className="text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/60 max-w-[200px] mx-auto">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion - OWNU Style */}
        <section id="faq" className="py-16 sm:py-20 lg:py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-card/20 scroll-mt-20">
          {/* Subtle background shape */}
          <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 bg-primary blur-[80px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
              {/* Left: Large FAQ Heading */}
              <div className="lg:sticky lg:top-24">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display leading-tight text-white">
                  Algengar spurningar
                </h2>
              </div>

              {/* Right: FAQ Items */}
              <div className="space-y-0">
                {[
                  { q: "Hvað kostar appið?", a: "Aðeins 3.990 kr. á mánuði. Engin binding." },
                  { q: "Hentar þetta byrjendum?", a: "Já, appið er með sérstök plön fyrir byrjendur og kennslumyndbönd við hverja einustu æfingu." },
                  { q: "Þarf ég aðgang að rækt?", a: "Við erum bæði með plön fyrir ræktina og heimaæfingar. Þú velur það sem hentar þér." },
                  { q: "Get ég hætt hvenær sem er?", a: "Já, það er enginn uppsagnarfrestur. Þú getur sagt upp áskriftinni hvenær sem er inni á þínu svæði." },
                  { q: "Hvar er appið fáanlegt?", a: "Appið er fáanlegt í App Store fyrir iOS og Google Play fyrir Android." },
                  { q: "Eru þetta sömu plönin og þú notar með viðskiptavinum?", a: "Já, þetta eru nákvæmlega sömu plönin og ég nota með einstaklingsviðskiptavinum mínum." }
                ].map((item, i, arr) => (
                  <div key={i}>
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity group"
                    >
                      <span className="font-medium text-lg text-white pr-4">
                        {item.q}
                      </span>
                      <div className="flex-shrink-0">
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-foreground/50" />
                        )}
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="pb-6 pt-2 text-foreground/70 leading-relaxed">
                        {item.a}
                      </div>
                    )}
                    {/* Divider line */}
                    {i < arr.length - 1 && (
                      <div className="border-t border-white/10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer - OWNU Style */}
        <footer data-app-footer className="bg-background text-primary pt-16 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden relative border-t border-white/10">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 sm:mb-24 lg:mb-32">
              {/* Left: App Store & QR */}
              <div className="space-y-8">
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="h-10 border border-white/20 rounded-lg" alt="App Store" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity w-[190px] h-10 flex items-center justify-center">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-full w-auto scale-[1.15] border border-white/20 rounded-lg" alt="Google Play" />
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <img src={qrCodeUrl} alt="QR Code" className="w-16 h-16" />
                  </div>
                  <div className="text-sm font-medium text-primary max-w-[150px] leading-tight">
                    Skannaðu kóðann til að sækja appið.
                  </div>
                </div>
              </div>

              {/* Right: Navigation Links */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 lg:gap-16">
                <div>
                  <h3 className="font-bold text-white mb-6">Navigation</h3>
                  <ul className="space-y-4 text-sm font-medium opacity-90">
                    <li>
                      <a 
                        href="#features" 
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hover:text-white transition-colors text-white/70 cursor-pointer"
                      >
                        Eiginleikar
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#plans" 
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hover:text-white transition-colors text-white/70 cursor-pointer"
                      >
                        Plön
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#pricing" 
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hover:text-white transition-colors text-white/70 cursor-pointer"
                      >
                        Verð
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-6">Support</h3>
                  <ul className="space-y-4 text-sm font-medium opacity-90">
                    <li><Link to="/terms#terms" className="hover:text-white transition-colors text-white/70">Skilmálar</Link></li>
                    <li><Link to="/terms#privacy" className="hover:text-white transition-colors text-white/70">Persónuvernd</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Section: Huge Text & Socials */}
            <div className="relative">
              {/* Social Icons - Absolute positioned on desktop */}
              <div className="flex gap-6 mb-8 lg:absolute lg:top-0 lg:right-0 lg:mb-0 z-20">
                <a href="https://www.facebook.com/groups/799632098616149" target="_blank" rel="noopener noreferrer" className="bg-primary text-background p-2 rounded-full hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.instagram.com/gftraining.is/" target="_blank" rel="noopener noreferrer" className="bg-primary text-background p-2 rounded-full hover:bg-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>

              {/* Huge Brand Text */}
              <h1 className="text-[14vw] sm:text-[16vw] font-black font-display leading-[0.8] tracking-tighter text-center lg:text-left -ml-2 sm:-ml-4 opacity-100 select-none text-primary">
                gftraining
              </h1>
              
              <div className="mt-4 text-right text-xs opacity-60 font-medium text-white/50">
                GF TRAINING © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AppLanding;
