import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
      {/* Floating Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
        >
          {/* Main Button */}
          <div className="relative p-4 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] text-white shadow-2xl transform-gpu transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,247,255,0.5)]">
            {/* Icon */}
            <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12">
              <ArrowUp className="w-6 h-6" />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg border border-gray-700">
              Scroll to top
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </div>
          </div>
        </button>
      )}

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] transition-all duration-100"
          style={{ 
            width: isVisible ? `${Math.min(window.pageYOffset / (document.body.scrollHeight - window.innerHeight), 1) * 100}%` : '0%',
            transformOrigin: "left"
          }}
        />
      </div>
    </>
  );
};

export default ScrollToTop; 