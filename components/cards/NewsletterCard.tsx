"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="card p-5 sm:p-6 h-full flex flex-col justify-between relative overflow-hidden">
      {/* Accent blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5"
        style={{ background: "var(--accent)" }}/>

      <div>
        <p className="font-display font-800 text-base sm:text-lg" style={{ color: "var(--text)" }}>
          Stay in the loop
        </p>
        <p className="text-sm mt-1 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Dev drops, project launches & honest build-in-public updates.
        </p>
      </div>

      {done ? (
        <div className="py-4 text-center">
          <p className="text-2xl mb-2">🎉</p>
          <p className="font-display font-700 text-sm" style={{ color: "var(--accent2)" }}>You're in!</p>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && email && setDone(true)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{
              background: "var(--border)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />
          <motion.button
            onClick={() => email && setDone(true)}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-xl text-sm font-display font-700 text-white whitespace-nowrap"
            style={{ background: "var(--accent)" }}
          >
            Subscribe
          </motion.button>
        </div>
      )}
    </div>
  );
}
