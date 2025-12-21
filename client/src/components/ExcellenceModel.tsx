import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";
import icon4 from "@/assets/icon4.svg";
import icon5 from "@/assets/icon5.svg";
import icon6 from "@/assets/icon6.svg";
import icon7 from "@/assets/icon7.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const excellence = [
  { icon: icon1, label: "Safety" },
  { icon: icon2, label: "Cost Reduction" },
  { icon: icon3, label: "Monitoring" },
  { icon: icon4, label: "Coordination" },
  { icon: icon5, label: "Reliability" },
  { icon: icon6, label: "Excellence" }
];

const OperationalExcellence = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto w-full overflow-x-hidden px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
          <h2 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground">
            Supreme Operational Excellence Model
          </h2>
        </div>
        
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-y-8 lg:gap-x-10">
          {excellence.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img 
                src={item.icon} 
                alt={item.label}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4"
              />
              <p className="text-xs sm:text-sm font-semibold text-primary text-center px-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationalExcellence;
