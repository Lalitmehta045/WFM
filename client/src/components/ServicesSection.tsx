import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { SectionBadge } from "./ui/section-badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceMechanized from "@/assets/service-mechanized.jpg";
import serviceDeepCleaning from "@/assets/service-deep-cleaning.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceFloorPolish from "@/assets/service-floor-polish.jpg";
import servicePestControl from "@/assets/service-pest-control.jpg";
import serviceFacilityManagement from "@/assets/service-facility-management.jpg";

const services = [
  {
    title: "Mechanized Housekeeping",
    image: serviceMechanized,
    description: "Advanced equipment and trained professionals for efficient daily maintenance.",
  },
  {
    title: "Deep Cleaning",
    image: serviceDeepCleaning,
    description: "Comprehensive cleaning solutions for spotless and hygienic spaces.",
  },
  {
    title: "Industrial Tank & Duct Cleaning",
    image: serviceIndustrial,
    description: "Specialized industrial cleaning with safety-first approach.",
  },
  {
    title: "Floor Polishing",
    image: serviceFloorPolish,
    description: "Professional floor care creating mirror-finish surfaces.",
  },
  {
    title: "Pest Control",
    image: servicePestControl,
    description: "Eco-friendly pest management for safe and healthy environments.",
  },
  {
    title: "Facility Management",
    image: serviceFacilityManagement,
    description: "Comprehensive facility solutions ensuring operational excellence and efficiency.",
  },
];

const ServicesSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section ref={sectionRef} id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="flex flex-col items-center">
            <SectionBadge>Our Services</SectionBadge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Expertise and Services
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wipeout Facility Management provides a wide range of smart, reliable, and eco-conscious services across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group overflow-hidden cursor-pointer scroll-bounce-in border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors duration-300 ease-in-out">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 group-hover:gap-2 transition-all duration-300 ease-in-out"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
