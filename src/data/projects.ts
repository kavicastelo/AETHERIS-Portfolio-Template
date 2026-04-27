import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "AETHERIS CORE",
    description: "An AI-driven operating system abstraction layer for distributed edge computing.",
    longDescription: "Aetheris Core is a revolutionary system that abstracts complex hardware and network topologies into a unified computational mesh. It uses decentralized consensus algorithms to manage resources efficiently across heterogeneous environments.",
    image: "/assets/projects/aetheris.jpg",
    tech: ["Rust", "Wasm", "Libp2p", "AI"],
    category: "Infra",
    metrics: [
      { label: "NODES", value: "12k" },
      { label: "THROUGHPUT", value: "2GB/s" }
    ],
    links: { github: "#", demo: "#" },
    featured: true,
  },
  {
    id: "p2",
    title: "SYNAPSE AI",
    description: "Real-time neural network training visualizer and debugger for complex LLM architectures.",
    image: "/assets/projects/synapse.jpg",
    tech: ["Python", "React", "Three.js", "PyTorch"],
    category: "AI",
    metrics: [
      { label: "USERS", value: "50k" },
      { label: "STARS", value: "8.5k" }
    ],
    links: { github: "#", external: "#" },
    featured: true,
  },
  {
    id: "p3",
    title: "VORTEX BRIDGE",
    description: "Cross-chain liquidity aggregator with MEV protection and hyper-speed settlement.",
    image: "/assets/projects/vortex.jpg",
    tech: ["Solidity", "TypeScript", "Node.js"],
    category: "Web",
    links: { demo: "#" },
    featured: false,
  },
  {
    id: "p4",
    title: "OMEGA CLOUD",
    description: "Bare-metal cloud provisioning engine for high-performance computing clusters.",
    image: "/assets/projects/omega.jpg",
    tech: ["Go", "Terraform", "Ansible"],
    category: "Infra",
    links: { github: "#" },
    featured: false,
  },
];
