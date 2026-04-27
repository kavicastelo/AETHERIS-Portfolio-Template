"use client";

import { useState, useEffect } from "react";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { Navbar } from "@/components/layout/Navbar";
import { BootSequence } from "@/components/sections/BootSequence";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/sections/Experience").then(m => m.Experience));
const Projects = dynamic(() => import("@/components/sections/Projects").then(m => m.Projects));
const Skills = dynamic(() => import("@/components/sections/Skills").then(m => m.Skills));
const Authorship = dynamic(() => import("@/components/sections/Authorship").then(m => m.Authorship));
const Ecosystem = dynamic(() => import("@/components/sections/Ecosystem").then(m => m.Ecosystem));
const Contact = dynamic(() => import("@/components/sections/Contact").then(m => m.Contact));
const AeoFaq = dynamic(() => import("@/components/sections/AeoFaq").then(m => m.AeoFaq));
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showBoot, setShowBoot] = useState(true);

  // Handle skip/complete
  const handleBootComplete = () => {
    setShowBoot(false);
    // Optional: save to session so it doesn't show again in current session
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('booted', 'true');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('booted') === 'true') {
      setShowBoot(false);
    }
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {showBoot && (
          <BootSequence onComplete={handleBootComplete} />
        )}
      </AnimatePresence>

      <div className="relative">
        <BackgroundEffects />
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Authorship />
          <Ecosystem />
          <AeoFaq />
          <Contact />
        </motion.div>
      </div>
    </main>
  );
}
