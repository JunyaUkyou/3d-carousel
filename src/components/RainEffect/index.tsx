import { useState } from "react";

export const RainEffect = ({ isDisplay = false }) => {
  // 50本の雨粒を生成
  const dropCount = 200;

  const [drops] = useState(() =>
    Array.from({ length: dropCount }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${0.5 + Math.random() * 0.5}s`,
      delay: `${Math.random() * 2}s`,
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
            className="absolute -top-12.5 w-0.5 h-12 bg-linear-to-b from-transparent to-white/80 animate-rain "
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
