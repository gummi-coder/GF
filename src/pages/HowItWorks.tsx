import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Users, MessageCircle, Clock, Smartphone, Target, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const transformations = [
    { id: 1, title: "Mike's Journey" },
    { id: 2, title: "David's Transformation" },
    { id: 3, title: "John's Success" },
    { id: 4, title: "Chris's Results" },
    { id: 5, title: "Alex's Progress" },
    { id: 6, title: "Ryan's Achievement" },
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

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated 1-on-1 Coach",
      description: "Every GF Training member gets a personal coach certified in both nutrition and fitness, ensuring you receive expert guidance tailored to your goals.",
      benefits: [
        "Your coach monitors your progress, adjusts your plan as needed, and helps you stay accountable throughout your fitness journey.",
        "Whether you're aiming for fat loss, strength gains, or overall health improvements, your coach creates a roadmap designed just for you.",
        "Monthly check-ins allow you to refine your strategy with your coach, ensuring your plan evolves with your progress."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "1-on-1 Coaching",
      description: "Monthly check-ins allow you to refine your strategy with your coach, ensuring your plan evolves with your progress.",
      benefits: [
        "Adjust your macros, workouts, and habits to match your changing needs and keep your results on track.",
        "Celebrate milestones, tackle challenges, and get personalized feedback to maintain momentum.",
        "Biweekly group calls with your coach and a small group of members provide support and accountability."
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Huddles",
      description: "Biweekly group calls with your coach and a small group of members provide support and accountability.",
      benefits: [
        "Share your victories, ask questions, and get tips to stay aligned with your macros, workouts, and mindset.",
        "Learn from others' experiences and feel inspired by a community of like-minded men pursuing similar goals.",
        "Join three mindset-focused calls each month, where GF Training founder shares strategies to simplify and enhance your fitness journey."
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Weekly Community Calls",
      description: "Join three mindset-focused calls each month, where GF Training founder shares strategies to simplify and enhance your fitness journey.",
      benefits: [
        "Once a month, participate in a roundtable call centered on mastering advanced macro techniques for optimal results.",
        "These calls help you stay motivated, develop new skills, and deepen your understanding of fitness and nutrition.",
        "Have a question or need guidance? Your coach is just a message away."
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Have a question or need guidance? Your coach is just a message away.",
      benefits: [
        "Send private questions anytime and receive a reply within 24 hours to stay on track.",
        "Your communication with your coach is confidential, so you can feel comfortable discussing anything.",
        "Log your workouts, track weights and reps, and measure your progress—all in one place."
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "GF Training App",
      description: "Log your workouts, track weights and reps, and measure your progress—all in one place.",
      benefits: [
        "Access a library of exercise demo videos to ensure proper form and maximize results.",
        "Your coach updates your plans directly through the app, keeping everything streamlined and easy to follow.",
        "Track your macros, workouts, and progress with our comprehensive tracking system."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">A CLEAR, SUSTAINABLE PATH</span>{" "}
            <span className="text-foreground">TO BUILDING & KEEPING</span>
            <br />
            <span className="text-foreground">YOUR DREAM BODY COMPOSITION</span>
            <br />
            <span className="text-primary">— FOR LIFE</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Real 1:1 Personal Coach</h3>
              <p className="text-foreground/80">Work with a dedicated coach who understands your goals and creates a personalized plan just for you.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Custom Tailored Nutrition</h3>
              <p className="text-foreground/80">Get your macronutrients calculated and adjusted based on your progress and changing needs.</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Workouts Crafted For You</h3>
              <p className="text-foreground/80">Receive custom workout plans designed specifically for your fitness level and goals.</p>
            </div>
          </div>

          <p className="text-lg text-foreground/80 max-w-4xl mx-auto mb-12">
            The GF Training VIP is a 1:1 personal training 12-month program tailored specifically to you. 
            Work with a coach to get your macronutrients, exercises, adjustments, etc., and reach your desired body goal.
          </p>

          {/* Progress Photos Slideshow */}
          <div className="mb-16">
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
          </div>

           <Button 
             size="lg"
             className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
             onClick={() => window.location.href = 'http://localhost:8082/apply'}
           >
             APPLY NOW
           </Button>
        </div>
      </section>

      {/* How It Works Section - Similar to Testimonials Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary text-lg font-bold mb-4 font-sans">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Here's How It Works</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              To change your body composition and change your life, education is not enough, you need an immersive environment. 
              GF Training VIP provides proven process, mental reprogramming, community and expert mentorship that make transformation inevitable...
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Photo/Content that scrolls */}
            <div className="lg:sticky lg:top-24 pt-8">
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-8 h-8 fill-star text-star" />
                  ))}
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                  <span className="text-primary">Proven</span>
                  <br />
                  <span className="text-foreground">Method</span>
                </h2>
                
                <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                  Our step-by-step process has helped thousands of men achieve their dream body composition and maintain it for life.
                </p>

                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                  Start Your Journey
                </Button>
              </div>
            </div>

            {/* Right side - Large text content */}
            <div className="space-y-12">
              {features.map((feature, i) => (
                <div key={i} className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-2xl font-display text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-foreground/90 text-lg leading-relaxed font-sans">
                    {feature.description}
                  </p>
                  
                  {/* Benefits List */}
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-4">
                        <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-foreground/80 text-base leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">GF Training Has</span>{" "}
              <span className="text-primary">Proven Results</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              Does GF Training work? There's only one way to find out, by seeing whether our students actually had success.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-primary/10 shadow-2xl group cursor-pointer">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                  <Button
                    size="lg"
                    className="relative bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-24 h-24 group-hover:scale-110 transition-transform"
                  >
                    <Target className="w-12 h-12 fill-current" />
                  </Button>
                </div>
              </div>
              
              {/* Video Label */}
              <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-lg">
                GF TRAINING RESULTS
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-foreground/80 mb-8">
              <span className="font-bold text-foreground">Based on 1,500+ Reviews</span> from real clients who have transformed their lives
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Are You Ready To</span>{" "}
            <span className="text-primary">Get In Control Of Your Body</span>{" "}
            <span className="text-foreground">& The Way It Looks</span>
            <br />
            <span className="text-foreground">For The Rest Of Your Life?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Because of our strict requirements for hiring new world class, overqualified coaches,{" "}
            <span className="font-bold text-foreground">we only have so many openings available at any given time.</span>
          </p>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            If you're ready to see if you qualify, just fill out the short 2 to 3-minute application below and book a time to chat with someone from our team.
            <br />
            <br />
            A new future you, is waiting for you...{" "}
            <span className="font-bold text-primary">Step into him today.</span>
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            onClick={() => window.location.href = 'http://localhost:8082/apply'}
          >
            APPLY NOW
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;