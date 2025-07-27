import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      {/* Enhanced Background Overlay with Blur Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Enhanced Navigation Bar with Dynamic Background */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[var(--dark-bg)]/95 backdrop-blur-xl border-b border-[var(--neon-blue)]/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {/* Dynamic Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[var(--dark-bg)]/90 via-[var(--dark-bg)]/85 to-[var(--dark-bg)]/90"
          animate={{
            opacity: scrolled ? 1 : 0.3,
          }}
          transition={{ duration: 0.5 }}
        />
        
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo with 3D Effects */}
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                rotateY: [0, 10, -10, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer group relative"
              onClick={() => scrollToSection("home")}
            >
              {/* Enhanced Logo Container with 3D Shadow */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  boxShadow: [
                    "0 0 20px rgba(0, 247, 255, 0.3)",
                    "0 0 40px rgba(0, 247, 255, 0.5)",
                    "0 0 20px rgba(0, 247, 255, 0.3)"
                  ]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="p-3 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-blue)] text-white shadow-2xl transform-gpu"
              >
                <Code2 className="w-6 h-6" />
              </motion.div>
              
              {/* Enhanced Text with Gradient Animation */}
              <motion.div 
                className="text-lg md:text-xl lg:text-2xl font-bold gradient-text relative"
                whileHover={{ 
                  textShadow: "0 0 20px rgba(0, 247, 255, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Mudassar
                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Desktop Navigation with 3D Effects */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    rotateX: [0, 5, 0],
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl transform-gpu ${
                    activeSection === item.id
                      ? "text-[var(--neon-blue)] bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/40 shadow-lg shadow-[var(--neon-blue)]/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                  }`}
                >
                  {item.label}
                  
                  {/* Enhanced Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-blue)] rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/0 via-[var(--neon-blue)]/10 to-[var(--neon-blue)]/0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button with 3D Effects */}
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white z-50 relative rounded-xl hover:bg-white/10 transition-all duration-300 transform-gpu hover:shadow-lg hover:shadow-white/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    <X className="w-6 h-6" />
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--neon-blue)] blur-sm opacity-50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    <Menu className="w-6 h-6" />
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--neon-blue)] blur-sm opacity-30"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation with 3D Effects */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden overflow-hidden absolute top-full left-0 right-0 bg-[var(--dark-bg)]/95 backdrop-blur-xl border-t border-[var(--neon-blue)]/30 shadow-2xl rounded-b-2xl"
              >
                <div className="py-6 space-y-3 px-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -30, rotateY: -15 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        x: 15, 
                        scale: 1.02,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl transform-gpu ${
                        activeSection === item.id
                          ? "text-[var(--neon-blue)] bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 border border-[var(--neon-blue)]/40 shadow-lg shadow-[var(--neon-blue)]/20"
                          : "text-gray-300 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
                      }`}
                    >
                      {item.label}
                      
                      {/* Mobile Hover Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/0 via-[var(--neon-blue)]/5 to-[var(--neon-blue)]/0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation; 