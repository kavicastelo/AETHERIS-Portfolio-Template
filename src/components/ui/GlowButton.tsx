"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
}

export function GlowButton({ children, onClick, className, variant = "primary" }: GlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden group",
        variant === "primary" && "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.4)]",
        variant === "outline" && "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 shadow-[0_0_10px_rgba(0,243,255,0.1)]",
        variant === "ghost" && "bg-transparent text-slate-400 hover:text-cyan-400",
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
      )}
    </motion.button>
  );
}
