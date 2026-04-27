import React, { useState, useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowRight, BarChart3, CalendarDays, Dumbbell, Zap, Video, PlayCircle, Trophy, Timer, Menu, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

/** Beinn hálfur á íslenska App Store síðu GF Training */
const GF_TRAINING_APP_STORE_URL =
  "https://apps.apple.com/is/app/gf-training/id6761101154";

type Language = "is" | "en";

const AppLanding = () => {
  const [language, setLanguage] = useState<Language>("is");
  const [searchParams, setSearchParams] = useSearchParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [mobilePlanIndex, setMobilePlanIndex] = useState(1); // Mobile: cycles through individual plans (0-4 with clones)
  const [desktopPlanIndex, setDesktopPlanIndex] = useState(0); // Desktop: cycles through views (0-1, showing 2 plans each)
  const [disableTransition, setDisableTransition] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isDeviceChoiceOpen, setIsDeviceChoiceOpen] = useState(false);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const desktopCarouselRef = useRef<HTMLDivElement>(null);
  const [androidFormState, handleAndroidSubmit] = useForm("xnjlrwww");

  const t = {
    navFeatures: language === "is" ? "Eiginleikar" : "Features",
    navPlans: language === "is" ? "Plön" : "Plans",
    navPricing: language === "is" ? "Verð" : "Pricing",
    navFaq: language === "is" ? "Spurningar" : "FAQ",
    startNow: language === "is" ? "Byrja núna" : "Start now",
    heroTitleLead: language === "is" ? "Byggðu upp styrk, vöðva og sjálfstraust -" : "Build strength, muscle and confidence -",
    heroTitleHighlight: language === "is" ? "allt á einum stað" : "all in one place",
    heroDescription:
      language === "is"
        ? "GF Training appið hjálpar þér að byggja vöðva, brenna fitu og komast í þitt besta form - í ræktinni eða heima."
        : "The GF Training app helps you build muscle, burn fat and get in your best shape - at the gym or at home.",
    heroFeature1: language === "is" ? "Sérhönnuð æfingaplön" : "Custom training plans",
    heroFeature2: language === "is" ? "Myndbönd við hverja æfingu" : "Video guidance for every workout",
    qrAlt: language === "is" ? "Sækja appið" : "Download the app",
    qrLabel: language === "is" ? "Skannaðu kóðann til að sækja appið." : "Scan the code to open the app link.",
    deviceTitle: language === "is" ? "Veldu tækið þitt" : "Choose your device",
    deviceDesc:
      language === "is"
        ? "Við gátum ekki greint tækið sjálfkrafa. Veldu hér að neðan:"
        : "We could not detect your device automatically. Choose one below:",
    closeDevicePicker: language === "is" ? "Loka vali á tæki" : "Close device selection",
    androidModalTitle: language === "is" ? "Skráning í Android prófanir" : "Android testing signup",
    androidModalDesc:
      language === "is"
        ? "Fylltu út formið og við höfum samband þegar Android útgáfan er tilbúin í prófanir."
        : "Fill out the form and we will contact you when Android testing opens.",
    closeAndroidModal: language === "is" ? "Loka Android skráningu" : "Close Android signup",
    thanks: language === "is" ? "Takk fyrir! Skráningin þín hefur borist." : "Thanks! Your signup has been received.",
    close: language === "is" ? "Loka" : "Close",
    fullName: language === "is" ? "Fullt nafn *" : "Full name *",
    email: language === "is" ? "Netfang *" : "Email *",
    phone: language === "is" ? "Símanúmer" : "Phone number",
    deviceQuestion: language === "is" ? "Hvaða Android síma notar þú?" : "Which Android phone do you use?",
    comments: language === "is" ? "Athugasemdir" : "Comments",
    commentsPlaceholder: language === "is" ? "T.d. Samsung S24 / Pixel 8" : "e.g. Samsung S24 / Pixel 8",
    androidCta: language === "is" ? "Skrá mig í Android prófanir" : "Sign me up for Android testing",
    sending: language === "is" ? "Sendi..." : "Sending...",
  };

  useEffect(() => {
    const appDownloadUrl = `${window.location.origin}/app-download`;
    setQrCodeUrl(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(appDownloadUrl)}`
    );
  }, []);

  useEffect(() => {
    if (isAndroidModalOpen || isDeviceChoiceOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isAndroidModalOpen, isDeviceChoiceOpen]);

  useEffect(() => {
    if (searchParams.get("androidSignup") === "1") {
      setIsAndroidModalOpen(true);
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("androidSignup");
      setSearchParams(nextParams, { replace: true });
    }
    if (searchParams.get("deviceSelect") === "1") {
      setIsDeviceChoiceOpen(true);
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete("deviceSelect");
      setSearchParams(nextParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleStartNowClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      window.open(GF_TRAINING_APP_STORE_URL, "_blank", "noopener,noreferrer");
      return;
    }

    if (isAndroid) {
      setIsAndroidModalOpen(true);
      return;
    }

    setIsDeviceChoiceOpen(true);
  };

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
      title: language === "is" ? "Vöðvauppbygging" : "Muscle Building",
      image: "/images/IMG_3234.jpg",
      description: language === "is"
        ? "Vinsælasta planið, hannað til að byggja sterkar, skreyttar fætur og rass. Notar stigvaxandi álag og krefst þess að þú ýtir nálægt bilun í hverju setti fyrir hámarks árangur."
        : "Our most popular plan, designed to build strong legs and glutes. Uses progressive overload and high effort sets for maximum results.",
      duration: language === "is" ? "8 vikur" : "8 weeks",
      sessions: "4",
      popular: true
    },
    {
      id: 2,
      title: language === "is" ? "Fitubrennsla" : "Fat Loss",
      image: "/images/IMG_3236.jpg",
      description: language === "is"
        ? "Æfingaplan fyrir allan líkamann sem inniheldur kardíó, hannað til að skora á allan líkamann með innbyggðum hvíldardögum annan hvern dag."
        : "A full-body training plan including cardio, designed to challenge your whole body with built-in rest days.",
      duration: language === "is" ? "8 vikur" : "8 weeks",
      sessions: "4",
      popular: false
    },
    {
      id: 3,
      title: language === "is" ? "Styrktarþjálfun" : "Strength Training",
      image: "/images/IMG_3238.jpg",
      description: language === "is"
        ? "Hannað fyrir þá sem vilja auka styrk og byggja upp grunnstyrk. Fókusar á grunngripum og stigvaxandi álagi til að ná hámarks árangri."
        : "Built for people who want to increase strength and a solid foundation. Focuses on core lifts and progressive overload.",
      duration: language === "is" ? "12 vikur" : "12 weeks",
      sessions: "3-4",
      popular: false
    },
    {
      id: 4,
      title: language === "is" ? "Heimaæfingar" : "Home Workouts",
      image: "/images/IMG_3237.jpg",
      description: language === "is"
        ? "Fullkomið plan fyrir þá sem vilja æfa heima án tækja. Notar líkamansþyngd og einföld verkfæri til að byggja styrk og vöðva."
        : "Perfect for training at home without machines. Uses bodyweight and simple tools to build strength and muscle.",
      duration: language === "is" ? "6 vikur" : "6 weeks",
      sessions: "4-5",
      popular: false
    }
  ];

  const appPricingFeatures = language === "is"
    ? [
        "Aðgangur að GF Training appinu",
        "Æfingarplan",
        "Myndbönd við hverja æfingu",
        "Mataræði",
        "Skráning á framförum",
      ]
    : [
        "Access to the GF Training app",
        "Workout plan",
        "Video guidance for each exercise",
        "Nutrition guidance",
        "Progress tracking",
      ];

  type AppPricingBadge = { kind: "primary" | "discount"; text: string };

  const appPricingTiers: {
    period: "monthly" | "quarterly" | "annual";
    title: string;
    price: string;
    subline: string;
    badge: AppPricingBadge | null;
    border: string;
  }[] = [
    {
      period: "monthly",
      title: language === "is" ? "Mánaðarlegt" : "Monthly",
      price: "2.990",
      subline: language === "is" ? "á mánuði" : "per month",
      badge: { kind: "primary", text: language === "is" ? "Vinsælast" : "Most popular" },
      border: "border-primary",
    },
    {
      period: "quarterly",
      title: language === "is" ? "3 mánuðir" : "3 months",
      price: "7.990",
      subline: language === "is" ? "fyrir 3 mánuði" : "for 3 months",
      badge: null,
      border: "border-white/20",
    },
    {
      period: "annual",
      title: language === "is" ? "Árlegt" : "Yearly",
      price: "25.100",
      subline: language === "is" ? "á ári" : "per year",
      badge: { kind: "discount", text: language === "is" ? "30% afsláttur" : "30% discount" },
      border: "border-white/20",
    },
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
        title={language === "is" ? "GF Training app | Æfingaplön, makró og mælingar fyrir karla" : "GF Training app | Training plans, macros and progress tracking"}
        description={
          language === "is"
            ? "Sæktu GF Training á iPhone: sérhönnuð æfingaplön, myndbönd við hverja æfingu, mælingar og macro tracking — allt í einu appi. Verð frá 2.990 kr. á mánuði."
            : "Download GF Training on iPhone: custom workout plans, exercise videos, tracking and macro guidance - all in one app."
        }
        keywords="GF Training app, workout app, fitness app, macro tracking, training plan, iPhone, App Store, strength training"
        canonical="https://gftraining.is/"
        ogImage="/images/app-screenshot-home.png"
      />

      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30" data-app-landing>
        <div className={isAndroidModalOpen || isDeviceChoiceOpen ? "blur-sm pointer-events-none select-none" : ""}>
        
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
                {t.navFeatures}
              </a>
              <a 
                href="#plans" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                {t.navPlans}
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                {t.navPricing}
              </a>
              <a 
                href="#faq" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-white/70 transition-colors text-sm font-normal cursor-pointer"
              >
                {t.navFaq}
              </a>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:block relative">
                <button
                  type="button"
                  onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
                  aria-label={language === "is" ? "Icelandic selected" : "English selected"}
                  className="w-8 h-8 rounded-full border border-white/30 overflow-hidden transition-all hover:border-primary"
                >
                  <img
                    src={language === "is" ? "https://flagcdn.com/is.svg" : "https://flagcdn.com/gb.svg"}
                    alt={language === "is" ? "Icelandic" : "English"}
                    className="w-full h-full object-cover"
                  />
                </button>

                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-background/95 backdrop-blur-md p-1.5 shadow-2xl">
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("is");
                        setIsLanguageMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white"
                    >
                      <img src="https://flagcdn.com/is.svg" alt="Icelandic" className="w-5 h-5 rounded-full object-cover" />
                      Icelandic
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage("en");
                        setIsLanguageMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white"
                    >
                      <img src="https://flagcdn.com/gb.svg" alt="English" className="w-5 h-5 rounded-full object-cover" />
                      English
                    </button>
                  </div>
                )}
              </div>
              <Button onClick={handleStartNowClick} className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-black font-medium px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm shadow-lg">
                {t.startNow}
              </Button>
              
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
                  {t.navFeatures}
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
                  {t.navPlans}
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
                  {t.navPricing}
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
                  {t.navFaq}
                </a>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-black font-medium px-6 py-2.5 rounded-full text-sm mt-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleStartNowClick();
                  }}
                >
                  {t.startNow}
                </Button>
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
                  {t.heroTitleLead} <span className="text-primary">{t.heroTitleHighlight}</span>
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
                  {t.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button
                    onClick={handleStartNowClick}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-primary hover:bg-primary/90 text-black font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    {t.startNow}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 pt-2 text-xs sm:text-sm font-medium text-white/80">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" strokeWidth={2.5} />
                    <span>{t.heroFeature1}</span>
                  </div>
                  <div className="hidden sm:block text-white/35">•</div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" strokeWidth={2.5} />
                    <span>{t.heroFeature2}</span>
                  </div>
                </div>
              </div>

              {/* Right: App Screenshot - Hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex relative items-center justify-center lg:justify-end">
                <div className="relative w-[280px] xl:w-[320px] rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full"></div>
                  <img 
                    src="/images/app-screenshot-home.png" 
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
                        alt={t.qrAlt} 
                        className="w-full h-full" 
                      />
                    )}
                 </div>
                 <p className="text-sm font-medium text-center lg:text-left text-white/60 max-w-[150px]">
                   {t.qrLabel}
                 </p>
               </div>

               {/* Main Headline (Center) - Below fold on mobile */}
               <div className="lg:col-span-6 text-center mb-6 sm:mb-8 lg:mb-0 pt-[90vh] lg:pt-0 -mt-[85vh] lg:mt-0">
                 <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black font-display leading-[0.95]">
                  {language === "is" ? (
                    <>Allt sem þú þarft til að ná <span className="text-primary">alvöru árangri!</span></>
                  ) : (
                    <>Everything you need for <span className="text-primary">real results!</span></>
                  )}
                 </h2>
               </div>

               {/* Store Badges (Right) - Below fold on mobile */}
               <div className="lg:col-span-3 flex flex-row sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3 sm:gap-4 lg:gap-8 pt-[90vh] lg:pt-0 -mt-[85vh] lg:mt-0">
                 {/* App Store */}
                 <div className="flex flex-col items-center lg:items-end gap-2">
                    <button type="button" onClick={handleStartNowClick} className="hover:opacity-80 transition-opacity flex items-center justify-center">
                      <img src="/images/app-store-badge.png" alt="App Store" className="w-[190px] h-auto" />
                    </button>
                    <div className="hidden sm:block text-xs font-bold text-white/80 text-center lg:text-right max-w-[190px]">
                      {language === "is" ? "Fáanlegt í App Store fyrir iPhone" : "Available on the App Store for iPhone"}
                    </div>
                 </div>

                 {/* Google Play */}
                 <div className="flex flex-col items-center lg:items-end gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDeviceChoiceOpen(false);
                        setIsAndroidModalOpen(true);
                      }}
                      className="hover:opacity-80 transition-opacity flex items-center justify-center"
                    >
                      <img src="/images/google-play-badge.png" alt="Google Play" className="w-[190px] h-auto" />
                    </button>
                    <div className="hidden sm:block text-xs font-bold text-white/80 text-center lg:text-right max-w-[190px]">
                      {language === "is" ? "Skráning í Android prófanir" : "Android testing signup"}
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </section>

        {/* Feature Showcase (OWNU Style) */}
        <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 bg-[#1a1a1a] relative overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
               {/* Left: Workout (front), Macros (back) */}
               <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-start">
                  {/* Phone 2 — Macros, back */}
                  <div className="absolute left-1/2 -translate-x-[10px] sm:translate-x-0 lg:left-[180px] lg:translate-x-0 top-1/2 -translate-y-1/2 z-10 w-[180px] sm:w-[220px] lg:w-[280px] rotate-6 transform hover:rotate-0 transition-transform duration-500 scale-90 opacity-80 lg:opacity-100">
                    <img src="/images/app-screenshot-macros.png" alt={language === "is" ? "Macros í GF Training appinu" : "Macros in the GF Training app"} className="rounded-[2.5rem] shadow-2xl border-4 border-black/40" />
                  </div>
                  {/* Phone 1 — Workout, front */}
                  <div className="absolute left-1/2 -translate-x-[90px] sm:-translate-x-[100px] lg:left-0 lg:translate-x-0 top-1/2 -translate-y-1/2 z-20 w-[180px] sm:w-[220px] lg:w-[280px] -rotate-6 transform hover:rotate-0 transition-transform duration-500">
                    <img src="/images/app-screenshot-workout.png" alt={language === "is" ? "Æfingar í GF Training appinu" : "Workouts in the GF Training app"} className="rounded-[2.5rem] shadow-2xl border-4 border-black/40" />
                  </div>
               </div>

               {/* Right: Content */}
               <div className="space-y-8 relative z-30">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[0.95] text-[#e8e8e3]">
                  {language === "is" ? (
                    <>Líkamsræktar app sem <span className="text-primary">skila þér árangri</span></>
                  ) : (
                    <>A fitness app that <span className="text-primary">gets results</span></>
                  )}
                 </h2>
                 
                 <div className="space-y-6 text-lg text-[#e8e8e3]/80 leading-relaxed">
                   <p>
                     {language === "is"
                       ? "GF Training er líkamsræktar app sem hjálpar þér að ná árangri með skýru og einföldu æfingaáætlunum, mælingum og næringarstuðningi sem leiðir þig áfram."
                       : "GF Training is a fitness app that helps you get results with clear training plans, progress tracking and practical nutrition support."}
                   </p>
                   <p>
                     {language === "is"
                       ? "Þú færð aðgang að æfingaplönum sem segja þér nákvæmlega hvað á að gera, mælingum sem sýna framfarir og einföldu macro tracking sem heldur þér á réttri leið svo þú náir markmiðunum þínum. GF Training hjálpar þér að mæta reglulega og byggja upp árangur og góða ávana."
                       : "You get plans that tell you exactly what to do, tracking that shows progress, and simple macro support to keep you on track toward your goals."}
                   </p>
                 </div>

                <Button onClick={handleStartNowClick} className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg">
                   {t.startNow}
                 </Button>
               </div>
             </div>

             {/* Bottom Icons */}
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-t border-white/10 pt-12">
              {[
                { icon: Dumbbell, label: language === "is" ? "40+ Plön" : "40+ Plans" },
                { icon: PlayCircle, label: language === "is" ? "Myndbönd" : "Videos" },
                { icon: BarChart3, label: language === "is" ? "Mælingar" : "Tracking" },
                { icon: Zap, label: language === "is" ? "Orka" : "Energy" },
                { icon: Trophy, label: language === "is" ? "Markmið" : "Goals" },
                { icon: Timer, label: language === "is" ? "Hvíld" : "Rest" },
              ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 text-[#e8e8e3]/60 hover:text-primary transition-colors group cursor-default">
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
                {language === "is" ? (
                  <>Finndu plan sem <span className="text-primary">hentar þér</span></>
                ) : (
                  <>Find a plan that <span className="text-primary">fits you</span></>
                )}
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
                              <div className="font-bold text-white/70 mb-1">{language === "is" ? "ÆFINGAR/VIKU:" : "SESSIONS/WEEK:"}</div>
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
                                <div className="font-bold text-white/70 mb-1">{language === "is" ? "ÆFINGAR/VIKU:" : "SESSIONS/WEEK:"}</div>
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
                              <div className="font-bold text-white/70 mb-1">{language === "is" ? "ÆFINGAR/VIKU:" : "SESSIONS/WEEK:"}</div>
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
                  {language === "is" ? "40+ æfingarplön" : "40+ training plans"}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {language === "is"
                    ? "Þú svarar nokkrum spurningum og við finnum plan sem hentar þér og þínum markmiðum."
                    : "Answer a few questions and we will match you with a plan for your goals."}
                </p>
                <div className="pt-2">
                  <Button onClick={handleStartNowClick} className="h-11 px-8 rounded-full bg-primary hover:bg-primary/90 text-black font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                    <span className="inline-flex items-center gap-2">
                      {t.startNow}
                      <ArrowRight size={16} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Two Column */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-16">
              
              {/* Left: Content */}
              <div className="space-y-6 lg:space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display leading-[0.95] text-white">
                  {language === "is" ? (
                    <>Finndu plan sem <span className="text-primary">hentar þér</span></>
                  ) : (
                    <>Find a plan that <span className="text-primary">fits you</span></>
                  )}
                </h2>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                  {language === "is"
                    ? "Þú svarar nokkrum spurningum og við finnum plan sem hentar þér og þínum markmiðum."
                    : "Answer a few questions and we will match you with a plan for your goals."}
                </p>
                <div>
                  <Button onClick={handleStartNowClick} className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                    <span className="inline-flex items-center gap-2 md:gap-3">
                      {t.startNow}
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Right: Plan Cards */}
              <div className="space-y-6">
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-8">
                  {language === "is" ? "40+ æfingarplön" : "40+ training plans"}
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
                            <div className="absolute top-4 left-4 bg-primary backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 shadow-sm">
                              <span className="text-sm font-bold text-primary-foreground">{plan.title}</span>
                            </div>
                            {plan.popular && (
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block mb-2 border border-primary/30">
                                  <span className="text-xs font-bold text-primary">{language === "is" ? "Vinsælast" : "Most popular"}</span>
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
                                <div className="font-bold text-primary mb-1">{language === "is" ? "ÆFINGAR/VIKU:" : "SESSIONS/WEEK:"}</div>
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
                            <div className="absolute top-4 left-4 bg-primary backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 shadow-sm">
                              <span className="text-sm font-bold text-primary-foreground">{plan.title}</span>
                            </div>
                            {plan.popular && (
                              <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-primary/20 backdrop-blur-sm px-3 py-1.5 rounded-full inline-block mb-2 border border-primary/30">
                                  <span className="text-xs font-bold text-primary">{language === "is" ? "Vinsælast" : "Most popular"}</span>
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
                                <div className="font-bold text-primary mb-1">{language === "is" ? "ÆFINGAR/VIKU:" : "SESSIONS/WEEK:"}</div>
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
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black font-display mb-3">
              {language === "is" ? (
                <>Einfalt verð. <span className="text-primary">Allt innifalið.</span></>
              ) : (
                <>Simple pricing. <span className="text-primary">Everything included.</span></>
              )}
            </h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              {language === "is"
                ? "Engin binding, engin falin gjöld. Aðgangur að öllum plönum og öllum eiginleikum."
                : "No lock-in, no hidden fees. Access to all plans and all features."}
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 items-stretch">
              {appPricingTiers.map((tier) => (
                <div key={tier.period} className="relative flex flex-col">
                  <div className="absolute inset-0 bg-primary/15 blur-[40px] rounded-full opacity-60 pointer-events-none" />
                  <div
                    className={`relative bg-background border-2 ${tier.border} rounded-[2rem] p-6 md:p-7 shadow-2xl flex flex-col flex-1 text-left`}
                  >
                    <h3 className="text-lg font-bold mb-3 text-center">{tier.title}</h3>
                    {tier.badge?.kind === "primary" && (
                      <div className="flex justify-center mb-3">
                        <span className="inline-block bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs">
                          {tier.badge.text}
                        </span>
                      </div>
                    )}
                    {tier.badge?.kind === "discount" && (
                      <div className="flex justify-center mb-3">
                        <span className="inline-block bg-green-500/20 text-green-500 font-bold px-3 py-1 rounded-full text-xs">
                          {tier.badge.text}
                        </span>
                      </div>
                    )}
                    {!tier.badge && <div className="mb-3 h-[28px]" aria-hidden />}

                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-4xl sm:text-5xl font-black font-display tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-lg font-bold text-foreground/50">kr.</span>
                    </div>
                    <div className="text-foreground/60 font-medium mb-6 text-sm text-center">{tier.subline}</div>

                    <ul className="space-y-2.5 mb-6 pl-1 flex-1">
                      {appPricingFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-500" />
                          </div>
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button onClick={handleStartNowClick} className="mt-auto w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                      {t.startNow}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 sm:py-16 lg:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black font-display text-center mb-8 sm:mb-12 lg:mb-16">
              {language === "is" ? "Svona byrjar þú" : "How to start"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 text-center relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              {[
                {
                  step: "01",
                  title: language === "is" ? "Þú sækir GF Training appið" : "Download the GF Training app",
                  desc: language === "is" ? "Í App Store fyrir iPhone" : "On the App Store for iPhone",
                },
                {
                  step: "02",
                  title: language === "is" ? "Þú svarar nokkrum spurningum" : "Answer a few questions",
                  desc: language === "is" ? "Svara nokkrum spurningum um markmið og reynslu" : "Tell us about your goals and experience",
                },
                {
                  step: "03",
                  title: language === "is" ? "Þú færð plan sem henter þínum markmiðum" : "Get a plan that fits your goals",
                  desc: language === "is" ? "Byrjaðu strax með plani sem passar þér" : "Start right away with a plan that suits you",
                }
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
                  {language === "is" ? "Algengar spurningar" : "Frequently asked questions"}
                </h2>
              </div>

              {/* Right: FAQ Items */}
              <div className="space-y-0">
                {(language === "is"
                  ? [
                      { q: "Hvað kostar appið?", a: "Frá 2.990 kr. á mánuði. Einnig í boði 3 mánaða (7.990 kr.) og ársáskrift (25.100 kr. með 30% afslætti). Engin binding." },
                      { q: "Hentar þetta byrjendum?", a: "Já, appið er með sérstök plön fyrir byrjendur og kennslumyndbönd við hverja einustu æfingu." },
                      { q: "Þarf ég aðgang að rækt?", a: "Við erum bæði með plön fyrir ræktina og heimaæfingar. Þú velur það sem hentar þér." },
                      { q: "Get ég hætt hvenær sem er?", a: "Já, það er enginn uppsagnarfrestur. Þú getur sagt upp áskriftinni hvenær sem er inni á þínu svæði." },
                      { q: "Hvar er appið fáanlegt?", a: "Appið er komið í App Store fyrir iPhone. Android útgáfa er í undirbúningi og þú getur skráð þig á Android prófanir hér á síðunni." },
                      { q: "Eru þetta sömu plönin og þú notar með viðskiptavinum?", a: "Já, þetta eru nákvæmlega sömu plönin og ég nota með viðskiptavinum mínum í fjarþjálfun." }
                    ]
                  : [
                      { q: "How much does the app cost?", a: "From 2,990 ISK per month. Also available as 3 months (7,990 ISK) and yearly (25,100 ISK with 30% discount). No commitment." },
                      { q: "Is this suitable for beginners?", a: "Yes. The app includes beginner-friendly plans and video guidance for every exercise." },
                      { q: "Do I need gym access?", a: "We provide both gym plans and home workout plans, so you can choose what fits you." },
                      { q: "Can I cancel anytime?", a: "Yes. There is no cancellation notice period; you can cancel anytime." },
                      { q: "Where is the app available?", a: "The app is available on the iPhone App Store. Android is in progress, and you can sign up for testing here." },
                      { q: "Are these the same plans you use with coaching clients?", a: "Yes, these are the same core plans used in my online coaching." }
                    ]
                ).map((item, i, arr) => (
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
                <div className="flex flex-wrap gap-4 items-center">
                  <button type="button" onClick={handleStartNowClick} className="hover:opacity-80 transition-opacity flex items-center">
                    <img src="/images/app-store-badge.png" className="w-[190px] h-auto" alt="App Store" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsDeviceChoiceOpen(false);
                      setIsAndroidModalOpen(true);
                    }}
                    className="hover:opacity-80 transition-opacity flex items-center"
                  >
                    <img src="/images/google-play-badge.png" className="w-[190px] h-auto" alt="Google Play" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-lg">
                    <img src={qrCodeUrl} alt="QR Code" className="w-16 h-16" />
                  </div>
                  <div className="text-sm font-medium text-primary max-w-[150px] leading-tight">
                    {t.qrLabel}
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
                        {t.navFeatures}
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
                        {t.navPlans}
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
                        {t.navPricing}
                      </a>
                    </li>
                    <li>
                      <Link to="/app-signup?plan=fjarthjalfun" className="hover:text-white transition-colors text-white/70">
                        {language === "is" ? "Fjarþjálfun" : "Online coaching"}
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-white mb-6">{language === "is" ? "Support" : "Support"}</h3>
                  <ul className="space-y-4 text-sm font-medium opacity-90">
                    <li><Link to="/hjalp" className="hover:text-white transition-colors text-white/70">{language === "is" ? "Hjálp" : "Help"}</Link></li>
                    <li><Link to="/terms#terms" className="hover:text-white transition-colors text-white/70">{language === "is" ? "Skilmálar" : "Terms"}</Link></li>
                    <li><Link to="/terms#privacy" className="hover:text-white transition-colors text-white/70">{language === "is" ? "Persónuvernd" : "Privacy"}</Link></li>
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

        {isDeviceChoiceOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-background p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setIsDeviceChoiceOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={t.closeDevicePicker}
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h3 className="text-2xl font-black font-display mb-2">
                {language === "is" ? (
                  <>Veldu <span className="text-primary">tækið þitt</span></>
                ) : (
                  <>Choose <span className="text-primary">your device</span></>
                )}
              </h3>
              <p className="text-foreground/70 mb-6">
                {t.deviceDesc}
              </p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsDeviceChoiceOpen(false);
                    window.open(GF_TRAINING_APP_STORE_URL, "_blank", "noopener,noreferrer");
                  }}
                  className="w-full rounded-xl border border-white/10 bg-card hover:bg-card/80 transition-colors p-4 flex items-center justify-between"
                >
                  <span className="font-semibold">iPhone (App Store)</span>
                  <img src="/images/app-store-badge.png" alt="App Store" className="w-[110px] h-auto" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsDeviceChoiceOpen(false);
                    setIsAndroidModalOpen(true);
                  }}
                  className="w-full rounded-xl border border-white/10 bg-card hover:bg-card/80 transition-colors p-4 flex items-center justify-between"
                >
                  <span className="font-semibold">Android</span>
                  <img src="/images/google-play-badge.png" alt="Google Play" className="w-[110px] h-auto" />
                </button>
              </div>
            </div>
          </div>
        )}

        {isAndroidModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center">
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-background p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setIsAndroidModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={t.closeAndroidModal}
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h3 className="text-2xl sm:text-3xl font-black font-display mb-2">
                {language === "is" ? (
                  <>Skráning í <span className="text-primary">Android prófanir</span></>
                ) : (
                  <>Android <span className="text-primary">testing signup</span></>
                )}
              </h3>
              <p className="text-foreground/70 mb-6">
                {t.androidModalDesc}
              </p>

              {androidFormState.succeeded ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-400 font-medium">
                    {t.thanks}
                  </div>
                  <Button
                    type="button"
                    onClick={() => setIsAndroidModalOpen(false)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full"
                  >
                    {t.close}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleAndroidSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="android-name" className="block mb-2 text-sm font-medium text-white">
                      {t.fullName}
                    </label>
                    <input
                      id="android-name"
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl bg-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ValidationError prefix="Name" field="name" errors={androidFormState.errors} />
                  </div>

                  <div>
                    <label htmlFor="android-email" className="block mb-2 text-sm font-medium text-white">
                      {t.email}
                    </label>
                    <input
                      id="android-email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl bg-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ValidationError prefix="Email" field="email" errors={androidFormState.errors} />
                  </div>

                  <div>
                    <label htmlFor="android-phone" className="block mb-2 text-sm font-medium text-white">
                      {t.phone}
                    </label>
                    <input
                      id="android-phone"
                      type="tel"
                      name="phone"
                      className="w-full rounded-xl bg-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="android-device" className="block mb-2 text-sm font-medium text-white">
                      {t.deviceQuestion}
                    </label>
                    <input
                      id="android-device"
                      type="text"
                      name="android_device"
                      placeholder={t.commentsPlaceholder}
                      className="w-full rounded-xl bg-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="android-message" className="block mb-2 text-sm font-medium text-white">
                      {t.comments}
                    </label>
                    <textarea
                      id="android-message"
                      name="message"
                      rows={4}
                      className="w-full rounded-xl bg-card border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <ValidationError prefix="Message" field="message" errors={androidFormState.errors} />
                  </div>

                  <ValidationError errors={androidFormState.errors} />

                  <Button
                    type="submit"
                    disabled={androidFormState.submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg"
                  >
                    {androidFormState.submitting ? t.sending : t.androidCta}
                  </Button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AppLanding;
