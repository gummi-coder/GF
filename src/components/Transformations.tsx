import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Transformations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    { id: 1, title: "Sarah's Journey" },
    { id: 2, title: "Maria's Transformation" },
    { id: 3, title: "Jennifer's Success" },
    { id: 4, title: "Lisa's Results" },
    { id: 5, title: "Amanda's Progress" },
    { id: 6, title: "Rachel's Achievement" },
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
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-display">
            Real Transformations from <span className="text-primary">real men</span>
          </h2>
          <p className="text-xl text-foreground/80 font-sans">
            We have helped thousands of men get toned and change their body composition.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-10">
            {/* Left slide (blurred, clickable) */}
            <button 
              onClick={prevSlide}
              className="w-56 h-72 rounded-2xl overflow-hidden shadow-lg bg-card border border-border/20 opacity-50 blur-sm hover:opacity-70 transition-all cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-foreground/40 font-bold text-sm text-center">
                  {transformations[getSlideIndex(-1)].title}
                </span>
              </div>
            </button>

            {/* Center slide (focused) */}
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl bg-card border border-primary/30 scale-110">
              <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-foreground/40 font-bold text-xl text-center">
                  {transformations[currentSlide].title}
                </span>
              </div>
            </div>

            {/* Right slide (blurred, clickable) */}
            <button 
              onClick={nextSlide}
              className="w-56 h-72 rounded-2xl overflow-hidden shadow-lg bg-card border border-border/20 opacity-50 blur-sm hover:opacity-70 transition-all cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-foreground/40 font-bold text-sm text-center">
                  {transformations[getSlideIndex(1)].title}
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-6 rounded-full text-lg">
            SEE MORE REVIEWS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
