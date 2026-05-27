import SEOHead from "../components/SEOHead";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <SEOHead
        title="R.K Tech Crush | Digital Agency — SEO, Web Dev & Lead Generation"
        description="R.K Tech Crush is a premium digital agency in Ahmedabad offering SEO, web development, WhatsApp marketing, LinkedIn marketing, and social media growth. Grow • Rank • Succeed."
        keywords="digital agency Ahmedabad, SEO services, web development, WhatsApp marketing, LinkedIn marketing"
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
