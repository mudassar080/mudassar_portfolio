import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Enhanced Floating Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Main Button */}
            <motion.div
              className="relative p-4 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] text-white shadow-2xl transform-gpu"
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(0, 247, 255, 0.3)",
                  "0 15px 40px rgba(0, 247, 255, 0.5)",
                  "0 10px 30px rgba(0, 247, 255, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Icon */}
              <motion.div
                animate={{ 
                  y: [0, -3, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] opacity-0 group-hover:opacity-30 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
            >
              <div className="px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg border border-gray-700">
                Scroll to top
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50"
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: isVisible ? Math.min(window.pageYOffset / (document.body.scrollHeight - window.innerHeight), 1) : 0 
        }}
        transition={{ duration: 0.1 }}
        style={{ transformOrigin: "left" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)]"
          animate={{
            background: [
              "linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--accent-green))",
              "linear-gradient(90deg, var(--accent-green), var(--neon-blue), var(--neon-purple))",
              "linear-gradient(90deg, var(--neon-purple), var(--accent-green), var(--neon-blue))",
              "linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--accent-green))"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </>
  );
};

export default ScrollToTop; 