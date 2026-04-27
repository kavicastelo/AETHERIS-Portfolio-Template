import { Authorship } from "@/types";

export const authorship: Authorship[] = [
  {
    type: "Book",
    title: "THE ARCHITECT'S MANIFESTO",
    publisher: "Neon Press",
    date: "2024",
    link: "#",
    excerpt: "Exploring the intersection of human intuition and algorithmic precision in the age of autonomous systems.",
    coverImage: "/assets/books/manifesto.jpg",
  },
  {
    type: "Whitepaper",
    title: "DISTRIBUTED CONSENSUS IN EDGE NETWORKS",
    publisher: "IEEE Xplore",
    date: "2022",
    link: "#",
    excerpt: "A comprehensive analysis of low-latency consensus protocols for heterogeneous device meshes.",
  },
  {
    type: "Article",
    title: "THE RISE OF THE ECOSYSTEM BUILDER",
    publisher: "TechCrunch",
    date: "2023",
    link: "#",
    excerpt: "Why the next generation of 10x engineers will be measured by the platforms they create, not the code they commit.",
  },
];
