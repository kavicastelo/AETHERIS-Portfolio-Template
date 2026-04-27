"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { skills } from "@/data/skills";
import { HudPanel } from "@/components/ui/HudPanel";

export function Skills() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Tech_Matrix</h2>
        <h3 className="text-4xl font-bold">Capabilities & Proficiency</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((category, idx) => (
          <HudPanel key={idx} title={category.title} className="bg-slate-900/20">
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-mono text-slate-300 uppercase tracking-widest">{skill.name}</span>
                    <span className="text-[10px] font-mono text-cyan-500">{skill.proficiency}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_10px_#00f3ff]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </HudPanel>
        ))}
      </div>
      
      {/* Decorative Matrix Background (Simplified) */}
      <div className="mt-20 opacity-20 pointer-events-none select-none overflow-hidden h-24 relative">
         <div className="absolute inset-0 flex flex-wrap gap-4 justify-center items-center font-mono text-[8px] text-cyan-500">
            {isMounted && Array.from({length: 100}).map((_, i) => (
              <span key={i} className="animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}>
                {Math.random() > 0.5 ? "1" : "0"}
              </span>
            ))}
         </div>
      </div>
    </section>
  );
}
