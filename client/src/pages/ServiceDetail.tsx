import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, Shield, Award, Star, Zap, TrendingUp, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServiceById } from "@/data/servicesData";

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = serviceId ? getServiceById(serviceId) : undefined;

  const description = service?.shortDescription ?? "";
  const overview = service?.overview ?? service?.shortDescription ?? "";
  const features = service?.features ?? [];
  const benefits = service?.benefits ?? [];
  const process = service?.process ?? [];
  const timeline = service?.timeline ?? "Project timeline varies by scope";
  const team = service?.team ?? "Deployment team as per site requirements";
  const certification = service?.certification ?? "Standard safety & quality compliance";

  const hasFeatures = features.length > 0;
  const hasBenefits = benefits.length > 0;
  const hasFeaturesOrBenefits = hasFeatures || hasBenefits;
  const hasProcess = process.length > 0;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/services")}
            className="text-primary hover:underline"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/8 via-background to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <button
                onClick={() => navigate("/services")}
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-200 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Services
              </button>
              
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  <Star className="mr-2 h-4 w-4" />
                  Premium Service
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  {service.title}
                  <span className="block text-3xl md:text-4xl text-primary mt-2">Excellence Delivered</span>
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/#contact")}
                  className="group inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("/#contact")}
                  className="inline-flex items-center px-8 py-4 border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 rounded-xl font-medium"
                >
                  Schedule Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fast Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Certified Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-[500px] bg-muted" />
                )}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Service Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {overview}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      {hasFeaturesOrBenefits && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {hasFeatures && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hasBenefits && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="mr-3 h-6 w-6 text-primary" />
                    Benefits
                  </h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {hasProcess && (
        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Process</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Details */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h3 className="text-2xl font-bold text-foreground">Service Delivery Overview</h3>
            <p className="text-muted-foreground mt-2">
              Key delivery parameters and compliance information for this service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Service Timeline</h4>
              <p className="text-muted-foreground text-sm">{timeline}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Deployment Team</h4>
              <p className="text-muted-foreground text-sm">{team}</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Compliance & Safety</h4>
              <p className="text-muted-foreground text-sm">{certification}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-5 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation and discover how our {service.title} service can benefit your facility.
          </p>
          <button
            onClick={() => navigate("/#contact")}
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-accent transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
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

export default ServiceDetail;
