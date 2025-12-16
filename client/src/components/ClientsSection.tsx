"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import itcLogo from "@/assets/itc.png";
import hyundaiLogo from "@/assets/hyundai.png";
import tajLogo from "@/assets/taj.png";
import avantikaLogo from "@/assets/avantika.png";
import sadarManzilLogo from "@/assets/sadar-manzil.png";
import atulyaLogo from "@/assets/atulya.png";
import dilipLogo from "@/assets/dilip.png";
import kamadaLogo from "@/assets/kamada.png";
import sagarGroupLogo from "@/assets/sagar-group.png";
import healthWellnessLogo from "@/assets/SSS.png";

interface Logo {
  id: string;
  name: string;
  logo: string;
  className?: string;
}

const clients: Logo[] = [
  { id: "itc", name: "ITC Limited", logo: itcLogo, className: "h-12 w-auto" },
  { id: "hyundai", name: "Hyundai", logo: hyundaiLogo, className: "h-12 w-auto" },
  { id: "taj", name: "Taj Lakefront Bhopal", logo: tajLogo, className: "h-12 w-auto" },
  { id: "avantika", name: "Avantika", logo: avantikaLogo, className: "h-12 w-auto" },
  { id: "sadar-manzil", name: "Sadar Manzil Heritage", logo: sadarManzilLogo, className: "h-12 w-auto" },
  { id: "atulya", name: "Atulya IT Park", logo: atulyaLogo, className: "h-12 w-auto" },
  { id: "dilip", name: "Dilip Buildcon Limited", logo: dilipLogo, className: "h-12 w-auto" },
  { id: "kamada", name: "Kamada", logo: kamadaLogo, className: "h-12 w-auto" },
  { id: "sagar-group", name: "Sagar Group", logo: sagarGroupLogo, className: "h-12 w-auto" },
  { 
    id: "health-wellness", 
    name: "स्वास्थ्यं सर्वार्थ साधनम्", 
    logo: healthWellnessLogo, 
    className: "h-12 w-auto" 
  },
];

const ClientsSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  // Duplicate clients array for seamless infinite scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <section 
      ref={ref}
      className={`pt-12 pb-8 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4">
        <Carousel
          opts={{ 
            loop: true,
            align: "start",
            dragFree: false,
            containScroll: false,
          }}
          plugins={[
            AutoScroll({ 
              playOnInit: true,
              stopOnInteraction: false,
              speed: 0.8,
              direction: "forward",
              stopOnMouseEnter: false,
              stopOnFocusIn: false,
            })
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {duplicatedClients.map((client, index) => (
              <CarouselItem
                key={`${client.id}-${index}`}
                className={`flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 transition-all duration-700`}
              >
                <div className="px-2 flex items-center justify-center">
                  <div className={`transition-all duration-500 hover:scale-105 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`h-16 w-auto filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default ClientsSection;
