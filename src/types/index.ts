export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  siteUrl: string;
  themeColor: string;
  author: string[];
  keywords: string[];
  ogImage: string;
  navigation: NavItem[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  email: string;
  whatsapp?: string;
  location: string;
  stats: Stat[];
  socials: SocialLink[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  location?: string;
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tech: string[];
  category: "AI" | "Web" | "Infra" | "OSS" | "Startup" | "Mobile" | "Security" | "Systems";
  metrics?: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
    external?: string;
  };
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; proficiency: number; icon: string }[];
}

export interface Authorship {
  type: "Book" | "Article" | "Essay" | "Whitepaper";
  title: string;
  publisher: string;
  date: string;
  link: string;
  excerpt: string;
  coverImage?: string;
}

export interface EcosystemNode {
  id: string;
  name: string;
  description: string;
  type: "Community" | "Platform" | "Tool" | "Network";
  connections: string[]; // IDs of other nodes
  url?: string;
  icon?: string;
}
