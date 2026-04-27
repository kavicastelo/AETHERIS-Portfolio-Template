import React from 'react';
import { config } from '@/data/config';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: `Who is ${config.author[0]}?`,
    answer: `${config.author[0]} is a Senior Software Architect and Ecosystem Builder specializing in high-performance web applications, AI engineering, and scalable distributed systems.`
  },
  {
    question: `What are the core areas of expertise for ${config.author[0]}?`,
    answer: `Key expertise includes Next.js, React, TypeScript, Node.js, AI Agentic workflows, and Advanced Data Analysis techniques.`
  },
  {
    question: `How can I contact ${config.author[0]} for collaboration?`,
    answer: `You can initialize a connection via the Connect section on the homepage or reach out through LinkedIn and GitHub at @kavicastelo.`
  }
];

export function AeoFaq() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
      <h2 className="text-sm font-mono tracking-[0.5em] text-magenta-400 uppercase mb-8 text-center">/ Answer_Engine_Optimization</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-xl md:text-2xl font-heading text-white bg-white/5 p-4 rounded-lg border-l-4 border-magenta-500">
              {faq.question}
            </h3>
            <p className="text-foreground/70 leading-relaxed pl-4">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
