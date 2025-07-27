import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tech, demo, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
  const springConfig = { damping: 25, stiffness: 300 };
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
      initial={{ opacity: 0, y: 100, rotateY: index % 2 === 0 ? -15 : 15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
              <motion.div
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
            boxShadow: isHovered 
              ? "0 30px 60px rgba(0, 247, 255, 0.2), 0 0 120px rgba(0, 247, 255, 0.1)" 
              : "0 15px 35px rgba(0, 0, 0, 0.3)"
          }}
          whileHover={{ 
            y: -15,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="card-gradient rounded-3xl overflow-hidden transition-all duration-500 relative h-full flex flex-col transform-gpu"
        >
        {/* Enhanced Image Container with 3D Effects */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700"
            animate={{
              scale: isHovered ? 1.1 : 1,
              filter: isHovered ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)"
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Enhanced Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0.3
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Floating Action Button with 3D Effect */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.4 }}
          >
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotateY: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-5 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-2xl transform-gpu"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                <ExternalLink className="w-6 h-6" />
              </motion.a>
            )}
          </motion.div>

          {/* Enhanced Corner Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] rounded-2xl text-white text-sm font-bold shadow-2xl transform-gpu"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Featured
          </motion.div>

          {/* Floating Tech Preview */}
          <motion.div
            className="absolute bottom-4 left-4 flex gap-2"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.4 }}
          >
            {tech.slice(0, 3).map((techItem, techIndex) => (
              <motion.div
                key={techItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs text-white border border-white/20"
              >
                {techItem}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Content with 3D Typography */}
        <div className="p-4 lg:p-8 flex-1 flex flex-col relative z-10">
          <motion.h3 
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300 leading-tight"
            whileHover={{ x: 8, textShadow: "0 0 20px rgba(0, 247, 255, 0.5)" }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mb-6 lg:mb-8 line-clamp-3 leading-relaxed text-sm md:text-base lg:text-lg"
            animate={{
              color: isHovered ? "rgb(209 213 219)" : "rgb(156 163 175)"
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          {/* Enhanced Tech Stack with 3D Effect */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tech.map((techItem, techIndex) => (
              <motion.span
                key={techItem}
                initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15 + 0.5 + techIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateY: [0, 10, -10, 0]
                }}
                className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl text-xs lg:text-sm bg-gradient-to-r from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/25 text-[var(--neon-blue)] border border-[var(--neon-blue)]/40 hover:bg-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)]/60 transition-all duration-300 font-semibold transform-gpu backdrop-blur-sm"
                style={{
                  boxShadow: isHovered 
                    ? "0 8px 20px rgba(0, 247, 255, 0.2)" 
                    : "0 4px 12px rgba(0, 0, 0, 0.2)"
                }}
              >
                {techItem}
              </motion.span>
            ))}
          </div>

          {/* Enhanced Action Button with 3D Effect */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] text-white font-bold hover:shadow-2xl transition-all duration-300 transform-gpu"
                style={{
                  boxShadow: isHovered 
                    ? "0 15px 35px rgba(0, 247, 255, 0.3)" 
                    : "0 8px 20px rgba(0, 247, 255, 0.2)"
                }}
              >
                <Eye className="w-5 h-5" />
                Live Demo
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Enhanced 3D Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--neon-blue)]/10 via-[var(--neon-purple)]/5 to-[var(--accent-green)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          animate={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(0, 247, 255, 0.1), rgba(180, 0, 255, 0.05), rgba(0, 255, 136, 0.1))"
              : "linear-gradient(45deg, rgba(0, 247, 255, 0), rgba(180, 0, 255, 0), rgba(0, 255, 136, 0))"
          }}
        />
        
        {/* Enhanced Border Glow */}
        <motion.div 
          className="absolute inset-0 rounded-3xl border-2 border-[var(--neon-blue)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? "0 0 30px rgba(0, 247, 255, 0.3), inset 0 0 30px rgba(0, 247, 255, 0.1)" 
              : "0 0 0px rgba(0, 247, 255, 0), inset 0 0 0px rgba(0, 247, 255, 0)"
          }}
        />

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--neon-blue)] rounded-full opacity-40"
              style={{
                left: `${20 + i * 25}%`,
                top: `${60 + i * 15}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 