"use client";

import { useState, useEffect } from "react";
import { config } from "@/data/config";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("01");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b",
      scrolled ? "bg-black/80 backdrop-blur-lg border-cyan-500/20 py-3" : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-cyan-500 flex items-center justify-center font-bold text-black text-xs font-mono">
            KV
          </div>
          <span className="font-mono text-xs font-bold tracking-[0.3em] hidden sm:block">AETHERIS_OS</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {config.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "group flex flex-col items-start transition-colors",
                activeTab === item.id ? "text-cyan-400" : "text-slate-400 hover:text-white"
              )}
            >
              <span className="text-[8px] font-mono opacity-50 group-hover:opacity-100 transition-opacity">{item.id}</span>
              <span className="text-[10px] font-mono tracking-[0.2em] font-bold uppercase">{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="nav-underline" className="h-[2px] w-full bg-cyan-400 mt-1" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
           <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-mono text-slate-500 hidden sm:block">SYSTEM_ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
