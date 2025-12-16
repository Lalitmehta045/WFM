import { Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import wipeoutLogo from "@/assets/Wipeoutlogo2.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Appointment", href: "#contact" },
    { name: "News & Blogs", href: "#news" },
    { name: "Resources", href: "#resources" },
    { name: "Career", href: "#careers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo + About */}
          <div className="lg:col-span-2">
            <img 
              src={wipeoutLogo} 
              alt="Wipeout Facility Management" 
              className="h-16 mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />

            <p className="text-gray-300 leading-relaxed max-w-lg mb-8">
              Premier provider of smart, reliable, and eco-conscious facility
              services across India. Delivering excellence with commitment.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/wipeout-facility-management-pvt-ltd/"
                target="_blank"
                                className="group p-3 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579390030170"
                target="_blank"
                                className="group p-3 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/wipeoutfacility/"
                target="_blank"
                                className="group p-3 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg backdrop-blur-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">More</h3>
            <ul className="space-y-3">
              {quickLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                                        className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="font-semibold text-white">Wipeout Facility Management Pvt. Ltd.</span>  
                — All Rights Reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Designed & Developed by{" "}
                <a 
                  href="https://buildview-infotech12.netlify.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-gray-200 transition-colors duration-300"
                >
                  BuildView InfoTech
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
