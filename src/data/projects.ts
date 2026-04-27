import { Project } from "@/types";

export const projects: Project[] = [
  {
    "id": "p_qdc",
    "title": "QUADRANT DRIFT CIPHER",
    "description": "An interactive cryptography lab showcasing the evolution of a custom cipher through multiple algorithmic generations.",
    "longDescription": "Quadrant Drift Cipher (QDC) is a browser-based security lab designed to teach modern cryptography concepts through hands-on experimentation. It demonstrates how encryption algorithms evolve by iterating over structural weaknesses across three cipher generations. The project includes tools for encryption/decryption, statistical analysis, and steganography, enabling users to explore frequency analysis, entropy, and attack surfaces in a visual and intuitive environment.",
    "image": "/assets/projects/qdc.jpg",
    "tech": ["TypeScript", "JavaScript", "Web Crypto", "Canvas API"],
    "category": "Security",
    "metrics": [
      { "label": "CIPHER VERSIONS", "value": "3" },
      { "label": "MODULES", "value": "5+" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/quadrant-drift-cipher",
      "demo": "https://qdc-en.netlify.app/"
    },
    "featured": true
  },
  {
    "id": "p_acd",
    "title": "ADVANCED CACHE DESIGN",
    "description": "A TypeScript-based implementation of modern cache eviction algorithms used in large-scale systems.",
    "longDescription": "Advanced Cache Design is a systems-focused project that implements industry-grade caching strategies such as LRU, LFU, ARC, TinyLFU, Segmented LRU, and Count-Min Sketch. Designed as both a learning resource and a performance-oriented toolkit, it demonstrates how modern distributed systems optimize memory usage and latency through intelligent eviction policies. The project emphasizes O(1) operations, algorithmic clarity, and real-world applicability, reflecting techniques used in platforms like Redis, Cloudflare, and high-performance JVM caches.",
    "image": "/assets/projects/advanced-cache.jpg",
    "tech": ["TypeScript", "Data Structures", "Algorithms", "Performance Engineering"],
    "category": "Systems",
    "metrics": [
      { "label": "ALGORITHMS", "value": "6+" },
      { "label": "COMPLEXITY", "value": "O(1)" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/advanced-cache-design",
      "demo": "https://kavicastelo.github.io/advanced-cache-design/"
    },
    "featured": true
  },
  {
    "id": "p_agp",
    "title": "AI GEOSPATIAL PLATFORM",
    "description": "A scalable platform for analyzing, visualizing, and extracting insights from geospatial data using AI.",
    "longDescription": "AI Geospatial Platform is a full-stack system designed to process and analyze spatial data through machine learning and modern mapping technologies. It integrates satellite imagery, vector datasets, and real-time geographic inputs into a unified analytics pipeline. The platform enables tasks such as spatial prediction, pattern detection, and environmental monitoring using AI models, while providing interactive visualization layers for intuitive exploration. Inspired by emerging GeoAI frameworks, it abstracts complex workflows like data ingestion, preprocessing, model inference, and geospatial rendering into a cohesive developer-friendly system.",
    "image": "/assets/projects/geoai.jpg",
    "tech": ["Python", "GeoJSON", "Leaflet", "Machine Learning", "GIS"],
    "category": "AI",
    "metrics": [
      { "label": "DATA SOURCES", "value": "Multi" },
      { "label": "PIPELINES", "value": "End-to-End" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/ai-geospatial-platform",
      "demo": "https://urban-air-quality-monitor.netlify.app/"
    },
    "featured": true
  },
  {
    "id": "p_nasm_mm",
    "title": "NASM X86 MEMORY MANAGEMENT",
    "description": "A low-level systems project demonstrating manual memory management techniques in x86-64 assembly.",
    "longDescription": "NASM x86 Assembly Memory Management is a systems-level project that explores how memory allocation works beneath high-level abstractions. Implemented in x86-64 assembly on Windows, it includes multiple approaches such as static memory pools, heap-based allocation, and a custom first-fit allocator. The project highlights how operating systems and runtimes manage memory by exposing raw allocation strategies, pointer arithmetic, and manual deallocation, offering a deep understanding of performance, fragmentation, and memory control at the hardware-near level.",
    "image": "/assets/projects/nasm-memory.jpg",
    "tech": ["x86-64 Assembly", "NASM", "Windows API", "MinGW-w64"],
    "category": "Systems",
    "metrics": [
      { "label": "ALLOCATION STRATEGIES", "value": "3" },
      { "label": "ABSTRACTION LEVEL", "value": "Bare Metal" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/nasm-x86-assembly-memory-management",
      "demo": "https://kavicastelo.github.io/nasm-x86-assembly-memory-management/"
    },
    "featured": false
  },
  {
    "id": "p_asm_tut",
    "title": "X86 ASSEMBLY TUTORIAL",
    "description": "A hands-on tutorial series for learning x86 assembly through practical examples and low-level concepts.",
    "longDescription": "X86 Assembly Tutorial is an educational project designed to introduce low-level programming using NASM and the x86 architecture. It walks through core concepts such as registers, memory addressing, control flow, and system calls, supported by runnable code examples. The project emphasizes understanding how high-level constructs translate into machine-level instructions, covering fundamentals like data movement, arithmetic operations, and interrupt handling. Built as a step-by-step learning resource, it bridges the gap between theoretical computer architecture and real executable programs.",
    "image": "/assets/projects/assembly-tutorial.jpg",
    "tech": ["x86 Assembly", "NASM", "Low-Level Programming", "Computer Architecture"],
    "category": "Systems",
    "metrics": [
      { "label": "LESSONS", "value": "Multi-Part" },
      { "label": "LEVEL", "value": "Beginner → Intermediate" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/assembly-tutorial-x86",
      "demo": "https://kavicastelo.github.io/assembly_basics/"
    },
    "featured": false
  },
  {
    "id": "p_x86_calc",
    "title": "X86 ASSEMBLY CALCULATOR",
    "description": "An advanced calculator built in x86-64 assembly supporting integer and floating-point operations.",
    "longDescription": "X86 Assembly Calculator is a low-level systems project implemented in NASM for Windows that demonstrates how complex mathematical operations can be executed without high-level abstractions. The program supports both integer and floating-point modes, including arithmetic operations like addition, subtraction, multiplication, division, modulus, and exponentiation, as well as advanced functions such as trigonometry and square root. Designed as a terminal-based interactive tool, it highlights direct CPU-level computation, FPU usage, and manual control over program flow, showcasing the power and complexity of assembly programming.",
    "image": "/assets/projects/x86-calculator.jpg",
    "tech": ["x86-64 Assembly", "NASM", "FPU", "MinGW-w64"],
    "category": "Systems",
    "metrics": [
      { "label": "OPERATIONS", "value": "10+" },
      { "label": "MODES", "value": "Integer + Float" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/x86-assembly-calculator",
      "demo": "https://kavicastelo.github.io/x86-assembly-calculator/"
    },
    "featured": false
  },
  {
    "id": "p_portfolio_2026",
    "title": "PORTFOLIO 2026",
    "description": "A modern developer portfolio showcasing projects, systems thinking, and interactive UI design.",
    "longDescription": "Portfolio 2026 is a next-generation personal website designed to present projects, technical depth, and design aesthetics in a cohesive and interactive format. Built with a focus on performance and user experience, it integrates smooth animations, responsive layouts, and structured project showcases. The platform acts as a central hub for systems projects, low-level programming work, and experimental builds, highlighting both engineering rigor and visual presentation. Inspired by modern developer portfolios, it emphasizes clarity, interactivity, and strong personal branding across the full stack.",
    "image": "/assets/projects/portfolio-2026.jpg",
    "tech": ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    "category": "Web",
    "metrics": [
      { "label": "PROJECTS", "value": "10+" },
      { "label": "UI SYSTEM", "value": "Interactive" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/portfolio-2026",
      "demo": "https://kavindu.talnova.io"
    },
    "featured": true
  },
  {
    "id": "p_sdr",
    "title": "SILENT DELIVERY RECEIPTS",
    "description": "A security-focused exploration of silent delivery receipts and their implications in modern messaging systems.",
    "longDescription": "Silent Delivery Receipts is a security research project that investigates how delivery receipt mechanisms in messaging systems can be exploited for passive user monitoring. Inspired by real-world vulnerabilities in platforms like WhatsApp and Signal, the project demonstrates how specially crafted messages can trigger delivery acknowledgements without notifying the recipient. This enables attackers to infer sensitive metadata such as user activity, device state, and online presence. The project highlights the broader privacy risks of seemingly harmless protocol features and advocates for more secure messaging design.",
    "image": "/assets/projects/silent-delivery.jpg",
    "tech": ["Networking", "Security Research", "Protocol Analysis", "Python"],
    "category": "Security",
    "metrics": [
      { "label": "FOCUS", "value": "Privacy Exploitation" },
      { "label": "ATTACK VECTOR", "value": "Delivery Receipts" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/silent-delivery-receipts",
    },
    "featured": true
  },
  {
    "id": "p_flappy_ai",
    "title": "FLAPPY BIRD AI",
    "description": "A browser-based Flappy Bird clone that learns to play itself using Deep Q-Learning.",
    "longDescription": "Flappy Bird AI is an interactive game and machine learning experiment built with Phaser 3 and TensorFlow.js. It implements Deep Q-Learning (DQN), a reinforcement learning algorithm where an agent learns optimal actions through rewards and penalties. The AI observes the game state—such as bird position and pipe gaps—and iteratively improves its policy to survive longer and achieve higher scores. Running entirely in the browser, the project demonstrates real-time training, decision-making, and the practical application of reinforcement learning in a visual and engaging environment.",
    "image": "/assets/projects/flappy-ai.jpg",
    "tech": ["JavaScript", "Phaser 3", "TensorFlow.js", "Reinforcement Learning"],
    "category": "AI",
    "metrics": [
      { "label": "ALGORITHM", "value": "DQN" },
      { "label": "ENVIRONMENT", "value": "Browser" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/FlappyBirdAI",
      "demo": "https://kavicastelo.github.io/FlappyBirdAI/"
    },
    "featured": true
  },
  {
    "id": "p_eraser_renderer",
    "title": "ERASER RENDERER",
    "description": "A lightweight experimental rendering engine focused on masking, erasure effects, and real-time visual compositing.",
    "longDescription": "Eraser Renderer is a graphics-focused experimental project exploring real-time rendering techniques for selective removal, masking, and compositing of visual elements. It demonstrates low-level control over rendering pipelines, potentially leveraging canvas or GPU-based approaches to simulate erasing, blending, and dynamic scene updates. The project serves as both a learning platform for graphics programming and a foundation for advanced visual editing tools.",
    "image": "/assets/projects/eraser-renderer.jpg",
    "tech": ["JavaScript", "Canvas API", "WebGL", "Graphics Programming"],
    "category": "OSS",
    "metrics": [
      { "label": "MODULES", "value": "Core Renderer" },
      { "label": "FOCUS", "value": "Real-time Effects" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/eraser-renderer",
      "demo": "https://eraser-renderer-apps.vercel.app/"
    },
    "featured": true
  },
  {
    "id": "p_chat_app",
    "title": "IMAGE-BASED CHAT APP",
    "description": "A full-stack real-time chat platform with rich social features, user management, and data analytics.",
    "longDescription": "Image-Based Chat App is a feature-rich web messaging platform that supports real-time communication through private chats, group conversations, and public chat rooms. It includes a complete user system with authentication, friend requests, and profile management. The application also integrates administrative tools such as dashboards, reporting, and data visualization, demonstrating both backend data handling and frontend interactivity. Built with a combination of PHP, MySQL, and real-time communication technologies, it reflects a strong understanding of full-stack architecture and scalable chat system design.",
    "image": "/assets/projects/chat-app.jpg",
    "tech": [
      "PHP",
      "JavaScript",
      "jQuery",
      "Ajax",
      "MySQL",
      "Bootstrap",
      "Ratchet",
      "PHPMailer",
      "R (Data Visualization)"
    ],
    "category": "Mobile",
    "metrics": [
      { "label": "FEATURES", "value": "Real-time Chat + Social System" },
      { "label": "ARCH", "value": "Client-Server" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/image-based-chat-app",
      "demo": "https://kavicastelo.github.io/image-based-chat-app/"
    },
    "featured": true
  },
  {
    "id": "p3",
    "title": "ROCKET RUST WEB SERVER",
    "description": "A high-performance REST API server built in Rust with type-safe routing and database integration.",
    "longDescription": "Rocket Rust Web Server is a backend-focused project that demonstrates building a robust and scalable REST API using Rust. Leveraging the Rocket framework for type-safe routing and request handling, the system integrates with PostgreSQL through the Diesel ORM to perform efficient and structured database operations. The project implements full CRUD functionality, environment-based configuration, and migration workflows, reflecting real-world backend service design. It highlights strengths in systems programming, performance-oriented development, and safe concurrency using Rust’s ecosystem.",
    "image": "/assets/projects/rocket-server.jpg",
    "tech": [
      "Rust",
      "Rocket",
      "Diesel",
      "PostgreSQL",
      "REST API"
    ],
    "category": "Infra",
    "metrics": [
      { "label": "ARCH", "value": "RESTful API" },
      { "label": "DB", "value": "PostgreSQL + ORM" }
    ],
    "links": {
      "github": "https://github.com/kavicastelo/rocket-rust-web-server",
      "demo": "https://kavicastelo.github.io/rocket-rust-web-server/"
    },
    "featured": true
  },
];
