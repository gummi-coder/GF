import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Clock, Target, Award, Lock, Smartphone, Utensils, Brain, BarChart3 } from "lucide-react";

const Pricing = () => {
  const testimonials = [
    {
      name: "Jón Þór",
      age: "34",
      result: "Lost 15kg in 3 months",
      text: "The 3-month program was perfect for my goals. My coach understood exactly what I needed to achieve my dream physique."
    },
    {
      name: "Einar",
      age: "28", 
      result: "Gained 8kg muscle in 6 months",
      text: "The 6-month program gave me the time and support I needed to build lasting habits and see real results."
    },
    {
      name: "Guðmundur",
      age: "41",
      result: "Transformed his body composition",
      text: "At 41, I thought it was too late to get in shape. GF Training proved me wrong - I'm in the best shape of my life."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* 1️⃣ Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-foreground">Choose Your</span>{" "}
            <span className="text-primary">Coaching Path</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Whether you want a complete transformation or long-term guidance, there's a plan built for you.
          </p>

          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            All coaching plans include app access, personalized training, and nutrition support.
          </p>
        </div>
      </section>

      {/* 2️⃣ Tiered Pricing Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Tier */}
            <Card className="bg-card/30 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-foreground/80 mb-2">
                  Basic
                </CardTitle>
                <p className="text-foreground/60 text-sm">3-Month Transformation</p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-foreground mb-2">40,000 ISK</div>
                  <div className="text-foreground/60 text-sm">per month</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Personalized training plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Nutrition guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Bi-weekly check-ins</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">App access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Goal review call</span>
                  </div>
                </div>

                 <Button 
                   className="w-full bg-secondary/20 hover:bg-secondary/30 text-secondary-foreground font-bold py-4 rounded-lg border border-secondary/30 transition-all"
                   onClick={() => window.location.href = '/signup'}
                 >
                   Get Started
                 </Button>
              </CardContent>
            </Card>

            {/* Pro Tier - Most Popular */}
            <Card className="bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/50 relative scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>
              
              <CardHeader className="text-center pb-6 pt-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  Pro
                </CardTitle>
                <p className="text-foreground/60 text-sm">6-Month Coaching</p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">33,000 ISK</div>
                  <div className="text-foreground/60 text-sm">per month</div>
                  <div className="text-primary text-sm font-medium mt-1">Save 10% with 6-month commitment</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Everything in Basic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Long-term habit building</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Standard chat support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Lifestyle tracker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Monthly progress reviews</span>
                  </div>
                </div>

                 <Button 
                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all hover:scale-105"
                   onClick={() => window.location.href = '/signup'}
                 >
                   Get Started
                 </Button>
              </CardContent>
            </Card>

            {/* VIP Tier - Application Only */}
            <Card className="bg-card/30 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  VIP
                </CardTitle>
                <p className="text-foreground/60 text-sm">Premium Coaching</p>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mt-2">
                  Limited Spots
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">Application</div>
                  <div className="text-foreground/60 text-sm">Only</div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Everything in Pro</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Weekly video calls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Unlimited priority support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">1:1 Kickstart call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">Mindset coaching</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all hover:scale-105"
                  onClick={() => window.location.href = 'http://localhost:8082/apply'}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3️⃣ What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">What's Included in</span>{" "}
              <span className="text-primary">Every Plan</span>
            </h2>
            <p className="text-lg text-foreground/80">
              This builds perceived value before people judge the price.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Training plan tailored to your goal</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Utensils className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Meal plan or macro guidance</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">App access with exercise demos</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Accountability check-ins</h3>
            </div>
            
            <div className="text-center">
              <div className="text-primary mb-4 flex justify-center">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Progress tracking & habit system</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Real Results From</span>{" "}
              <span className="text-primary">Real Clients</span>
            </h2>
            <p className="text-lg text-foreground/80">
              These are everyday people who decided to commit — just like you can.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-star text-star" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border/20 pt-4">
                    <div className="font-bold text-foreground">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-primary text-sm font-medium">{testimonial.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-display">
                <span className="text-foreground">Ready to start your</span>{" "}
                <span className="text-primary">coaching journey?</span>
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Choose the program that fits your timeline and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-full">
                  Start 3-Month Coaching
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-full">
                  Start 6-Month Coaching
                </Button>
              </div>
            </div>

            {/* Right CTA */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-display">
                <span className="text-foreground">Want the full</span>{" "}
                <span className="text-primary">VIP experience?</span>
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Apply for our most exclusive coaching program with limited spots available.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-primary/50 transition-all hover:scale-105">
                Apply for VIP Coaching
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;