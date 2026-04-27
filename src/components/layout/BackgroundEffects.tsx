"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ top: string; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Grid Layer */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,243,0.05)_0%,rgba(0,0,0,0)_70%)]" />

      {/* Moving scanline */}
      <div className="scanline" />

      {/* Subtle particle effect placeholder */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full animate-float"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
