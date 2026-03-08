"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  href?: string;
}

export default function BlogCard({ title, excerpt, date, readTime = "4 min", href = "#" }: BlogCardProps) {
  return (
    <motion.a
      href={href}
      className="card p-5 sm:p-6 h-full flex flex-col justify-between cursor-pointer group"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Tag */}
      <div className="flex items-center gap-2 mb-3">
        <span className="tag" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
          Article
        </span>
        <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>{readTime} read</span>
      </div>

      <div className="flex-1">
        <h3 className="font-display font-800 text-base sm:text-lg leading-snug mb-2 group-hover:text-accent transition-colors"
          style={{ color: "var(--text)" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>{date}</span>
        <span className="text-xs font-display font-700 flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: "var(--accent)" }}>
          Read → 
        </span>
      </div>
    </motion.a>
  );
}
