import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { toast } = useToast();
  const [ref, isVisible] = useScrollAnimation(0.1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  // ---------------- HANDLE SUBMIT (MAKE.COM WEBHOOK) ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL || 
        "https://hook.us2.make.com/5gs38gnwq3su3v06os69cdughqrp5p4c";
      
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        }),
      });

      // Better error handling
      if (!res.ok) {
        const errorText = await res.text().catch(() => "Unknown error");
        console.error("Webhook Error:", {
          status: res.status,
          statusText: res.statusText,
          response: errorText,
          url: webhookUrl,
        });
        throw new Error(`Webhook failed: ${res.status} ${res.statusText}`);
      }

      const responseData = await res.json().catch(() => ({}));
      console.log("Webhook Success:", responseData);

      toast({
        title: "Message Sent",
        description: "Your message has been delivered successfully!",
      });

      // Reset form
      setFormData({ name: "", email: "", mobile: "", message: "" });

    } catch (error) {
      console.error("Contact Form Error:", error);
      
      // More detailed error message
      let errorMessage = "Unable to send your message. Please try again later.";
      
      if (error instanceof TypeError && error.message.includes("fetch")) {
        errorMessage = "Network error: Unable to connect. Please check your internet connection.";
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`;
      }
      
      toast({
        title: "Send Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  // ---------------- INPUT CHANGE ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- UI SECTION ----------------
  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-16 bg-background/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or ready to book our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* ---------------- FORM ---------------- */}
          <Card className={`w-full p-4 sm:p-6 md:p-8 shadow-xl transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                  Mobile
                </label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91-9876543210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your facility management needs..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </Button>

            </form>
          </Card>

          {/* ---------------- CONTACT INFO ---------------- */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              
              <Card className="w-full p-4 sm:p-5 md:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Address</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=101%2C+Vansh+Complex%2C+11+Mill%2C+Bhopal%2C+Madhya+Pradesh%2C+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:underline leading-relaxed"
                    >
                      101, Vansh Complex, 11 Mill,
                      <br />
                      Bhopal, Madhya Pradesh, India
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="w-full p-4 sm:p-5 md:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Phone</h3>
                    <a href="tel:+918827796766" className="text-sm sm:text-base text-muted-foreground hover:underline">
                      +91-8827796766
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="w-full p-4 sm:p-5 md:p-6 hover-lift">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">Email</h3>
                    <a href="mailto:support@wipeoutmanagement.com" className="text-sm sm:text-base text-muted-foreground hover:underline break-words">
                      support@wipeoutmanagement.com
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="w-full overflow-hidden shadow-xl">
              <div className="relative w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.56992811164!2d77.3113226!3d23.2599333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1647000000000!5m2!1sen!2sin"
                  className="w-full h-[250px] sm:h-[280px] md:h-[320px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wipeout Facility Management Location"
                ></iframe>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
