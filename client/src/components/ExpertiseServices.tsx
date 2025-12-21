import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { softServices, hardServices } from "@/data/servicesData";

const services = [...softServices.slice(0, 5), hardServices.find(s => s.id === "glass-facade-maintenance")].filter(Boolean);

const ExpertiseServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-10 sm:py-12 md:py-16 bg-background w-full overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Expertise & Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative h-64 sm:h-72 md:h-80 [perspective:1000px]" tabIndex={0}>
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] [-webkit-transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] shadow-lg overflow-hidden">
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center px-3 sm:px-4 drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] [-webkit-transform:rotateY(180deg)] shadow-lg bg-[#550000] flex items-center justify-center p-4 sm:p-6">
                  <div className="text-center flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 px-2">{service.title}</h3>
                      <p className="text-white text-xs sm:text-sm leading-relaxed px-2 mb-3 sm:mb-4">{service.shortDescription}</p>
                      {service.features && (
                        <div className="mb-2 sm:mb-3">
                          <p className="text-white/90 text-xs font-semibold mb-1">Key Features:</p>
                          <ul className="text-white/80 text-xs space-y-1 px-2">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <li key={idx} className="flex items-center justify-center">
                                <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => navigate(`/service/${service.id}`)}
                      className="inline-flex items-center px-4 py-2 bg-white text-[#550000] rounded-lg hover:bg-accent transition-all duration-200 text-sm font-medium mx-auto shadow-md hover:shadow-lg"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Services Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center px-8 py-3 bg-[#550000] text-white font-medium rounded-lg hover:bg-[#550000]/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            More Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseServices;
