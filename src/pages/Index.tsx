import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Transformations from "@/components/Transformations";
import Approach from "@/components/Approach";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="GF Training - Fjarþjálfun, Einkaþjálfun og Nærgangsþjálfun fyrir karla"
        description="Fjarþjálfun, einkaþjálfun og nærgangsþjálfun fyrir karla. Sérsniðin líkamsrækt, næringarráðleggingar og stuðningur. Hjálpum körlum að ná markmiðum sínum og verða besta útgáfan af sjálfum sér."
        keywords="fjarþjálfun, einkaþjálfun, nærgangsþjálfun, fjarþjálfun fyrir karla, einkaþjálfun fyrir karla, líkamsrækt, þjálfun, líkamsrækt fyrir karla, næringarráðleggingar, GF Training, Guðmundur Friðgeirsson"
        canonical="https://gftraining.is"
      />
      <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Transformations />
      <Approach />
      <Method />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
};

export default Index;
