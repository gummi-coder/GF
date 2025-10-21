import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      question: "How do I get started with GF Training?",
      answer: "Getting started is easy! Simply click the 'APPLY NOW' button on our website, fill out the application form, and our team will contact you within 24 hours to discuss your goals and match you with the perfect coach."
    },
    {
      question: "What makes GF Training different from other fitness programs?",
      answer: "GF Training offers personalized 1-on-1 coaching, custom nutrition plans, and a supportive community. Our coaches are certified professionals who work with you to create a sustainable plan that fits your lifestyle and goals."
    },
    {
      question: "How much does the program cost?",
      answer: "Our pricing varies depending on the program you choose. We offer different packages to fit various budgets and goals. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "Do I need any special equipment?",
      answer: "No special equipment is required! Our programs are designed to work with whatever you have available, whether that's a full gym, home equipment, or just bodyweight exercises. Your coach will adapt your workouts to your available resources."
    },
    {
      question: "How often will I communicate with my coach?",
      answer: "You'll have regular check-ins with your coach, typically weekly or bi-weekly depending on your program. Plus, you'll have 24/7 support through our app, so you can ask questions anytime."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! Our programs are designed for all fitness levels, from complete beginners to advanced athletes. Your coach will start where you are and progress you at the right pace for your body and goals."
    },
    {
      question: "Can I pause or cancel my membership?",
      answer: "Yes, we offer flexible membership options. You can pause your membership for up to 3 months or cancel with 30 days notice. We want you to succeed, so we'll work with you to find the best solution."
    },
    {
      question: "Do you offer nutrition coaching?",
      answer: "Absolutely! Nutrition is a core part of our program. Your coach will create a personalized nutrition plan based on your goals, preferences, and lifestyle. We focus on sustainable habits that you can maintain long-term."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">Hafa samband</span>{" "}
            <span className="text-foreground">við okkur</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Ready to start your transformation journey? We're here to help you every step of the way. 
            Get in touch with our team and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 font-display">
                <span className="text-foreground">Send us a message</span>
              </h2>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Your first name" 
                        className="bg-background/50 border-border/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Your last name" 
                        className="bg-background/50 border-border/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-background/50 border-border/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone (Optional)</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="bg-background/50 border-border/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What can we help you with?" 
                      className="bg-background/50 border-border/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your goals and how we can help you..."
                      className="bg-background/50 border-border/20 min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-full text-lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 font-display">
                <span className="text-foreground">Contact Information</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                    <p className="text-foreground/80">support@gftraining.com</p>
                    <p className="text-foreground/60 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/80">+1 (555) 123-4567</p>
                    <p className="text-foreground/60 text-sm">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                    <p className="text-foreground/80">Online Worldwide</p>
                    <p className="text-foreground/60 text-sm">Serving clients globally</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Live Chat</h3>
                    <p className="text-foreground/80">Available on our website</p>
                    <p className="text-foreground/60 text-sm">Get instant answers to your questions</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose GF Training?</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Personalized 1-on-1 coaching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Custom nutrition plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and accountability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven results with thousands of clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Frequently Asked</span>{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Find answers to the most common questions about GF Training programs and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ready to Start Your</span>{" "}
            <span className="text-primary">Transformation?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Don't wait another day to start your journey to a stronger, more confident you. 
            Our team is ready to help you achieve your goals.
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

export default Contact;
