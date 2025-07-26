import { TypeAnimation } from "react-type-animation";

interface TypeWriterProps {
  sequences: (string | number)[];
  className?: string;
  speed?: number;
  repeat?: number;
}

const TypeWriter = ({ sequences, className = "", speed = 50, repeat = Infinity }: TypeWriterProps) => {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: speed }}
      repeat={repeat}
      className={className}
      cursor={true}
      style={{ display: 'inline-block', minHeight: '1.2em' }}
    />
  );
};

export default TypeWriter; 