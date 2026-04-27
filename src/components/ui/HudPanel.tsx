"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HudPanelProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  cornerText?: string;
}

export function HudPanel({ children, className, title, cornerText }: HudPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-6 bg-black/40 border border-cyan-500/20 backdrop-blur-md overflow-hidden",
        "before:absolute before:top-0 before:left-0 before:w-4 before:h-4 before:border-t-2 before:border-l-2 before:border-cyan-400/60",
        "after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:border-b-2 after:border-r-2 after:border-cyan-400/60",
        className
      )}
    >
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-32 h-[1px] bg-gradient-to-l from-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-32 h-[1px] bg-gradient-to-r from-cyan-400/40 to-transparent" />
      
      <div className="flex justify-between items-center mb-6 border-b border-cyan-500/10 pb-2">
        {title && <h3 className="text-xs font-bold tracking-[0.2em] text-cyan-400 flex items-center gap-2 uppercase">
          <span className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
          {title}
        </h3>}
        {cornerText && <span className="text-[10px] text-cyan-500/40 font-mono tracking-tighter">{cornerText}</span>}
      </div>
      
      {children}
    </motion.div>
  );
}
