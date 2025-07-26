import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
  name: string;
  level: number;
  skills: string[];
  icon: ReactNode;
  index: number;
  isInView: boolean;
}

const SkillCard = ({ name, level, skills, icon, index, isInView }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card-gradient p-8 rounded-2xl relative overflow-hidden group border border-[var(--neon-blue)]/10 hover:border-[var(--neon-blue)]/30 transition-all duration-500"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)]"
        />
      </div>

      {/* Header with Enhanced Icon */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="p-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30 group-hover:border-[var(--neon-blue)]/50 transition-all duration-300"
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-2xl font-bold text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {name}
        </motion.h3>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="relative mb-8">
        <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{ duration: 2, delay: index * 0.1, ease: "easeOut" }}
            className="skill-bar h-full rounded-full relative overflow-hidden"
          >
            {/* Animated shine effect */}
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            
            {/* Progress dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-white rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Percentage with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 1.5 }}
          className="absolute -top-10 right-0"
        >
          <div className="px-3 py-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full text-white text-sm font-bold shadow-lg">
            {level}%
          </div>
        </motion.div>
      </div>

      {/* Enhanced Skills Tags */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1 + 1.8 + skillIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                rotate: [0, -5, 5, 0]
              }}
              className="px-4 py-2 bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)]/50 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Enhanced Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)]/5 to-[var(--neon-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Corner Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        viewport={{ once: true }}
        className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full opacity-60"
      />
    </motion.div>
  );
};

export default SkillCard; 