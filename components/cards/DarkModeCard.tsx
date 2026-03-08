"use client";

import { useTheme } from "@/components/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function DarkModeCard() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="card h-full w-full flex flex-col items-center justify-center gap-3 cursor-pointer min-h-[120px]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
          style={{ background: isDark ? "rgba(250,204,21,0.12)" : "rgba(99,102,241,0.1)" }}
        >
          {isDark ? "☀️" : "🌙"}
        </motion.div>
      </AnimatePresence>
      <span className="text-[11px] font-display font-700 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
        {isDark ? "Light" : "Dark"}
      </span>
    </motion.button>
  );
}
