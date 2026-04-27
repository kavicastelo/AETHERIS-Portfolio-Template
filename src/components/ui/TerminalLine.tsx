"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalLineProps {
  prefix?: string;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export function TerminalLine({ prefix = "> ", delay = 0, children, className }: TerminalLineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className={cn("flex items-start gap-3 font-mono text-sm mb-1 line-height-relaxed", className)}
    >
      <span className="text-cyan-500/60 shrink-0 font-bold">{prefix}</span>
      <div className="text-slate-300">{children}</div>
    </motion.div>
  );
}
