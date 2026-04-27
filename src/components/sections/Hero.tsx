"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { HudPanel } from "@/components/ui/HudPanel";
import { GlowButton } from "@/components/ui/GlowButton";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 mx-auto lg:mx-0 group"
          >
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow p-2">
              <div className="w-full h-full border-t-4 border-cyan-400 rounded-full" />
            </div>
            <div className="absolute inset-4 overflow-hidden rounded-full border border-white/10 bg-slate-900 flex items-center justify-center">
               <span className="text-4xl font-mono text-cyan-500 font-bold group-hover:scale-110 transition-transform">KV</span>
            </div>
            {/* HUD Callout */}
            <div className="absolute -right-12 top-10 w-24 h-[1px] bg-cyan-400/50 hidden xl:block" />
            <div className="absolute -right-48 top-6 p-2 border border-cyan-500/20 bg-black/40 backdrop-blur-sm hidden xl:block">
              <p className="text-[10px] font-mono whitespace-nowrap">STATUS: OPTIMIZED</p>
              <p className="text-[10px] font-mono text-cyan-400">LATENCY: 12ms</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat, i) => (
              <HudPanel key={i} className="p-4" cornerText={stat.suffix}>
                <div className="text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                <div className="text-[10px] tracking-widest text-slate-500 uppercase mt-1">{stat.label}</div>
              </HudPanel>
            ))}
          </div>
        </div>

        {/* Right Column: Title & Intro */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-cyan-400 text-sm tracking-[0.4em] uppercase"
            >
              Principal Architect // Core Identity
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black tracking-tighter"
            >
              {profile.name}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building the next generation of <span className="text-cyan-400 font-normal">Autonomous Ecosystems</span> through advanced systems engineering.
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <GlowButton variant="primary" className="h-12 px-10">Initialize Connection</GlowButton>
            <GlowButton variant="outline" className="h-12 px-10">Access Manifest Logs</GlowButton>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-0 left-1/2 w-[1px] h-20 bg-gradient-to-t from-cyan-400 to-transparent" />
    </section>
  );
}
