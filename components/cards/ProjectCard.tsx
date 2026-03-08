"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href?: string;
  number: string;
}

export default function ProjectCard({ title, description, tags, accent, href = "#", number }: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card h-full flex flex-col p-5 sm:p-6 cursor-pointer group relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Big number watermark */}
      <span className="absolute -top-4 -right-2 font-display font-800 text-8xl sm:text-9xl select-none pointer-events-none transition-all duration-500 group-hover:scale-110"
        style={{ color: accent, opacity: 0.07 }}>
        {number}
      </span>

      {/* Accent line */}
      <div className="w-8 h-1 rounded-full mb-4" style={{ background: accent }}/>

      <div className="flex-1">
        <h3 className="font-display font-800 text-base sm:text-lg leading-snug mb-2" style={{ color: "var(--text)" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.map((t) => (
          <span key={t} className="text-[10px] font-display font-700 px-2 py-0.5 rounded-full uppercase tracking-wide"
            style={{ background: `${accent}18`, color: accent }}>
            {t}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        className="absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: accent }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0.8, opacity: 0.6 }}
        whileInView={{ scale: 0.8, opacity: 0.6 }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 11L11 1M11 1H4M11 1V8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </motion.div>
    </motion.a>
  );
}
