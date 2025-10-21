import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      text: "GF Training has taken the guesswork out weight loss and strength building. Instead of taking time to build my own workouts and learn how to adjust my diet, I instead have a coach who helps me, provides feedback, and keeps me accountable. The results have been incredible in just my first 4 months. I am consistently building muscle, losing weight, increasing my endurance, and regaining energy. The program is sustainable, I am eating my favorite foods, and the amount of time spent in workouts easily fits into my schedule.",
      author: "Karen C.",
      highlight: "GF Training took out the guesswork",
    },
    {
      text: "They follow through on what they promise—education, nutrition and workout program to create a healthy and sustainable lifestyle. As a man with hormone changes they knew exactly what to focus on, what coach to match me with and I started seeing results almost immediately. The support you receive is unsurpassed. Educated coaches and a community to help support you as well. Highly recommend!",
      author: "Melisa S.",
      highlight: "Outstanding and solid program",
    },
    {
      text: "You have actual one-on-one sessions with your coach, your workouts are tailored to you, and you are supported and encouraged the whole journey. It teaches you reasonable expectations, it heals your metabolism, and makes you stronger. If you are consistent and do the work, it works.",
      author: "Layla S.",
      highlight: "Real 1:1 coaching, real results",
    },
    {
      text: "I'm 60 years old and this is the first program that has really helped me make changes since menopause. They treat their clients like family. You're able to communicate with your coach daily, and the diet is just counting macros. You pick what goes into your body based on the science.",
      author: "Yvonne R.",
      highlight: "This program really works, even post-menopause",
    },
    {
      text: "Adding GF Training to my life added the missing piece(s)—nutrition, coaching, and accountability. Having a coach to guide me through workouts and teach me how to follow macronutrients has been the missing link. My body composition, appearance and confidence have improved significantly, and most importantly, my overall lifestyle and eating habits have changed in a way that I can maintain for life.",
      author: "Lisa F.",
      highlight: "Life-changing results I can maintain",
    },
    {
      text: "This has been the most incredible journey! Best decision I ever made, for myself was to get a coach inside this program and completely transform my body in perimenopause when I didn't think it was possible. The support, the customization, and overall the entire journey has been life-changing!",
      author: "Shannon P.",
      highlight: "Best decision I ever made",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary text-lg font-bold mb-4 font-sans">Read Client Stories</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Star Rating */}
          <div className="lg:sticky lg:top-24 pt-8">
            <div className="text-center">
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-8 h-8 fill-star text-star" />
                ))}
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6 font-display">
                <span className="text-primary">4.9/5 Stars</span>
                <br />
                <span className="text-foreground">from</span>
                <br />
                <span className="text-primary">1,500+ reviews</span>
              </h2>
              
              <p className="text-xl text-foreground/80 font-sans mb-8 leading-relaxed">
                Read why thousands of clients love GF Training and how it helped them get toned & feel confident in their skin!
              </p>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                See all success stories
              </Button>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="break-inside-avoid bg-card border border-border/20 rounded-2xl p-8 shadow-lg shadow-white/20 backdrop-blur-sm mb-6">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#ffc800] text-[#ffc800]" />
                  ))}
                </div>
                
                {/* Headline Quote */}
                <h3 className="font-bold text-lg mb-4 font-display text-primary">
                  "{testimonial.highlight}"
                </h3>
                
                {/* Body Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 font-sans font-medium">
                  "{testimonial.text}"
                </p>
                
                {/* Author Name */}
                <p className="text-foreground/60 font-sans text-sm">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="text-center py-16 mt-20">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-display leading-tight max-w-5xl mx-auto">
            "joining GF Training has been the best gift to me, and everyone around me. 
            <br />
            <span className="text-primary">I feel so much younger, energetic & stronger"</span>
          </p>
          <p className="text-foreground/70 font-sans text-2xl mb-8">- GF Training Member Jill</p>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-7 rounded-full text-xl shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            onClick={() => window.location.href = 'http://localhost:8082/apply'}
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
