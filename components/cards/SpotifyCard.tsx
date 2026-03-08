"use client";

import { motion } from "framer-motion";

const BARS = [3, 5, 2, 6, 4, 3, 5, 2];

export default function SpotifyCard() {
  return (
    <div className="card p-5 h-full flex flex-col justify-between min-h-[140px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#1DB954" }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <div className="flex gap-0.5 items-end h-4">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              className="w-0.5 rounded-full"
              style={{ background: "#1DB954" }}
              animate={{ height: [`${h * 2}px`, `${(h + 3) * 2}px`, `${h * 2}px`] }}
              transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      {/* Track */}
      <div>
        <p className="text-[10px] font-500 uppercase tracking-widest mb-1" style={{ color: "#1DB954" }}>
          Last played
        </p>
        <p className="font-display font-700 text-sm leading-tight" style={{ color: "var(--text)" }}>
          Blinding Lights
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>The Weeknd</p>
      </div>
    </div>
  );
}
