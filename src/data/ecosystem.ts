import { EcosystemNode } from "@/types";

export const ecosystem: EcosystemNode[] = [
  {
    id: "e1",
    name: "AETHERIS DAO",
    description: "A decentralized community of systems architects and protocol engineers.",
    type: "Community",
    connections: ["e2", "e3"],
    url: "#",
  },
  {
    id: "e2",
    name: "OPEN-MESH PLATFORM",
    description: "The core infrastructure stack powering decentralized edge computing.",
    type: "Platform",
    connections: ["e1", "e4", "e5"],
    url: "#",
  },
  {
    id: "e3",
    name: "CYBER-ACADEMY",
    description: "An elite technical training ground for the next generation of builders.",
    type: "Community",
    connections: ["e1"],
    url: "#",
  },
  {
    id: "e4",
    name: "TERMINAL UI KIT",
    description: "High-performance HUD components for modern web applications.",
    type: "Tool",
    connections: ["e2"],
    url: "#",
  },
  {
    id: "e5",
    name: "NODE-STATION",
    description: "Hardware-agnostic monitoring system for distributed nodes.",
    type: "Tool",
    connections: ["e2"],
    url: "#",
  },
];
