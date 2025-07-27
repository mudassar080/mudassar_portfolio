import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  showText?: boolean;
}

const LoadingSpinner = ({ 
  size = "md", 
  className = "", 
  text = "Loading...",
  showText = true 
}: LoadingSpinnerProps) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const ringSizes = {
    sm: "border-2",
    md: "border-3",
    lg: "border-4",
    xl: "border-6",
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-6 ${className}`}>
      {/* Enhanced 3D Spinner Container */}
      <motion.div
        animate={{ 
          rotateY: [0, 180, 360],
          rotateX: [0, 15, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative perspective-1000"
      >
        {/* Main Spinner */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`relative ${sizeClasses[size]} transform-gpu`}
        >
          {/* Outer ring with gradient */}
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute inset-0 ${ringSizes[size]} border-[var(--neon-blue)]/30 rounded-full backdrop-blur-sm`}
            style={{
              boxShadow: "0 0 20px rgba(0, 247, 255, 0.2)"
            }}
          />
          
          {/* Animated gradient ring */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute inset-0 ${ringSizes[size]} border-transparent rounded-full`}
            style={{
              background: `conic-gradient(from 0deg, transparent, var(--neon-blue), var(--neon-purple), var(--accent-green), transparent)`,
              mask: "radial-gradient(circle at center, transparent 60%, black 70%)",
              WebkitMask: "radial-gradient(circle at center, transparent 60%, black 70%)"
            }}
          />
          
          {/* Inner glow ring */}
          <motion.div
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute inset-2 ${ringSizes[size]} border-[var(--neon-blue)]/20 rounded-full`}
            style={{
              boxShadow: "inset 0 0 20px rgba(0, 247, 255, 0.3)"
            }}
          />
          
          {/* Center core */}
          <motion.div
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.6, 1, 0.6],
              rotate: -360
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: "0 0 15px rgba(0, 247, 255, 0.5)"
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--neon-blue)] rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [
                  Math.cos((i * 60) * Math.PI / 180) * 20,
                  Math.cos((i * 60) * Math.PI / 180) * 25,
                  Math.cos((i * 60) * Math.PI / 180) * 20
                ],
                y: [
                  Math.sin((i * 60) * Math.PI / 180) * 20,
                  Math.sin((i * 60) * Math.PI / 180) * 25,
                  Math.sin((i * 60) * Math.PI / 180) * 20
                ],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>

        {/* Orbital rings */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--neon-purple)] rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                x: [
                  Math.cos((i * 120) * Math.PI / 180) * 30,
                  Math.cos((i * 120) * Math.PI / 180) * 35,
                  Math.cos((i * 120) * Math.PI / 180) * 30
                ],
                y: [
                  Math.sin((i * 120) * Math.PI / 180) * 30,
                  Math.sin((i * 120) * Math.PI / 180) * 35,
                  Math.sin((i * 120) * Math.PI / 180) * 30
                ],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.3, 1.2, 0.3]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Enhanced Loading Text */}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="text-[var(--neon-blue)] font-semibold text-lg"
            animate={{
              textShadow: [
                "0 0 5px rgba(0, 247, 255, 0.5)",
                "0 0 15px rgba(0, 247, 255, 0.8)",
                "0 0 5px rgba(0, 247, 255, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {text}
            <motion.span
              className="inline-block ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {dots}
            </motion.span>
          </motion.div>
          
          {/* Progress bar */}
          <motion.div
            className="mt-4 w-32 h-1 bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingSpinner; 