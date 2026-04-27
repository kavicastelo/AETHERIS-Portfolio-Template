"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystem } from "@/data/ecosystem";
import { HudPanel } from "@/components/ui/HudPanel";
import { Network, Share2, Binary, X } from "lucide-react";
import { EcosystemNode } from "@/types";

export function Ecosystem() {
  const [selectedNode, setSelectedNode] = useState<EcosystemNode | null>(null);

  return (
    <section id="ecosystem" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Network_Effect</h2>
        <h3 className="text-4xl font-bold">Interconnected Ecosystem</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ecosystem.map((node) => (
          <HudPanel 
            key={node.id} 
            title={node.type} 
            className="group hover:border-cyan-400/50 transition-colors cursor-pointer"
          >
            <div onClick={() => setSelectedNode(node)}>
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
                <span className="text-[10px] font-mono text-cyan-500 hover:text-white underline decoration-cyan-500/20">VISUALIZE_NODE</span>
              </div>
            </div>
          </HudPanel>
        ))}
      </div>

      {/* Node Visualizer Modal */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full"
            >
              <HudPanel title={`MAPPING_DATA // ${selectedNode.id}`} cornerText="REAL_TIME_ANALYSIS">
                <button 
                  onClick={() => setSelectedNode(null)}
                  className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="space-y-8 py-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-32 h-32 border border-cyan-400/40 flex items-center justify-center relative">
                       <div className="absolute inset-0 bg-cyan-400/5 animate-pulse" />
                       <Network size={48} className="text-cyan-400" />
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                       <h4 className="text-3xl font-bold uppercase tracking-tighter">{selectedNode.name}</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">{selectedNode.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-white/5 border border-white/5">
                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Status</p>
                        <p className="text-sm font-mono text-cyan-400">ACTIVE_UPSTREAM</p>
                     </div>
                     <div className="p-4 bg-white/5 border border-white/5">
                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Integrity</p>
                        <p className="text-sm font-mono text-cyan-400">VERIFIED_LOG_0x9A</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs font-mono text-cyan-500/60 uppercase tracking-widest border-b border-white/5 pb-2">Active Connections</p>
                    <div className="flex flex-wrap gap-4">
                       {selectedNode.connections.map(conn => (
                         <div key={conn} className="flex items-center gap-2 bg-slate-900 border border-cyan-500/20 px-3 py-1">
                            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-slate-300">HUB_{conn}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6">
                    <p className="text-[8px] font-mono text-slate-600">ENCRYPTION_MODE: AES_256_GCM</p>
                    {selectedNode.url && (
                      <a href={selectedNode.url} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${selectedNode.name}`} className="text-xs font-mono text-cyan-400 hover:text-white">
                        ACCESS_ORIGIN_ENTRY &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </HudPanel>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
