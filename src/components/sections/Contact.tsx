"use client";

import { motion } from "framer-motion";
import { HudPanel } from "@/components/ui/HudPanel";
import { GlowButton } from "@/components/ui/GlowButton";
import { TerminalLine } from "@/components/ui/TerminalLine";

import { profile } from "@/data/profile";

export function Contact() {
  const handleWhatsApp = () => {
    if (profile.whatsapp) {
      window.open(profile.whatsapp, "_blank");
    }
  };

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

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Source_Identity:</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="NAME_OR_ORG" 
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Return_Path:</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="EMAIL_ADDRESS" 
                  className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-cyan-500 uppercase px-1">Transmission_Payload:</label>
              <textarea 
                name="message"
                required
                rows={5}
                placeholder="ENTER_MESSAGE_HEX_OR_PLAIN" 
                className="w-full bg-black/40 border border-white/10 p-3 font-mono text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <GlowButton type="submit" className="w-full md:w-auto h-12 px-12">EXECUTE_TRANSMISSION</GlowButton>
              {profile.whatsapp && (
                <GlowButton 
                  type="button" 
                  variant="outline" 
                  onClick={handleWhatsApp}
                  className="w-full md:w-auto h-12 px-12"
                >
                  DIRECT_WHATSAPP
                </GlowButton>
              )}
            </div>
          </form>

          <footer className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-slate-500">
             <div className="flex gap-4">
                {profile.socials.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {social.platform.toUpperCase()}
                  </a>
                ))}
             </div>
             <div>&copy; {new Date().getFullYear()} {profile.name} // ALL_RIGHTS_RESERVED</div>
          </footer>
        </div>
      </HudPanel>
    </section>
  );
}
