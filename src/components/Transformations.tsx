import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Transformations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    { id: 1, title: "a1", src: "/images/a1.PNG", alt: "Screenshot a1" },
    { id: 2, title: "a2", src: "/images/a2.PNG", alt: "Screenshot a2" },
    { id: 3, title: "a3", src: "/images/a3.PNG", alt: "Screenshot a3" },
    { id: 4, title: "a4", src: "/images/a4.PNG", alt: "Screenshot a4" },
    { id: 5, title: "a5", src: "/images/a5.PNG", alt: "Screenshot a5" },
    { id: 6, title: "a6", src: "/images/a6.PNG", alt: "Screenshot a6" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  // Auto-slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + transformations.length) % transformations.length;
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display md:whitespace-nowrap">
            Fjarþjálfun fer fram í <span className="text-primary">GF Training</span> appinu.
          </h2>
          <p className="text-xl text-foreground/80 font-sans">
            Ég hef hjálpað fjölda karla að móta líkamann og finna sjálfstraustið aftur.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 md:gap-10">
            {/* Left slide (blurred, clickable) */}
            <button 
              onClick={prevSlide}
              className="w-40 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden opacity-60 blur-[1px] hover:opacity-80 transition-all cursor-pointer shadow-none border-0 bg-transparent"
            >
              <img
                src={transformations[getSlideIndex(-1)].src}
                alt={transformations[getSlideIndex(-1)].alt}
                className="w-full h-full object-contain p-2"
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                  if (!el.dataset.fallbackTried) {
                    el.dataset.fallbackTried = '1';
                    if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                    if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                  }
                  el.src = '/placeholder.svg';
                  el.className = 'w-full h-full object-contain p-6';
                }}
              />
            </button>

            {/* Center slide (focused) */}
            <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden scale-105 md:scale-110 shadow-xl bg-transparent border-0">
              <img
                src={transformations[currentSlide].src}
                alt={transformations[currentSlide].alt}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                  if (!el.dataset.fallbackTried) {
                    el.dataset.fallbackTried = '1';
                    if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                    if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                  }
                  el.src = '/placeholder.svg';
                  el.className = 'w-full h-full object-contain p-6';
                }}
              />
            </div>

            {/* Right slide (blurred, clickable) */}
            <button 
              onClick={nextSlide}
              className="w-40 h-64 md:w-56 md:h-72 rounded-xl overflow-hidden opacity-60 blur-[1px] hover:opacity-80 transition-all cursor-pointer shadow-none border-0 bg-transparent"
            >
              <img
                src={transformations[getSlideIndex(1)].src}
                alt={transformations[getSlideIndex(1)].alt}
                className="w-full h-full object-contain p-2"
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement & { dataset: { fallbackTried?: string } };
                  if (!el.dataset.fallbackTried) {
                    el.dataset.fallbackTried = '1';
                    if (el.src.endsWith('.jpg')) { el.src = el.src.replace('.jpg', '.png'); return; }
                    if (el.src.endsWith('.png')) { el.src = el.src.replace('.png', '.jpg'); return; }
                  }
                  el.src = '/placeholder.svg';
                  el.className = 'w-full h-full object-contain p-6';
                }}
              />
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link to="/pricing">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-full text-lg">
              Skrá mig núna
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
