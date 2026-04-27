"use client";

import { motion } from "framer-motion";
import { HudPanel } from "@/components/ui/HudPanel";
import { GlowButton } from "@/components/ui/GlowButton";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-md w-full relative z-10">
        <HudPanel title="SYSTEM_ERROR_404" cornerText="NODE_NOT_FOUND">
          <div className="space-y-6 text-center py-8">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 border-2 border-red-500/20 border-t-red-500 rounded-full mx-auto flex items-center justify-center"
            >
               <span className="text-red-500 font-mono font-bold text-2xl animate-pulse">!</span>
            </motion.div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-white uppercase">Access Denied</h1>
              <p className="text-sm font-mono text-slate-500 leading-relaxed">
                The requested coordinate path does not exist in the current grid sector.
                Error Code: <span className="text-red-400">0x404_NULL_POINTER</span>
              </p>
            </div>

            <div className="pt-4">
              <a href="/">
                <GlowButton variant="primary" className="w-full">
                  Return to Core Index
                </GlowButton>
              </a>
            </div>
          </div>
        </HudPanel>
      </div>

      {/* Decorative Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
         <div className="w-full h-1 bg-red-500 absolute top-1/4 animate-scanline" />
         <div className="w-full h-1 bg-red-500 absolute top-3/4 animate-scanline" style={{ animationDelay: '2s' }} />
      </div>
    </main>
  );
}
