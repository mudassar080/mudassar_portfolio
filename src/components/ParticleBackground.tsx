import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  type: 'primary' | 'secondary' | 'accent';
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => {
        const type = Math.random() > 0.7 ? 'primary' : Math.random() > 0.5 ? 'secondary' : 'accent';
        const colors = {
          primary: 'var(--neon-blue)',
          secondary: 'var(--neon-purple)',
          accent: 'var(--accent-green)'
        };
        
        return {
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[type],
          type
        };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          // Mouse interaction
          if (isHovering) {
            const dx = mousePosition.x - newX;
            const dy = mousePosition.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
              const force = (20 - distance) / 20;
              newVx += (dx / distance) * force * 0.1;
              newVy += (dy / distance) * force * 0.1;
            }
          }

          // Add some randomness
          newVx += (Math.random() - 0.5) * 0.02;
          newVy += (Math.random() - 0.5) * 0.02;

          // Limit velocity
          const maxVelocity = 1;
          const velocity = Math.sqrt(newVx * newVx + newVy * newVy);
          if (velocity > maxVelocity) {
            newVx = (newVx / velocity) * maxVelocity;
            newVy = (newVy / velocity) * maxVelocity;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    animationRef.current = requestAnimationFrame(animateParticles);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, mousePosition]);

  const getParticleStyle = (particle: Particle) => {
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - particle.x, 2) + 
      Math.pow(mousePosition.y - particle.y, 2)
    );
    
    const isNearMouse = isHovering && distance < 15;
    const scale = isNearMouse ? 1.5 : 1;
    const opacity = isNearMouse ? Math.min(particle.opacity * 2, 1) : particle.opacity;

    return {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      backgroundColor: particle.color,
      opacity,
      transform: `scale(${scale})`,
      filter: isNearMouse ? 'blur(0px)' : 'blur(0.5px)',
      boxShadow: isNearMouse 
        ? `0 0 ${particle.size * 2}px ${particle.color}` 
        : `0 0 ${particle.size}px ${particle.color}40`
    };
  };

  return (
    <div 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-bg)] via-[#0f0f0f] to-[var(--dark-bg)]" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--neon-blue)]/5 to-[var(--neon-purple)]/5 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[var(--neon-purple)]/5 to-[var(--neon-blue)]/5 rounded-full blur-3xl"
      />

      {/* Dynamic Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={getParticleStyle(particle)}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [particle.opacity, particle.opacity * 1.2, particle.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection Lines with Physics */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--neon-blue)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--neon-purple)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {particles.slice(0, 20).map((particle, i) => {
          const nextParticle = particles[(i + 1) % Math.min(20, particles.length)];
          if (!nextParticle) return null;
          
          const distance = Math.sqrt(
            Math.pow(particle.x - nextParticle.x, 2) + 
            Math.pow(particle.y - nextParticle.y, 2)
          );
          
          if (distance < 20) {
            return (
              <motion.line
                key={`connection-${i}`}
                x1={`${particle.x}%`}
                y1={`${particle.y}%`}
                x2={`${nextParticle.x}%`}
                y2={`${nextParticle.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="0.5"
                opacity={0.3 - (distance / 20) * 0.2}
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.3 - (distance / 20) * 0.2 
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            );
          }
          return null;
        })}
      </svg>

      {/* Mouse Interaction Indicator */}
      {isHovering && (
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-[var(--neon-blue)]/20 pointer-events-none"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default ParticleBackground; 