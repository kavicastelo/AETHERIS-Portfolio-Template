"use client";

import { motion } from "framer-motion";
import { ecosystem } from "@/data/ecosystem";
import { HudPanel } from "@/components/ui/HudPanel";
import { Network, Share2, Binary } from "lucide-react";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Network_Effect</h2>
        <h3 className="text-4xl font-bold">Interconnected Ecosystem</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ecosystem.map((node) => (
          <HudPanel 
            key={node.id} 
            title={node.type} 
            className="group hover:border-cyan-400/50 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                {node.type === "Platform" && <Binary size={24} />}
                {node.type === "Community" && <Share2 size={24} />}
                {node.type === "Tool" && <Network size={24} />}
              </div>
              <div>
                <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{node.name}</h4>
                <p className="text-[10px] font-mono text-slate-500 uppercase">NODE_ID: {node.id}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">{node.description}</p>
            
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-2">
                 {node.connections.map(conn => (
                   <div key={conn} className="w-6 h-6 border border-cyan-500/40 rounded-full bg-slate-900 flex items-center justify-center text-[8px] font-mono text-cyan-400" title={`Connected to ${conn}`}>
                      {conn}
                   </div>
                 ))}
              </div>
              <a href={node.url} className="text-[10px] font-mono text-cyan-500 hover:text-white underline decoration-cyan-500/20">VIEW_NODE</a>
            </div>
          </HudPanel>
        ))}
      </div>

      {/* Decorative Network Visualization Placeholder */}
      <div className="mt-20 h-64 border border-cyan-500/10 rounded overflow-hidden relative bg-black/20">
         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="w-[500px] h-[500px] border border-cyan-500/5 rounded-full relative"
            >
               {Array.from({length: 8}).map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
                   style={{ 
                     top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`, 
                     left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%` 
                   }}
                 />
               ))}
            </motion.div>
            <div className="text-center z-10">
               <p className="text-[10px] font-mono text-cyan-400 tracking-[1em] uppercase animate-pulse">Scanning_Global_Network...</p>
            </div>
         </div>
      </div>
    </section>
  );
}
