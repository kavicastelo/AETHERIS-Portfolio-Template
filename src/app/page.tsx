"use client";

import { useState, useEffect } from "react";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { Navbar } from "@/components/layout/Navbar";
import { BootSequence } from "@/components/sections/BootSequence";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Authorship } from "@/components/sections/Authorship";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Contact } from "@/components/sections/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {!isBooted && (
          <BootSequence onComplete={() => setIsBooted(true)} />
        )}
      </AnimatePresence>

      <div className={isBooted ? "opacity-100" : "opacity-0 invisible h-0"}>
        <BackgroundEffects />
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isBooted ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Authorship />
          <Ecosystem />
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
