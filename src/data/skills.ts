import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    title: "CORE SYSTEMS",
    skills: [
      { name: "Rust", proficiency: 95, icon: "rust" },
      { name: "Go", proficiency: 90, icon: "go" },
      { name: "C++", proficiency: 85, icon: "cpp" },
      { name: "Linux Arch", proficiency: 92, icon: "linux" },
    ],
  },
  {
    title: "MODERN WEB",
    skills: [
      { name: "Next.js", proficiency: 98, icon: "nextjs" },
      { name: "TypeScript", proficiency: 96, icon: "typescript" },
      { name: "Tailwind", proficiency: 95, icon: "tailwind" },
      { name: "Three.js", proficiency: 80, icon: "threejs" },
    ],
  },
  {
    title: "INFRA & AI",
    skills: [
      { name: "Kubernetes", proficiency: 88, icon: "k8s" },
      { name: "Terraform", proficiency: 90, icon: "terraform" },
      { name: "PyTorch", proficiency: 85, icon: "pytorch" },
      { name: "AWS/GCP", proficiency: 92, icon: "cloud" },
    ],
  },
];
