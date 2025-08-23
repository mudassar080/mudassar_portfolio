import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Enhanced scroll detection for dynamic navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[var(--dark-bg)]/95 backdrop-blur-xl border-b border-[var(--neon-blue)]/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {/* Dynamic Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)]/90 via-[var(--dark-bg)]/85 to-[var(--dark-bg)]/90 transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-30'
          }`}
        />
        
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group relative transition-transform duration-300 hover:scale-105"
              onClick={() => scrollToSection("home")}
            >
              {/* Logo Container */}
              <div className="p-3 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-blue)] text-white shadow-2xl transform-gpu transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,247,255,0.5)]">
                <Code2 className="w-6 h-6" />
              </div>
              
              {/* Text */}
              <div className="text-lg md:text-xl lg:text-2xl font-bold gradient-text relative group">
                Mudassar
                {/* Animated Underline */}
                <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] transition-all duration-300 group-hover:w-full w-0" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl transform-gpu ${
                    activeSection === item.id
                      ? "text-[var(--neon-blue)] bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/40 shadow-lg shadow-[var(--neon-blue)]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                  }`}
                >
                  {item.label}
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-blue)] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white z-50 relative rounded-xl hover:bg-white/10 transition-all duration-300 transform-gpu hover:shadow-lg hover:shadow-white/10"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } absolute top-full left-0 right-0 bg-[var(--dark-bg)]/95 backdrop-blur-xl border-t border-[var(--neon-blue)]/30 shadow-2xl rounded-b-2xl`}>
            <div className="py-6 space-y-3 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl transform-gpu ${
                    activeSection === item.id
                      ? "text-[var(--neon-blue)] bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/40 shadow-lg shadow-[var(--neon-blue)]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 