import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SkillCardProps {
  name: string;
  level: number;
  skills: string[];
  icon: ReactNode;
  isInView: boolean;
  skillId: string;
}

const SkillCard = ({ name, level, skills, icon, isInView, skillId }: SkillCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer perspective-1000 h-full transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/skills/${skillId}`)}
    >
      {/* Card Container */}
      <div
        className="card-gradient p-4 lg:p-8 rounded-2xl lg:rounded-3xl relative overflow-hidden border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all duration-500 transform-gpu h-full flex flex-col"
        style={{
          boxShadow: isHovered 
            ? "0 25px 50px rgba(0, 247, 255, 0.15), 0 0 100px rgba(0, 247, 255, 0.1)" 
            : "0 10px 30px rgba(0, 0, 0, 0.3)"
        }}
      >

        {/* Header with Icon */}
        <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8 relative z-10">
          <div
            className="p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/30 via-[var(--neon-purple)]/20 to-[var(--neon-blue)]/30 text-[var(--neon-blue)] border border-[var(--neon-blue)]/40 group-hover:border-[var(--neon-blue)]/60 transition-all duration-300 transform-gpu flex-shrink-0 hover:scale-110 hover:rotate-12"
            style={{
              boxShadow: isHovered 
                ? "0 0 30px rgba(0, 247, 255, 0.3)" 
                : "0 0 15px rgba(0, 247, 255, 0.1)"
            }}
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>
          
          <h3 
            className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--neon-blue)] transition-colors duration-300 flex-1 group-hover:translate-x-2"
          >
            {name}
          </h3>
        </div>

        {/* Progress Bar */}
        <div className="relative mb-6 lg:mb-8">
          <div 
            className="h-6 bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-600/30 backdrop-blur-sm"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            <div
              className={`skill-bar h-full rounded-2xl relative overflow-hidden transition-all duration-1000 ${
                isInView ? 'w-full' : 'w-0'
              }`}
              style={{
                background: "linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--accent-green))",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 20px rgba(0, 247, 255, 0.4)",
                width: isInView ? `${level}%` : '0%'
              }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine" />
              
              {/* Progress indicator dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Percentage Badge */}
          <div className="absolute -top-12 right-0 transition-all duration-600">
            <div className="px-4 py-2 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] rounded-2xl text-white text-lg font-bold shadow-2xl transform-gpu">
              {level}%
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="space-y-4 lg:space-y-6 flex-1">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 lg:px-5 py-2 lg:py-3 bg-gradient-to-r from-[var(--neon-blue)]/25 to-[var(--neon-purple)]/25 text-white rounded-xl lg:rounded-2xl text-xs lg:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--neon-blue)]/40 hover:border-[var(--neon-blue)]/60 cursor-pointer transform-gpu backdrop-blur-sm hover:scale-110 hover:-translate-y-2"
                style={{
                  boxShadow: isHovered 
                    ? "0 10px 25px rgba(0, 247, 255, 0.2)" 
                    : "0 5px 15px rgba(0, 0, 0, 0.2)"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard; 