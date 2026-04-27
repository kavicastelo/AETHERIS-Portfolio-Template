"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "cyan" | "magenta" | "blue";
  hover?: boolean;
}

export function NeonCard({ children, className, glowColor = "cyan", hover = true }: NeonCardProps) {
  const colorMap = {
    cyan: "hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]",
    magenta: "hover:border-magenta-400 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.2)]",
    blue: "hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(0,112,243,0.2)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={cn(
        "group relative p-6 bg-slate-900/50 border border-white/5 transition-all duration-300",
        hover && colorMap[glowColor],
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      {/* Subtle overlay pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
