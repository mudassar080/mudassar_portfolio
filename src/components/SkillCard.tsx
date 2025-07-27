import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SkillCardProps {
  name: string;
  level: number;
  skills: string[];
  icon: ReactNode;
  index: number;
  isInView: boolean;
  skillId: string;
}

const SkillCard = ({ name, level, skills, icon, index, isInView, skillId }: SkillCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/skills/${skillId}`)}
      className="relative group cursor-pointer perspective-1000 h-full"
    >
      {/* Enhanced 3D Card Container */}
      <motion.div
                  className="card-gradient p-4 lg:p-8 rounded-2xl lg:rounded-3xl relative overflow-hidden border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all duration-500 transform-gpu h-full flex flex-col"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: isHovered 
            ? "0 25px 50px rgba(0, 247, 255, 0.15), 0 0 100px rgba(0, 247, 255, 0.1)" 
            : "0 10px 30px rgba(0, 0, 0, 0.3)"
        }}
      >
        {/* Dynamic Background Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            rotate: 360,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.5 }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)]" />
        </motion.div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--neon-blue)] rounded-full opacity-30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Enhanced Header with 3D Icon */}
        <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8 relative z-10">
          <motion.div
            whileHover={{ 
              rotateY: 180,
              scale: 1.2,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className="p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/30 via-[var(--neon-purple)]/20 to-[var(--neon-blue)]/30 text-[var(--neon-blue)] border border-[var(--neon-blue)]/40 group-hover:border-[var(--neon-blue)]/60 transition-all duration-300 transform-gpu flex-shrink-0"
            style={{
              boxShadow: isHovered 
                ? "0 0 30px rgba(0, 247, 255, 0.3)" 
                : "0 0 15px rgba(0, 247, 255, 0.1)"
            }}
          >
            <motion.div
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
          </motion.div>
          
          <motion.h3 
            className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300 flex-1"
            whileHover={{ x: 8, textShadow: "0 0 20px rgba(0, 247, 255, 0.5)" }}
          >
            {name}
          </motion.h3>
        </div>

        {/* Enhanced 3D Progress Bar */}
        <div className="relative mb-6 lg:mb-8">
          <motion.div 
            className="h-6 bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-600/30 backdrop-blur-sm"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${level}%` } : {}}
              transition={{ duration: 2.5, delay: index * 0.15 + 0.5, ease: "easeOut" }}
              className="skill-bar h-full rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--accent-green))",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 20px rgba(0, 247, 255, 0.4)"
              }}
            >
              {/* Enhanced shine effect */}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
              
              {/* Progress indicator dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-white rounded-full shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Percentage Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 2 }}
            className="absolute -top-12 right-0"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] rounded-2xl text-white text-lg font-bold shadow-2xl transform-gpu">
              {level}%
            </div>
          </motion.div>
        </div>

        {/* Enhanced Skills Tags with 3D Effect */}
        <div className="space-y-4 lg:space-y-6 flex-1">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 30, rotateX: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 2.2 + skillIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  rotateY: [0, 10, -10, 0],
                  transition: { duration: 0.3 }
                }}
                className="px-3 lg:px-5 py-2 lg:py-3 bg-gradient-to-r from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/25 text-white rounded-xl lg:rounded-2xl text-xs lg:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--neon-blue)]/40 hover:border-[var(--neon-blue)]/60 cursor-pointer transform-gpu backdrop-blur-sm"
                style={{
                  boxShadow: isHovered 
                    ? "0 10px 25px rgba(0, 247, 255, 0.2)" 
                    : "0 5px 15px rgba(0, 0, 0, 0.2)"
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Enhanced Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--neon-blue)]/10 via-[var(--neon-purple)]/5 to-[var(--accent-green)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          animate={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(0, 247, 255, 0.1), rgba(180, 0, 255, 0.05), rgba(0, 255, 136, 0.1))"
              : "linear-gradient(45deg, rgba(0, 247, 255, 0), rgba(180, 0, 255, 0), rgba(0, 255, 136, 0))"
          }}
        />
        
        {/* Enhanced Corner Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] rounded-full opacity-80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Click Indicator */}
        <motion.div
          className="absolute bottom-4 right-4 text-[var(--neon-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            x: [0, 5, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          →
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard; 