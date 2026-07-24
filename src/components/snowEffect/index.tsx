import { useState } from "react";

export const SnowEffect = ({ isDisplay = false }) => {
  // 50本の雨粒を生成
  const dropCount = 100;

  const [drops] = useState(() =>
    Array.from({ length: dropCount }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${0.5 + Math.random() * 3 + 4}s`,
      delay: `${Math.random() * 3}s`,
      opacity: 0.3 + Math.random() * 0.5,
    })),
  );
  if (!isDisplay) return;

  return (
    <div className="absolute inset-0 left-[-10%] pointer-events-none overflow-hidden z-0">
      {drops.map((style, index) => {
        return (
          <span
            key={index}
            className="absolute -top-10 w-1.5 h-1.5 rounded-b-full bg-linear-to-b from-transparent to-white/80 animate-snow"
            style={{
              left: style.left,
              animationDuration: style.duration,
              animationDelay: style.delay,
              opacity: style.opacity,
            }}
          />
        );
      })}
    </div>
  );
};
