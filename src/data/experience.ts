import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "NEURAL CORE",
    role: "Lead Systems Architect",
    period: "2023 - PRESENT",
    location: "Global / Remote",
    description: [
      "Architected a distributed AI inference engine handling 1M+ requests per hour with <50ms latency.",
      "Led a team of 15 engineers in developing a multi-chain data synchronization protocol.",
      "Implemented zero-knowledge proof infrastructure for secure data exchange across healthcare platforms.",
    ],
    skills: ["Rust", "PyTorch", "Kubernetes", "gRPC", "Next.js"],
  },
  {
    company: "HYPERLINK LABS",
    role: "Founder & CTO",
    period: "2020 - 2023",
    location: "Austin, TX",
    description: [
      "Built and scaled a low-code platform for automated infrastructure deployment, reaching $2M ARR.",
      "Designed a real-time collaborative IDE used by 50k+ developers globally.",
      "Secured $5M Seed funding and scaled the engineering team from 2 to 20.",
    ],
    skills: ["Go", "AWS", "Terraform", "React", "PostgreSQL"],
  },
  {
    company: "QUANTUM SYSTEMS",
    role: "Senior Software Engineer",
    period: "2018 - 2020",
    location: "New York, NY",
    description: [
      "Developed high-frequency trading algorithms with sub-microsecond execution times.",
      "Optimized legacy C++ codebase, resulting in a 40% reduction in memory overhead.",
      "Mentored junior engineers and established CI/CD best practices.",
    ],
    skills: ["C++", "Python", "Linux Kernel", "Docker"],
  },
];
