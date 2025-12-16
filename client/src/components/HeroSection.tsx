import heroImage from "@/assets/HeroSection.png";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 40);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden min-h-[40vh] md:min-h-[60vh] lg:min-h-screen transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 mb-4">
        {/* Background Image */}
        <div className="relative w-full h-full overflow-hidden rounded-lg transition-transform duration-1000">
          <img
            src={heroImage}
            alt="Hero Section"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;