import { TypeAnimation } from "react-type-animation";
import { useMemo } from "react";

interface TypeWriterProps {
  sequences: (string | number)[];
  className?: string;
  speed?: number;
  repeat?: number;
}

const TypeWriter = ({ 
  sequences, 
  className = "", 
  speed = 75, // Increased from 50 for better performance
  repeat = Infinity 
}: TypeWriterProps) => {
  // Memoize sequences to prevent unnecessary re-renders
  const memoizedSequences = useMemo(() => sequences, [sequences]);

  return (
    <TypeAnimation
      sequence={memoizedSequences}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: speed }}
      repeat={repeat}
      className={className}
      cursor={true}
      style={{ 
        display: 'inline-block', 
        minHeight: '1.2em',
        willChange: 'auto' // Optimize for performance
      }}
    />
  );
};

export default TypeWriter; 