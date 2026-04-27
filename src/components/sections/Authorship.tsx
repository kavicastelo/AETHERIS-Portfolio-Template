"use client";

import { motion } from "framer-motion";
import { authorship } from "@/data/authorship";
import { HudPanel } from "@/components/ui/HudPanel";

export function Authorship() {
  return (
    <section id="authorship" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Knowledge_Output</h2>
        <h3 className="text-4xl font-bold">Publications & Philosophical Works</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {authorship.map((item, idx) => (
          <HudPanel key={idx} title={item.type} cornerText={item.date}>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors uppercase leading-tight">
                {item.title}
              </h4>
              <p className="text-sm font-mono text-cyan-500/60 uppercase">{item.publisher}</p>
              <div className="p-4 bg-white/5 border-l-2 border-cyan-500/40 relative">
                <p className="text-slate-400 italic text-sm leading-relaxed">&ldquo;{item.excerpt}&rdquo;</p>
              </div>
              <a 
                href={item.link} 
                className="inline-block text-[10px] font-mono tracking-[0.2em] text-cyan-400 hover:text-white transition-colors pt-4"
              >
                ACCESS_FULL_LOG [READ_ONLY] &rarr;
              </a>
            </div>
          </HudPanel>
        ))}
      </div>
    </section>
  );
}
