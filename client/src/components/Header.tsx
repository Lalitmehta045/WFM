import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@/assets/Wipeoutlogo2.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashLink = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md`}
      >
        <div className="container mx-auto max-w-[1200px]">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick();
              }}
              className="flex items-center h-[50px]"
            >
              <img
                src={logoImage}
                alt="Wipeout Facility Management Logo"
                className="h-[60px] w-auto object-contain scale-125"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleHomeClick();
                }}
                className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashLink("#services");
                }}
                className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashLink("#gallery");
                }}
                className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                Gallery
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleHashLink("#contact");
                }}
                className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </a>

              {/* More Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="px-3 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 outline-none"
                >
                  More
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => handleHashLink("#whyus")}
                    className="cursor-pointer"
                  >
                    Why Us
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleHashLink("#testimonials")}
                    className="cursor-pointer"
                  >
                    Testimonials
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => handleHashLink("#news")}
                    className="cursor-pointer"
                  >
                    Blogs
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="hero"
                size="lg"
                className="mr-10 font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
                onClick={() => handleHashLink("#contact")}
              >
                Enquire Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-slide-up">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHomeClick();
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLink("#services");
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLink("#gallery");
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashLink("#contact");
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-md transition-colors"
                >
                  Contact
                </a>
                <div className="px-4 py-2">
                  <span className="text-sm font-medium text-foreground/80">More:</span>
                  <div className="mt-2 space-y-1">
                    <a
                      href="#whyus"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHashLink("#whyus");
                      }}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      Why Us
                    </a>
                    <a
                      href="#testimonials"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHashLink("#testimonials");
                      }}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      Testimonials
                    </a>
                    <a
                      href="#news"
                      onClick={(e) => {
                        e.preventDefault();
                        handleHashLink("#news");
                      }}
                      className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      Blogs
                    </a>
                  </div>
                </div>
                <div className="px-4 pt-2">
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => handleHashLink("#contact")}
                  >
                    Enquire Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
