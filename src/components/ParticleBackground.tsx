import { useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 20 + 10,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.speed}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Connection lines effect */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--neon-purple)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--neon-blue)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {particles.slice(0, 10).map((particle, i) => (
            <circle
              key={`connection-${i}`}
              cx={`${particle.x}%`}
              cy={`${particle.y}%`}
              r="1"
              fill="url(#lineGradient)"
              opacity="0.5"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ParticleBackground; 