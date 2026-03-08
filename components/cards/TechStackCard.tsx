"use client";

import { motion } from "framer-motion";

const stack = [
  { name: "Next.js",    level: 92 },
  { name: "React",      level: 90 },
  { name: "TypeScript", level: 82 },
  { name: "Node.js",    level: 78 },
  { name: "Tailwind",   level: 95 },
  { name: "MongoDB",    level: 74 },
];

export default function TechStackCard() {
  return (
    <div className="card p-5 h-full flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-display font-700 text-sm tracking-wide" style={{ color: "var(--text)" }}>
          Tech Stack
        </h3>
        <span className="tag">6 skills</span>
      </div>
      <div className="space-y-3 flex-1">
        {stack.map((s, i) => (
          <div key={s.name}>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-500" style={{ color: "var(--text)" }}>{s.name}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: i % 2 === 0 ? "var(--accent)" : "var(--accent2)" }}
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
