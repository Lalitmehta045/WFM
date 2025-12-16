import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ExcellenceModel from "@/components/ExcellenceModel";
import ExpertiseServices from "@/components/ExpertiseServices";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <main className="pt-0 lg:pt-0 w-full overflow-x-hidden">
        <ClientsSection />
        <ExcellenceModel />
        <ExpertiseServices />
        <AchievementsSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
