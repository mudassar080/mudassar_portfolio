import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className = "" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
    <motion.div
      animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`relative ${sizeClasses[size]}`}
    >
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-[var(--neon-blue)]/20 rounded-full" />
        
        {/* Animated ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0 border-4 border-transparent border-t-[var(--neon-blue)] rounded-full"
        />
        
        {/* Inner glow */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-2 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full opacity-20"
        />
        
        {/* Center dot */}
        <motion.div
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-[var(--neon-blue)] rounded-full transform -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      
      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="ml-4 text-[var(--neon-blue)] font-medium"
      >
        Loading...
    </motion.div>
    </div>
  );
};

export default LoadingSpinner; 