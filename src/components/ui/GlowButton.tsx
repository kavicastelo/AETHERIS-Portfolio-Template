"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  type?: "button" | "submit" | "reset";
  href?: string;
  "aria-label"?: string;
}

export const GlowButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, GlowButtonProps>(
  ({ children, onClick, className, variant = "primary", type = "button", href, "aria-label": ariaLabel }, ref) => {
    const baseClasses = cn(
      "px-6 py-2.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden group inline-flex items-center justify-center",
      variant === "primary" && "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.4)]",
      variant === "outline" && "bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 shadow-[0_0_10px_rgba(0,243,255,0.1)]",
      variant === "ghost" && "bg-transparent text-slate-400 hover:text-cyan-400",
      className
    );

    const content = (
      <>
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
        )}
      </>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as any}
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClick}
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        type={type}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {content}
      </motion.button>
    );
  }
);
GlowButton.displayName = "GlowButton";
