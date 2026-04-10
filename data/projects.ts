export type ProjectCategory = "ai-product" | "saas-platform" | "full-stack";

export interface CardData {
  title: string;
  summary: string;
  description: string;
  outcome: string;
  techStack: string[];
  category?: ProjectCategory;
}

export const stats = [
  { value: "27+", label: "Years Building Products" },
  { value: "4", label: "AI-Powered Products" },
  { value: "3", label: "Enterprise AI Systems" },
  { value: "7+", label: "Production Deployments" },
];

export const techPills = [
  "Claude API",
  "Gemini",
  "Copilot Studio",
  "Power BI",
  "Databricks",
  "Next.js",
  "Supabase",
  "Firebase",
  "Vercel",
];

export const enterpriseProjects: CardData[] = [
  {
    title: "Strategic Document Pipeline & Automated Reporting",
    summary:
      "AI pipeline that turns strategic documents into team-level work breakdowns, Jira Epics, Stories and tasks, Confluence pages, and a document suite",
    description:
      "Strategy-to-execution pipeline. Generates PRDs, BRDs, PRFAQs, Product Positioning docs, QA Testing Plans, and Opportunity Briefs from strategic inputs. Outputs flow into Jira as structured epics, stories, and tasks, with supporting documentation in Confluence.",
    outcome:
      "Collapses weeks of planning into a structured, repeatable flow.",
    techStack: [
      "Microsoft Copilot",
      "Copilot Studio",
      "Power BI",
      "Databricks",
      "Microsoft Teams",
    ],
  },
  {
    title: "AI-Assisted Knowledge Base & Content Operations",
    summary:
      "Single-source knowledge base with AI-powered downstream content generation",
    description:
      "Human-authored single-source KB. AI pipelines generate go-to-market documents, sales training materials, and SharePoint reports. Databricks integration in progress for operational data enrichment and monthly business reports.",
    outcome:
      "One source document spins out training decks, GTM materials, and reports without duplicating effort.",
    techStack: [
      "Microsoft Copilot",
      "Copilot Studio",
      "SharePoint",
      "Databricks",
    ],
  },
  {
    title: "AI Agents for FAQ & KB Content Generation",
    summary:
      "AI agents that generate and maintain FAQ content from source docs and policy updates",
    description:
      "Agents produce FAQ content and KB articles from source docs, eliminating the manual authoring bottleneck.",
    outcome: "Keeps knowledge bases current without manual content authoring.",
    techStack: ["Microsoft Copilot", "Copilot Studio"],
  },
  {
    title: "Interactive Prototyping & Stakeholder Alignment",
    summary:
      "Replaced static handoffs with iterative, AI-assisted prototyping",
    description:
      "Rapid functional prototypes for user testing, stakeholder interviews, and dev team alignment. Replaced static specs with working models. Cut miscommunication and rework across product and design teams.",
    outcome:
      "Stakeholders test real interactions instead of interpreting specs.",
    techStack: ["Lovable", "Replit", "Claude Code", "Figma", "Figma Make"],
  },
];

export const products: CardData[] = [
  {
    title: "Website Builder",
    category: "ai-product",
    summary:
      "Claude generates production-ready websites from a single form",
    description:
      "AI-powered platform for local service businesses. User picks industry, fills a form, and Claude generates a custom HTML site in under a minute. Includes lead capture, contact forms, and claim flow. Each site is unique, not a template fill-in.",
    outcome:
      "Visitors submit inquiries, business owners get notified via email.",
    techStack: [
      "Claude API",
      "Next.js 16",
      "Supabase",
      "Vercel Blob",
      "Resend",
    ],
  },
  {
    title: "Automated Web Platform",
    category: "ai-product",
    summary:
      "Claude Code Skill that scrapes, redesigns, and deploys customer websites end-to-end",
    description:
      "A Claude Code Skill that takes a website URL, pulls all content into local files, restructures the page, and generates new HTML from a chosen design template. Built sites are posted to a portfolio page for customer approval. On approval, the platform spins up a dedicated Vercel instance, creates a GitHub repo for the site, and connects an email and web form to GitHub automation so customers can request changes without touching code.",
    outcome:
      "The foundation of a fully automated web platform covering scrape, deploy, and ongoing customer-driven updates.",
    techStack: [
      "Claude Code",
      "Vercel",
      "GitHub API",
      "Next.js 16",
      "Resend",
    ],
  },
  {
    title: "Hot Laps Event Finder",
    category: "ai-product",
    summary:
      "AI-powered motorsports event discovery using Google Gemini",
    description:
      'Natural language event search powered by Gemini. Users describe what they want; the app surfaces track days, races, and experiences from a real-time Firebase database.',
    outcome:
      'Bridges "I want to do a track day near Atlanta next month" to a bookable event.',
    techStack: ["Google Gemini API", "React 19", "Firebase", "Resend"],
  },
  {
    title: "Hot Lap Rentals",
    category: "saas-platform",
    summary:
      "Track day car rental marketplace — auth, bookings, AI, Cloud Run",
    description:
      "Marketplace with vehicle listings, multi-role auth (admin, business, personal), booking flows, and admin dashboard. Containerized on Cloud Run with staging/production pipelines. Claude AI for content and recommendations. E2E tested with Playwright.",
    outcome: "Production platform serving real users.",
    techStack: [
      "Next.js 16",
      "Firebase",
      "Google Cloud Run",
      "Claude AI",
      "Playwright",
      "Resend",
    ],
  },
  {
    title: "GymSite",
    category: "saas-platform",
    summary:
      "Gym class scheduling and booking with payments and AI",
    description:
      "Local gym platform handling the booking lifecycle: class discovery, scheduling, Stripe payments, Supabase auth, and AI features via Anthropic SDK.",
    outcome: "Booking-to-payment flow for a real business.",
    techStack: [
      "Next.js 16",
      "Supabase",
      "Stripe",
      "Anthropic AI SDK",
      "Resend",
    ],
  },
  {
    title: "HLR Contracts",
    category: "full-stack",
    summary:
      "E-signature rental contract platform with PDF generation",
    description:
      "Contract management for track day rentals. Generates agreements, captures e-signatures, produces signed PDFs. Admin dashboard. Mobile-first. Replaces expensive third-party e-signature services.",
    outcome: "Contract lifecycle from generation to signed PDF delivery.",
    techStack: [
      "Next.js 16",
      "Supabase",
      "pdf-lib",
      "signature_pad.js",
      "Vitest",
      "Resend",
    ],
  },
  {
    title: "Project Car Manager",
    category: "full-stack",
    summary:
      "Project car management app for budgets, parts, and race prep",
    description:
      "Multi-car dashboard with task management, parts tracking, budget by category, event logging, file uploads to S3, and PDF reports. Real-time WebSocket updates. Google OAuth. Drizzle ORM on Neon Postgres.",
    outcome: "Vehicle management for car owners, racers, and mechanics.",
    techStack: [
      "Express.js",
      "React 18",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "AWS S3",
      "Passport.js",
      "WebSockets",
    ],
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "ai-product": "AI Product",
  "saas-platform": "SaaS Platform",
  "full-stack": "Full-Stack",
};

export const aboutParagraphs = [
  "I've led product, design, and engineering initiatives across marketplaces, consumer platforms, and dealer technology. I've worked as a product director, UX designer, engineering lead, development manager, and product owner. That range gives me a practical understanding of how great products get built — from concept to code to customer adoption.",
  "I started building digital products in 1997. My first mobile experience was a real estate listing app for the Palm Pilot web browser, back when the mobile web was still called WAP.",
  "Before tech, I toured the U.S. playing drums in a van. Building products and touring in a band have a lot in common — both require creativity, resilience, and the ability to adapt when things don't go according to plan.",
];
