# 🚀 Cloud Deployment & SEO/AEO Strategy Guide

Aetheris is pre-optimized for **Static Site Generation (SSG)**. This means compiling your React application generates a optimized package of static HTML, CSS, and JavaScript files inside the `/out` directory.

You can host this portfolio on **zero-cost static servers** (Vercel, Netlify, Cloudflare Pages, or GitHub Pages) with lightning-fast performance and no server maintenance costs.

---

## 🏗️ Pre-configured Build Profile

In [`next.config.ts`](file:///e:/PROJECTS/react/portfolio-2026/next.config.ts), Aetheris is configured out-of-the-box for pure static deployment:
*   `output: 'export'`: Directs Next.js to produce static assets.
*   `images.unoptimized: true`: Disables default Next.js server-side image resizing, enabling compatibility with static platforms.
*   `trailingSlash: true`: Appends folder directories to links, ensuring static routes resolve correctly on all CDNs.

To build the static files locally:
```bash
npm run build
```
This produces a production-ready package in the [`/out`](file:///e:/PROJECTS/react/portfolio-2026/out) directory.

---

## 📡 Step-by-Step Deployment Methods

### Option A: Vercel (Recommended)
Vercel is the creator of Next.js and offers the smoothest deployment workflow.
1.  Push your code to **GitHub**, **GitLab**, or **Bitbucket**.
2.  Log in to the [Vercel Dashboard](https://vercel.com).
3.  Click **Add New** > **Project** and import your portfolio repository.
4.  Vercel automatically detects Next.js. Keep all settings default.
5.  Click **Deploy**. Every git commit will automatically trigger a new deployment.

### Option B: Netlify
1.  Log in to [Netlify Dashboard](https://netlify.com).
2.  Click **Add new site** > **Import from existing project**.
3.  Connect to GitHub and import your repository.
4.  Configure the build settings:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `out`
5.  Click **Deploy site**.

### Option C: GitHub Pages
GitHub Pages provides free static hosting directly from your repository.
1.  Open your project repository on GitHub.
2.  Navigate to **Settings** > **Pages**.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  Click **Static HTML** or use a custom Next.js build workflow. 
5.  Push your build `out` folder content to a `gh-pages` branch, or let the GitHub Action build it automatically using standard workflows.

---

## 🔍 SEO (Search Engine Optimization)

Aetheris incorporates modern SEO metadata practices natively within Next.js:
1.  **Centralized Config**: Edit metadata title, keywords, descriptions in [`src/data/config.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/data/config.ts).
2.  **Robots Controller**: [`src/app/robots.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/app/robots.ts) dictates crawling strategies and references your sitemap path.
3.  **Dynamic Sitemap**: [`src/app/sitemap.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/app/sitemap.ts) crawls your projects data file dynamically, generating links for every single project item.
4.  **Web Manifest**: [`src/app/manifest.ts`](file:///e:/PROJECTS/react/portfolio-2026/src/app/manifest.ts) configures PWA elements allowing users to "install" the portfolio on mobile home screens.

---

## 🤖 AEO (Answer Engine Optimization)

In the era of AI Search (e.g. Perplexity, ChatGPT Search, Gemini, and Claude), traditional SEO is shifting towards AEO. AI engines crawl websites to extract answers directly. Aetheris includes two features designed specifically to raise your **AI Search Footprint**:

### 1. Structure FAQs for AI Search Bots
AI scrapers rely heavily on clean Question-and-Answer structures to summarize "who a person is" or "what skills they possess." 

Open the Answer Engine Optimization module at [`src/components/sections/AeoFaq.tsx`](file:///e:/PROJECTS/react/portfolio-2026/src/components/sections/AeoFaq.tsx). It declares clear FAQ items about you using your configured metadata:
```typescript
const faqs: FaqItem[] = [
  {
    question: `Who is ${config.author[0]}?`,
    answer: `${config.author[0]} is a Senior Software Architect specializing in...`
  },
  ...
]
```
These questions map directly to queries users prompt in AI systems. Update these FAQs to match your core brand keywords!

### 2. High Semantic Density
AI scrapers value dense, well-organized technical metadata over ambiguous design fluff. The interactive tables, skills matrices, and structured metrics counters in the Hero section act as natural semantic markers that AI scrapers read easily, giving you higher topical authority.
