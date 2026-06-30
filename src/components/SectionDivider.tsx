interface SectionDividerProps {
  variant?: "wave" | "curve" | "tilt" | "dots";
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

export default function SectionDivider({
  variant = "curve",
  fromColor = "#ffffff",
  toColor = "#f8fafc",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const transform = flip ? "rotate(180deg)" : "";

  if (variant === "wave") {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ transform }} aria-hidden="true">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V100H0V40Z" fill={toColor} />
          <path d="M0 60C240 20 480 80 720 60C960 40 1200 70 1440 50V100H0V60Z" fill={toColor} fillOpacity="0.5" />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ transform }} aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 80L1440 80L1440 30C1440 30 1080 0 720 30C360 60 0 30 0 30L0 80Z" fill={toColor} />
        </svg>
      </div>
    );
  }

  if (variant === "tilt") {
    return (
      <div className={`relative w-full overflow-hidden leading-none ${className}`} style={{ transform }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 60L1440 0V60H0Z" fill={toColor} />
        </svg>
      </div>
    );
  }

  // dots variant
  return (
    <div className={`relative w-full py-8 flex items-center justify-center ${className}`} aria-hidden="true">
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 2 ? "8px" : "4px",
              height: i === 2 ? "8px" : "4px",
              backgroundColor: i === 2 ? "#c9a84c" : "#cbd5e1",
              opacity: i === 0 || i === 4 ? 0.4 : i === 1 || i === 3 ? 0.7 : 1,
            }}
          />
        ))}
      </div>
    </div>
  );
}
