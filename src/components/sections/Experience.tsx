"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { HudPanel } from "@/components/ui/HudPanel";
import { TerminalLine } from "@/components/ui/TerminalLine";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Mission_Logs</h2>
        <h3 className="text-4xl font-bold">Operational History</h3>
      </div>

      <div className="space-y-12 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-cyan-500/20">
        {experience.map((exp, idx) => (
          <div key={idx} className="relative pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-3 w-[40px] h-[40px] flex items-center justify-center translate-x-[-10px] z-10 transition-transform group-hover:scale-125">
               <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_10px_#00f3ff]" />
            </div>

            <HudPanel title={`${exp.period} // ${exp.company}`} cornerText={exp.location}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                </div>
              </div>

              <div className="space-y-2 bg-black/20 p-4 rounded border border-white/5 font-mono">
                {exp.description.map((desc, i) => (
                  <TerminalLine key={i}>{desc}</TerminalLine>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="text-[10px] px-2 py-1 bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 rounded uppercase">
                    {skill}
                  </span>
                ))}
              </div>
            </HudPanel>
          </div>
        ))}
      </div>
    </section>
  );
}
