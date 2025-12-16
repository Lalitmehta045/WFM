import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hardServices, softServices } from "@/data/servicesData";

const AllServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Our Complete Service Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Professional Services for
              <span className="text-primary"> Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive range of facility management services designed to meet the highest standards of quality, efficiency, and environmental responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center px-6 py-3 border border-border hover:bg-accent transition-all duration-200 rounded-lg font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
              <button
                onClick={() => navigate("/#contact")}
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Offerings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete portfolio. Click any service to view full details.
            </p>
          </div>

          {/* Hard Services */}
          <div className="mb-14">
            <div className="flex flex-col items-start gap-2 mb-6">
              <h3 className="text-2xl font-bold text-foreground">Hard Services</h3>
              <p className="text-muted-foreground">
                Specialized cleaning and workplace care solutions.
              </p>
            </div>
            <div className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {hardServices.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => navigate(`/service/${service.id}`)}
                      className="text-left w-full inline-flex items-start gap-3 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <span className="mt-2 inline-block w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="font-medium leading-relaxed">{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Soft Services */}
          <div>
            <div className="flex flex-col items-start gap-2 mb-6">
              <h3 className="text-2xl font-bold text-foreground">Soft Services</h3>
              <p className="text-muted-foreground">
                Specialized cleaning and workplace care solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => navigate(`/service/${service.id}`)}
                  className="group text-left bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                      <div className="w-14 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="mt-5 inline-flex items-center text-primary font-medium">
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation and discover how our professional services can transform your facility management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-white/80">
              <Phone className="mr-2 h-5 w-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center text-white/80">
              <Mail className="mr-2 h-5 w-5" />
              <span>info@wipeoutfacility.com</span>
            </div>
            <div className="flex items-center text-white/80">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Pan India Service</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/#contact")}
            className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AllServices;
