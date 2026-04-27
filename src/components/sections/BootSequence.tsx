"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const bootLogs = [
    "INITIALIZING KERNEL v6.4.2...",
    "LOADING NEURAL INTERFACE...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "DECRYPTING CORE IDENTITY...",
    "MAPPING ECOSYSTEM NODES...",
    "AUTHENTICATING USER: KAVI_V",
    "SYSTEM READY."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#05080a] flex items-center justify-center p-8 font-mono">
      <div className="max-w-md w-full">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-cyan-500 text-xs tracking-widest mb-1 flex items-center gap-2"
            >
              <span className="w-1 h-1 bg-cyan-400" />
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ opacity: [0, 1] }} 
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="w-2 h-4 bg-cyan-500 mt-4"
        />
      </div>
      
      {/* Decorative HUD scanning effect */}
      <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 animate-scanline" />
    </div>
  );
}
