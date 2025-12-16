import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  Briefcase,
  Cpu,
  Users,
  Leaf,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Efficient Operations",
    description: "Streamlined processes for maximum productivity",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Strategic growth and partnership opportunities",
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    description: "Smart solutions powered by latest innovations",
  },
  {
    icon: Users,
    title: "People Empowerment",
    description: "Skilled workforce committed to excellence",
  },
  {
    icon: Leaf,
    title: "Sustainability Practices",
    description: "Eco-conscious methods protecting our environment",
  },
  {
    icon: Shield,
    title: "Safety Standards",
    description: "Industry-leading safety protocols",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality control at every step",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover-lift group border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
