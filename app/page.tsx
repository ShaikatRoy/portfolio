"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar, { FilterType } from "@/components/Navbar";
import BioCard         from "@/components/cards/BioCard";
import MapCard         from "@/components/cards/MapCard";
import SpotifyCard     from "@/components/cards/SpotifyCard";
import TwitterCard     from "@/components/cards/TwitterCard";
import ProjectCard     from "@/components/cards/ProjectCard";
import TechStackCard   from "@/components/cards/TechStackCard";
import BlogCard        from "@/components/cards/BlogCard";
import NewsletterCard  from "@/components/cards/NewsletterCard";
import DarkModeCard    from "@/components/cards/DarkModeCard";
import ClockCard       from "@/components/cards/ClockCard";
import GitHubCard      from "@/components/cards/GitHubCard";
import ExperienceCard  from "@/components/cards/ExperienceCard";
import StatsCard       from "@/components/cards/StatsCard";

interface Item {
  id: string;
  tags: FilterType[];
  span: string;
  draggable?: boolean;
  component: React.ReactNode;
}

function Card({ children, draggable }: { children: React.ReactNode; draggable?: boolean }) {
  if (!draggable) return <div className="h-full">{children}</div>;
  return (
    <motion.div
      className="h-full draggable"
      drag
      dragElastic={0.12}
      dragTransition={{ bounceStiffness: 280, bounceDamping: 22 }}
      whileDrag={{ scale: 1.04, zIndex: 50, boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
}

const PROJECTS = [
  {
    title: "Real Estate Lead Engine",
    description: "Full automation pipeline for real estate agents — Google Forms → Sheets → Gmail CRM. Handles lead capture, follow-ups, and reporting with zero manual work.",
    tags: ["Next.js", "Apps Script", "Automation", "Gmail API"],
    accent: "#ff4d00",
    href: "#",
    number: "01",
  },
  {
    title: "Meditime Health App",
    description: "Medicine tracker with smart reminders, dose logging, and caregiver sharing. Built with React Native concepts in a web shell.",
    tags: ["React", "TypeScript", "Tailwind", "PWA"],
    accent: "#8b5cf6",
    href: "#",
    number: "02",
  },
  {
    title: "AI Branding Studio",
    description: "Automated brand identity generator — logo concepts, color palettes, and copy — powered by AI workflows on Make.com.",
    tags: ["Make.com", "OpenAI API", "Next.js"],
    accent: "#00c896",
    href: "#",
    number: "03",
  },
];

const item = (
  id: string,
  tags: FilterType[],
  span: string,
  component: React.ReactNode,
  draggable = true
): Item => ({ id, tags, span, draggable, component });

export default function Home() {
  const [filter, setFilter] = useState<FilterType>("all");

  const items: Item[] = [
    // Row 1 — Hero
    item("bio",     ["all","about"],         "col-span-2 md:col-span-2 row-span-1 md:row-span-2", <BioCard />, true),
    item("map",     ["all","about"],         "col-span-2 md:col-span-1",                          <MapCard />, false),
    item("stats",   ["all","about"],         "col-span-2 md:col-span-1",                          <StatsCard />, true),

    // Row 2
    item("clock",   ["all","about"],         "col-span-1 md:col-span-1",                          <ClockCard />, true),
    item("dark",    ["all"],                 "col-span-1 md:col-span-1",                          <DarkModeCard />, true),

    // Row 3 — Social
    item("twitter", ["all","media"],         "col-span-1 md:col-span-1",                          <TwitterCard />, false),
    item("spotify", ["all","media"],         "col-span-1 md:col-span-1",                          <SpotifyCard />, true),

    // Projects
    item("p1",      ["all","projects"],      "col-span-2 md:col-span-2 row-span-1 md:row-span-2",
      <ProjectCard {...PROJECTS[0]} />, false),
    item("github",  ["all","about","media"], "col-span-2 md:col-span-1",                          <GitHubCard />, false),
    item("p2",      ["all","projects"],      "col-span-2 md:col-span-1",                          <ProjectCard {...PROJECTS[1]} />, false),
    item("p3",      ["all","projects"],      "col-span-2 md:col-span-1",                          <ProjectCard {...PROJECTS[2]} />, false),

    // About / Media
    item("exp",     ["all","about"],         "col-span-2 md:col-span-2",                          <ExperienceCard />, false),
    item("tech",    ["all","about"],         "col-span-2 md:col-span-2",                          <TechStackCard />, false),
    item("blog",    ["all","media","about"], "col-span-2 md:col-span-2",
      <BlogCard
        title="From Botany to Full-Stack: My Unorthodox Dev Journey"
        excerpt="How studying plants in Bangladesh redirected me toward code, automation, and building a global freelance career from scratch — with no CS degree."
        date="Mar 2025"
        readTime="5 min"
      />, false),
    item("nl",      ["all","media"],         "col-span-2 md:col-span-2",                          <NewsletterCard />, false),
  ];

  const visible = items.filter((i) => filter === "all" || i.tags.includes(filter));

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar activeFilter={filter} onFilterChange={setFilter} />

      {/* Hint */}
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-2">
        <span className="text-[10px] sm:text-[11px] font-display font-600 uppercase tracking-widest"
          style={{ color: "var(--text-muted)", opacity: 0.5 }}>
          ✦ Some cards are draggable
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 pb-20">
        <motion.div
          layout
          className="grid gap-2.5 sm:gap-3 grid-cols-2 md:grid-cols-4 auto-rows-[minmax(130px,auto)] sm:auto-rows-[minmax(150px,auto)] md:auto-rows-[minmax(160px,auto)]"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((it, idx) => (
              <motion.div
                key={it.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.28, delay: idx * 0.03, ease: [0.25, 0.1, 0.25, 1] }}
                className={it.span}
              >
                <Card draggable={it.draggable}>
                  {it.component}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-4 pb-8 text-center">
        <p className="text-xs font-display" style={{ color: "var(--text-muted)", opacity: 0.4 }}>
          Built with Next.js · © {new Date().getFullYear()} Shaikat Roy
        </p>
      </div>
    </main>
  );
}
