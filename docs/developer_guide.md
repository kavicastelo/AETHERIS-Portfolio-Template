# 💻 Aetheris Developer Architecture Guide

This manual is tailored for **developer buyers** who want to customize the design, build custom components, tweak animations, or modify the underlying systems of the Aetheris portfolio engine.

---

## 🏗️ Technical Stack & Architecture

Aetheris is built using modern, bleeding-edge web technologies:
*   **Framework**: Next.js 16 (App Router) & React 19.
*   **Styling**: Tailwind CSS v4 (using CSS-native configurations) & Custom CSS.
*   **Animation**: Framer Motion 12 (high-performance physics-based motions).
*   **Interactivity**: Client-side parsing via PapaParse & dynamic visualizations via Recharts.

---

## 📂 Source Code Layout

```text
/src
  /app                     # Next.js App Router (Page orchestration)
    /data-analysis         # The advanced Client-Side Data Analysis sub-page
    globals.css            # Central styling system (Tailwind v4 tokens)
    layout.tsx             # Root page wrappers, HTML structures, Fonts
    page.tsx               # Homepage orchestration (combines sections)
    manifest.ts / sitemap  # SEO search engine crawl configs
  /components
    /analysis              # Interactive CSV/JSON dashboard client components
    /layout                # Page wraps: BackgroundEffects, Grid lines, Navbar
    /sections              # Modular, semantic sections (Hero, Projects, Skills)
    /seo                   # Metadata injectors and Schema.org scripts
    /ui                    # Atomic Cyberpunk/HUD UI Kit components
  /data                    # Core customizable content configurations (TS/JSON)
  /lib                     # Utility helpers (Tailwind class mixers, etc.)
  /styles                  # Extra global stylesheet assets
  /types                   # Rigid TypeScript contracts enforcing schemas
```

---

## 🎨 Cyberpunk Theme & Tailwind v4 Customization

Aetheris features an advanced **Gridcn UI** layout system themed with native CSS/Tailwind variables.

### Modifying Colors & Glows
To edit the colors, open [`src/styles/globals.css`](file:///e:/PROJECTS/react/portfolio-2026/src/styles/globals.css). The template uses Tailwind CSS v4's direct `@theme` layer:

```css
@theme {
  --color-background: #05080a;        /* Core Deep Space Background */
  --color-foreground: #e1e7eb;        /* Standard text */
  
  --color-neon-cyan: #00f3ff;          /* Cyberpunk Cyan Accent */
  --color-neon-magenta: #ff00ff;       /* Cyberpunk Pink Accent */
  --color-neon-blue: #0070f3;          /* Secondary Blue Accent */
  --color-neon-violet: #7928ca;        /* Accent Purple */
}
```

### Core Utility Styles in `globals.css`
*   `.neon-border`: Provides a glassy glassmorphism panel backdropped by a subtle cyan glow.
*   `.neon-text-cyan` & `.neon-text-magenta`: Apply glowing typography filters mimicking hardware displays.
*   `.grid-background`: Renders the high-performance CSS line mesh. Grid size (`--grid-size`) and color opacity (`--grid-color`) can be tweaked dynamically.

---

## 🧩 UI Kit (Atomic Components)

Aetheris ships with 4 custom-crafted HUD UI blocks located in `src/components/ui/` for instant modular building:

### 1. `HudPanel`
Creates a vintage, military-grade tactical panel with ornamental brackets, a custom header, and status messages.
```tsx
import { HudPanel } from "@/components/ui/HudPanel";

<HudPanel title="CORE_COMPILER_V3" status="ACTIVE">
  <p>Your custom content here...</p>
</HudPanel>
```

### 2. `NeonCard`
Renders a glowing card with responsive hover borders and interactive scales. Excellent for stats, listings, or mini items.
```tsx
import { NeonCard } from "@/components/ui/NeonCard";

<NeonCard glowColor="cyan" className="p-6">
  <h4>System Activity</h4>
</NeonCard>
```

### 3. `GlowButton`
Renders a glowing cyberpunk call-to-action button, matching hover events with click handlers.
```tsx
import { GlowButton } from "@/components/ui/GlowButton";

<GlowButton onClick={() => console.log('Initialized')}>
  EXECUTE PROGRAM
</GlowButton>
```

### 4. `TerminalLine`
Prints a flashing terminal command line simulator. Useful for loaders, boot sequences, or footers.
```tsx
import { TerminalLine } from "@/components/ui/TerminalLine";

<TerminalLine prefix="$" text="Initializing sub-systems..." delay={0.5} />
```

---

## 🔄 Boot Sequence & State Machine

The homepage incorporates a cinematic retro hardware boot sequence (`BootSequence.tsx`). 

### Customizing Boot Messages
To change the system messages printed during startup, edit [`src/components/sections/BootSequence.tsx`](file:///e:/PROJECTS/react/portfolio-2026/src/components/sections/BootSequence.tsx):
```typescript
const bootLines = [
  "AETHERIS BIOS v2.026 - (C) 2026 KAVI CORP.",
  "RAM SPEED: 6400MHz [OK]",
  "ESTABLISHING CONTEXT ENVELOPE...",
  "STATUS: ACCESS GRANTED.",
];
```

### Skipping Boot Sequence
The boot sequence saves state in `sessionStorage` under `'booted'`. Once a user has loaded the site, returning to the page within the same session will skip the intro boot sequences for a seamless and faster surfing experience:
```typescript
// Controlled inside src/app/page.tsx
useEffect(() => {
  if (typeof window !== 'undefined' && sessionStorage.getItem('booted') === 'true') {
    setShowBoot(false);
  }
}, []);
```

---

## ⚡ Framer Motion Animations

Animations use highly optimized declarative transitions.
*   **Entrance motions** on the page use `AnimatePresence` to coordinate exit transitions when boot sequences terminate.
*   **Interactions** use physics spring motions:
```typescript
transition={{ type: "spring", stiffness: 300, damping: 20 }}
```

---

## 📦 Dynamic Code Splitting & Performance

To optimize initial paint times and maximize Lighthouse performance scores, larger components (such as graphs or network diagrams) are lazily loaded.

```typescript
// Implemented in src/app/page.tsx
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/components/sections/Experience").then(m => m.Experience));
const Projects = dynamic(() => import("@/components/sections/Projects").then(m => m.Projects));
const Skills = dynamic(() => import("@/components/sections/Skills").then(m => m.Skills));
```
This guarantees the homepage renders instantly while sub-modules load seamlessly in the background.
