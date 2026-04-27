"use client";

import { motion } from "framer-motion";
import { HudPanel } from "@/components/ui/HudPanel";
import { GlowButton } from "@/components/ui/GlowButton";
import { TerminalLine } from "@/components/ui/TerminalLine";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-400 uppercase mb-2">/ Initiate_Connection</h2>
        <h3 className="text-4xl font-bold">Secure Communication Channel</h3>
      </div>

      <HudPanel cornerText="ENCRYPTED_LINK_v2.0">
        <div className="p-4 md:p-8 space-y-8">
          <div className="space-y-4">
             <TerminalLine prefix="SYSTEM: ">Awaiting user input for handshake protocol...</TerminalLine>
             <TerminalLine prefix="STATUS: ">CHANNEL_OPEN_STABLE</TerminalLine>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Source_Identity:</label>
                <input 
                  type="text" 
                  placeholder="NAME_OR_ORG" 
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Return_Path:</label>
                <input 
                  type="email" 
                  placeholder="EMAIL_ADDRESS" 
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Transmission_Payload:</label>
              <textarea 
                rows={5}
                placeholder="ENTER_MESSAGE_HEX_OR_PLAIN" 
                className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center">
              <GlowButton className="w-full md:w-auto h-12 px-12">EXECUTE_TRANSMISSION</GlowButton>
            </div>
          </form>

          <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500">
             <div className="flex gap-4">
                <a href="#" className="hover:text-cyan-400 transition-colors">GITHUB</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">TWITTER</a>
             </div>
             <div>&copy; 2026 KAVI_V // ALL_RIGHTS_RESERVED</div>
          </footer>
        </div>
      </HudPanel>
    </section>
  );
}
