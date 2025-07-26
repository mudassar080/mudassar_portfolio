import { motion } from "framer-motion";
import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
  index: number;
}

const ProjectCard = ({ title, description, image, tech, demo, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        whileHover={{ 
          y: -10,
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="card-gradient rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,247,255,0.25)] transition-all duration-500 relative h-full flex flex-col"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image Container with Enhanced Effects */}
        <div className="relative overflow-hidden h-56">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Corner Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full text-white text-xs font-semibold shadow-lg"
          >
            Featured
          </motion.div>
        </div>

        {/* Content with Enhanced Typography */}
        <div className="p-8 flex-1 flex flex-col">
          <motion.h3 
            className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300 leading-tight"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed text-base">
            {description}
          </p>
          
          {/* Enhanced Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem, techIndex) => (
              <motion.span
                key={techItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + techIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 text-[var(--neon-blue)] border border-[var(--neon-blue)]/30 hover:bg-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)]/50 transition-all duration-300 font-medium"
              >
                {techItem}
              </motion.span>
            ))}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group/btn flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--neon-blue)]/25 transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                Live Demo
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-[var(--neon-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 