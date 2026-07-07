interface GradientOrbProps {
  color?: "gold" | "navy" | "emerald" | "blue";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const colorMap = {
  gold: "rgba(201, 168, 76, 0.12)",
  navy: "rgba(28, 45, 79, 0.2)",
  emerald: "rgba(16, 185, 129, 0.08)",
  blue: "rgba(59, 130, 246, 0.1)",
};

const sizeMap = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-96 h-96",
  xl: "w-[500px] h-[500px]",
};

export default function GradientOrb({
  color = "gold",
  size = "md",
  className = "",
}: GradientOrbProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizeMap[size]} ${className}`}
      style={{
        backgroundColor: colorMap[color],
        willChange: "auto",
      }}
      aria-hidden="true"
    />
  );
}
