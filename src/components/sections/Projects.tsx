"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { NeonCard } from "@/components/ui/NeonCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { ExternalLink, GitBranch } from "lucide-react";

export function Projects() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(projects.map(p => p.category.toUpperCase())))];

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category.toUpperCase() === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto bg-black/20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Deployed_Systems</h2>
          <h3 className="text-4xl font-bold">Technological Assets</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1 text-[10px] font-mono tracking-widest border transition-all ${
                filter === cat 
                ? "bg-cyan-500 border-cyan-500 text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]" 
                : "border-white/10 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <NeonCard className="h-full flex flex-col p-0 overflow-hidden bg-slate-900/40">
                <div className="h-48 w-full bg-slate-800 relative overflow-hidden group">
                   {/* Placeholder for project image */}
                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-black">
                      <span className="text-cyan-500/20 font-mono text-8xl font-bold">{project.title.charAt(0)}</span>
                   </div>
                   <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute top-4 right-4 text-[10px] bg-black/60 px-2 py-1 border border-cyan-500/40 text-cyan-400 font-mono">
                      {project.category}
                   </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h4 className="text-xl font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors uppercase">{project.title}</h4>
                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>

                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-[10px] text-slate-500 uppercase font-mono">{m.label}</div>
                          <div className="text-sm font-bold text-cyan-400 font-mono">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono text-slate-500 uppercase">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    {project.links.github && (
                      <a href={project.links.github} aria-label={`View ${project.title} on GitHub`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <GitBranch size={18} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} aria-label={`Live Demo of ${project.title}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
