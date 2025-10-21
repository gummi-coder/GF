import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Transformations from "@/components/Transformations";
import Approach from "@/components/Approach";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Transformations />
      <Approach />
      <Method />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
