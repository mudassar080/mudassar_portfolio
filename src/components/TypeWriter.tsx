interface TypeWriterProps {
  sequences: (string | number)[];
  className?: string;
}

const TypeWriter = ({ 
  sequences, 
  className = ""
}: TypeWriterProps) => {
  // Just show the first text sequence without any animation
  const displayText = sequences.length > 0 && typeof sequences[0] === "string" 
    ? sequences[0] 
    : "";

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default TypeWriter; 