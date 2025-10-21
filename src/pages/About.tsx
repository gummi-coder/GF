import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "5,000+", label: "Men Transformed", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "GF Ambassadors", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "GF Team Members", icon: <Users className="w-8 h-8" /> },
  ];

  const timeline = [
    {
      year: "2016",
      title: "The Garage Gym Era",
      description: "A bold vision started. While working in the ER and training for a pro bodybuilding show, GF started coaching coworkers out of a garage. This early hands-on experience laid the foundation for what would become a transformative approach to men's fitness — rooted in strength, science, and empowerment."
    },
    {
      year: "2017",
      title: "Blending Online and In-Person Expertise",
      description: "As demand grew, GF evolved into a hybrid model, combining in-person coaching with an online presence. This marked the start of delivering expert-level fitness and nutrition strategies on a larger scale, helping more men achieve their goals with proven results."
    },
    {
      year: "2018",
      title: "The Birth of GF Training",
      description: "The GF Training Blueprint was born, setting a new standard in fitness education. This program empowered men with the tools and knowledge to transform their health for life. The establishment of GF Training signaled the start of a movement, establishing expertise in personalized fitness solutions for men."
    },
    {
      year: "2019",
      title: "Innovation and Experimentation",
      description: "GF Training solidified its position as a leader in fitness education, testing and refining new programs to ensure the best client outcomes with unmatched support in the space. Through strategic innovation, the company expanded its reach and impact while maintaining its core commitment to delivering unmatched expertise."
    },
    {
      year: "2020",
      title: "Thriving Through Adversity",
      description: "As the world faced unprecedented challenges, GF Training stepped up to deliver strength and stability to its growing community. The release of version 2 of the GF Training Blueprint provided men with actionable strategies to stay consistent and healthy, even at home. This year solidified the GF Method as an essential resource for men navigating their health journeys."
    },
    {
      year: "2021",
      title: "Elevating the Client Experience",
      description: "This year, GF Training introduced its VIP Coaching Program, providing an elite 1:1 coaching experience based on the GF Method. We started to welcome the best of the best personal trainers to our team. The program expanded the brand's ability to deliver tailored solutions for men navigating life transitions."
    },
    {
      year: "2022",
      title: "Redefining Fitness Education",
      description: "The release of GF Training Blueprint version 3 showcased our commitment to delivering cutting-edge education in fitness and nutrition. The GF Method was integrated into high-quality video content and expanded onto YouTube, growing GF Training's reach and establishing it as a trusted authority for men."
    },
    {
      year: "2023",
      title: "Breaking Records, Changing Lives",
      description: "GF Training launched The GF Hour podcast, bringing the GF Method to a larger audience with expert advice on fitness, nutrition, and mindset. The podcast stayed in the top 10 fitness podcasts and featured big-name guests and leading experts in the space. The VIP program was revamped to set a new standard for personalized coaching."
    },
    {
      year: "2024",
      title: "Revolutionizing Men's Health",
      description: "GF Training partnered with leading health companies to integrate advanced insights into its programs, creating a truly personalized approach to fitness and nutrition. This partnership brought a new dimension to the GF Method, addressing every facet of a man's health. With its innovative strategies and industry-leading products, GF Training continues to transform lives and lead the fitness space for men."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 font-display">
            <span className="text-primary">About</span>{" "}
            <span className="text-foreground">GF Training</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            GF Training is a results-driven company empowering men through personalized fitness, nutrition, and education. 
            With online programs, world-class coaching, and community support, we help men take control of their health 
            and achieve life-changing transformations.
          </p>

          <p className="text-lg text-foreground/70 max-w-4xl mx-auto mb-16 leading-relaxed">
            Founded by GF and later joined by partners, GF Training has grown into a movement trusted by thousands of men worldwide. 
            We are on a mission to help men regain their personal power and feel confident in their skin.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
                <span className="text-foreground">Our Mission</span>
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Since we started in 2016, our mission has been to transform lives.
              </p>
              <p className="text-xl text-foreground/90 font-bold mb-8">
                <span className="text-primary">Our goal is to empower men</span>{" "}
                <span className="text-foreground">to build strength, confidence, and</span>{" "}
                <span className="text-foreground">a body they love at any</span>{" "}
                <span className="text-foreground">stage of life.</span>
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <span className="font-bold text-foreground">To become the ultimate solution for men seeking strength, confidence, and lasting transformation.</span>
              </p>
              <p className="text-foreground/70 mt-4">
                Imagine everything you need — fitness, nutrition, education, and support — under one roof, tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">
              <span className="text-foreground">Our Story</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              A journey of transformation, innovation, and helping men achieve their best selves.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="text-4xl font-black text-primary mb-2">{item.year}</div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display">
            <span className="text-foreground">Ready to Start Your</span>{" "}
            <span className="text-primary">Transformation Journey?</span>
          </h2>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Join thousands of men who have already transformed their lives with GF Training. 
            Your journey to a stronger, more confident you starts today.
          </p>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            START YOUR JOURNEY
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
