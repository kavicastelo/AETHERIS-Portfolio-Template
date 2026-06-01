# 🛠️ Aetheris Content Customization Manual

Welcome to the Aetheris Customization Manual! This guide is designed for **both non-technical buyers and developers**. 

You do not need to write complex React code to update your portfolio. The entire content of your website is centralized in simple, human-readable data files inside the `src/data/` directory.

---

## 📂 Content Customization Map

Here is a quick reference table showing which visual section of your portfolio maps to which data file:

| Section on Website | Description | File to Edit |
| :--- | :--- | :--- |
| **Site Info & SEO** | Meta titles, descriptions, page head keywords, navigation menu items. | [`src/data/config.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/config.ts) |
| **Identity / Bio** | Your name, title, bio paragraph, avatar photo, and contact email. | [`src/data/profile.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/profile.ts) |
| **Stats Counters** | The neon statistics grids shown in the Hero section (e.g. Projects Shipped, Lines of Code). | [`src/data/profile.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/profile.ts) |
| **Social Links** | Social media icon links (GitHub, LinkedIn, Twitter, etc.). | [`src/data/profile.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/profile.ts) |
| **Mission Logs** | Interactive professional work history milestones (Experience). | [`src/data/experience.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/experience.ts) |
| **Systems Grid** | The interactive grid showcasing your projects with filters and statistics. | [`src/data/projects.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/projects.ts) |
| **Tech Matrix** | The progress indicators representing your skills divided by domains. | [`src/data/skills.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/skills.ts) |
| **Publications** | Books, research papers, articles, or essays you have published. | [`src/data/authorship.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/authorship.ts) |
| **Ecosystem Map** | The modular startup/product node network showcasing your platforms. | [`src/data/ecosystem.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/ecosystem.ts) |

---

## ✍️ Step-by-Step Customization

### 1. Basic Configurations (`config.ts`)
Open [`src/data/config.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/config.ts). This file controls your site's SEO details and primary navigation menu.

```typescript
export const config: SiteConfig = {
  title: "AETHERIS | Core Operating System", // Browser Tab Title
  description: "Advanced Personal Portfolio...", // Search Engine Description
  siteUrl: "https://yourdomain.com",           // Your live URL
  themeColor: "#00f3ff",                       // Browser UI accent color
  author: ["Your Name", "Nickname"],          // Authors list
  keywords: ["Software Architect", "AI Dev"],  // SEO meta keywords
  ogImage: "/og-image.png",                    // Share thumbnail preview (placed in /public/)
  navigation: [                                // Sidebar Navigation links
    { label: "INDEX", href: "#hero", id: "01" },
    ...
  ],
};
```

> [!TIP]
> **SEO Keywords & Title:** Choose keywords that describe your specific engineering niche so that you rank higher in search and answer engines.

---

### 2. Identity, Bio, & Stats (`profile.ts`)
Open [`src/data/profile.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/profile.ts) to update your personal details and homepage metrics counters.

#### Updating Profile Details
*   **name**: Your full name or handle (e.g. `KAVI C.`).
*   **title**: Your official designation (e.g. `Principal Software Architect`).
*   **bio**: A paragraph highlighting your systems engineering philosophy and expertise.
*   **avatarUrl**: The profile image path (save your photo inside the [`/public/assets/`](file:///e:/PROJECTS/react/portfolio-2026/public) directory and link it here, e.g., `/assets/my-photo.jpg`).

#### Adjusting Statistics Grids
Aetheris showcases 6 interactive stats cells in the hero block. Change their values and suffixes to match your achievements:
```typescript
stats: [
  { label: "PROJECTS SHIPPED", value: "120", suffix: "+" },
  { label: "SYSTEM UPTIME", value: "99.9", suffix: "%" },
  { label: "LINES OF CODE", value: "2.0", suffix: "M" },
  ...
]
```

#### Social Media Profiles
Change the URLs of your social networks. Available icon keywords are: `"github"`, `"linkedin"`, `"twitter"`, `"instagram"`, `"facebook"`, `"leetcode"`, `"medium"`.
```typescript
socials: [
  { platform: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
]
```

---

### 3. Work History logs (`experience.ts`)
Open [`src/data/experience.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/experience.ts). The template formats work experiences as an interactive timeline resembling operating system events logs.

```typescript
export const experience: Experience[] = [
  {
    company: "Talnova",
    role: "Co-Founder & CEO",
    period: "Oct 2024 - Present",
    location: "Helsinki, Finland",
    description: [
      "Co-founded an international HR-tech startup...",
      "Built and scaled a distributed team of 40+ members...",
    ],
    skills: ["Leadership", "SaaS", "Team Building"] // Mini tags visible in each row
  },
]
```

---

### 4. Project Showcase (`projects.ts`)
Open [`src/data/projects.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/projects.ts). The template renders a high-performance grid layout with instant tagging filters.

```typescript
export const projects: Project[] = [
  {
    "id": "p_unique_id",
    "title": "SYSTEM PROJECT NAME",
    "description": "Short summary card description.",
    "longDescription": "Detailed overview of the engineering, algorithms, and features (shown when clicked).",
    "image": "/assets/projects/my-project-preview.jpg", // Store screenshots in public/assets/projects/
    "tech": ["TypeScript", "Next.js", "Redis"],
    "category": "Systems", // Options: "AI", "Web", "Infra", "OSS", "Startup", "Mobile", "Security", "Systems"
    "metrics": [
      { "label": "SPEEDUP", "value": "10x" },
      { "label": "LATENCY", "value": "<5ms" }
    ],
    "links": {
      "github": "https://github.com/...",
      "demo": "https://..."
    },
    "featured": true // Set true to feature on top of the portfolio landing page
  },
]
```

---

### 5. Technical Skill Matrix (`skills.ts`)
Open [`src/data/skills.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/skills.ts). Skills are separated into beautiful, visual categories displaying name and a colored proficiency percentage indicator.

```typescript
export const skills: SkillCategory[] = [
  {
    title: "CORE SYSTEMS", // Column Name
    skills: [
      { name: "JavaScript", proficiency: 95, icon: "javascript" },
      { name: "Rust", proficiency: 65, icon: "rust" },
    ],
  },
]
```

---

### 6. Published Works (`authorship.ts`)
Open [`src/data/authorship.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/authorship.ts). Showcase your papers, books, patents, or whitepapers.

```typescript
export const authorship: Authorship[] = [
  {
    type: "Article", // Options: "Book" | "Article" | "Essay" | "Whitepaper"
    title: "Simulating the Real World Through Brain-Computer Interfaces",
    publisher: "TechRxiv",
    date: "2025",
    link: "https://...",
    excerpt: "Detailed abstract or short summary of what your publication represents...",
  },
]
```

---

### 7. Interactive Startup / Project Ecosystem (`ecosystem.ts`)
Open [`src/data/ecosystem.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/ecosystem.ts). This maps an interactive, live network chart demonstrating platforms, tools, and connections between systems you built.

```typescript
export const ecosystem: EcosystemNode[] = [
  {
    id: "t1",
    name: "CORE PLATFORM",
    description: "Main HR SaaS system core.",
    type: "Platform", // Options: "Platform" | "Tool" | "Community" | "Network"
    connections: ["t2", "t3"], // Links this node visually to other node IDs in the network
    url: "https://myplatform.com",
  },
  {
    id: "t2",
    name: "SECONDARY TOOL",
    description: "ATS extension tool.",
    type: "Tool",
    connections: ["t1"],
    url: "https://tool.myplatform.com",
  },
]
```

---

## 🔍 Verifying Changes Local Dev
After making your updates, boot up the local preview:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. All updates will render instantly with hot reloading!
