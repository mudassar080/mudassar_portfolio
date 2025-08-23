import { ExternalLink, Eye, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demo,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative perspective-1000 transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 30px 60px rgba(0, 247, 255, 0.2), 0 0 120px rgba(0, 247, 255, 0.1)"
            : "0 15px 35px rgba(0, 0, 0, 0.3)",
        }}
        className="card-gradient rounded-3xl overflow-hidden transition-all duration-500 relative h-full flex flex-col transform-gpu"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-30"
            }`}
          />

          {/* Floating Action Button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white/20 backdrop-blur-md rounded-2xl text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:border-white/50 shadow-2xl transform-gpu hover:scale-110 hover:-translate-y-1"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>

          {/* Corner Badge */}
          <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] rounded-2xl text-white text-sm font-bold shadow-2xl transform-gpu">
            Featured
          </div>

          {/* Floating Tech Preview */}
          <div
            className={`absolute bottom-4 left-4 flex gap-2 transition-all duration-400 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            {tech.slice(0, 3).map((techItem) => (
              <div
                key={techItem}
                className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs text-white border border-white/20"
              >
                {techItem}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-8 flex-1 flex flex-col relative z-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300 leading-tight group-hover:translate-x-2">
            {title}
          </h3>

          <p
            className={`text-gray-300 mb-6 lg:mb-8 line-clamp-3 leading-relaxed text-sm md:text-base lg:text-lg transition-colors duration-300 ${
              isHovered ? "text-gray-200" : "text-gray-300"
            }`}
          >
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-8">
            {tech.map((techItem) => (
              <span
                key={techItem}
                className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-xl lg:rounded-2xl text-xs lg:text-sm bg-gradient-to-r from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/25 text-[var(--neon-blue)] border border-[var(--neon-blue)]/40 hover:bg-[var(--neon-blue)]/30 hover:border-[var(--neon-blue)]/60 transition-all duration-300 font-semibold transform-gpu backdrop-blur-sm hover:scale-110 hover:-translate-y-1"
                style={{
                  boxShadow: isHovered
                    ? "0 8px 20px rgba(0, 247, 255, 0.2)"
                    : "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                {techItem}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-3 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] text-white font-bold hover:shadow-2xl transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-1"
                style={{
                  boxShadow: isHovered
                    ? "0 15px 35px rgba(0, 247, 255, 0.3)"
                    : "0 8px 20px rgba(0, 247, 255, 0.2)",
                }}
              >
                <Eye className="w-5 h-5" />
                Live Demo
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
