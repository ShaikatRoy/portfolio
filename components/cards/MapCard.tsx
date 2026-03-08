"use client";

import { motion } from "framer-motion";

export default function MapCard() {
  return (
    <div className="card h-full relative overflow-hidden min-h-[180px]">
      {/* Map grid bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #e8f4e8 0%, #d4ecd4 100%)" }}>
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          {/* Grid */}
          {[0,50,100,150,200,250,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#2d6a2d" strokeWidth="0.5"/>)}
          {[0,50,100,150,200].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#2d6a2d" strokeWidth="0.5"/>)}
          {/* Roads */}
          <line x1="0" y1="100" x2="300" y2="100" stroke="#7ab87a" strokeWidth="5"/>
          <line x1="150" y1="0" x2="150" y2="200" stroke="#7ab87a" strokeWidth="3"/>
          <line x1="0" y1="55" x2="300" y2="145" stroke="#7ab87a" strokeWidth="2"/>
          {/* Blocks */}
          <rect x="30" y="30" width="70" height="40" rx="4" fill="#b8d8b8"/>
          <rect x="180" y="120" width="80" height="50" rx="4" fill="#b8d8b8"/>
          <rect x="200" y="20" width="60" height="55" rx="4" fill="#c8e4c8"/>
        </svg>
      </div>

      {/* Dark map overlay */}
      <div className="dark:block hidden absolute inset-0" style={{ background: "linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 100%)" }}>
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
          {[0,50,100,150,200,250,300].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="#4a8a4a" strokeWidth="0.5"/>)}
          {[0,50,100,150,200].map(y => <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#4a8a4a" strokeWidth="0.5"/>)}
          <line x1="0" y1="100" x2="300" y2="100" stroke="#3a6a3a" strokeWidth="5"/>
          <line x1="150" y1="0" x2="150" y2="200" stroke="#3a6a3a" strokeWidth="3"/>
          <rect x="30" y="30" width="70" height="40" rx="4" fill="#1e3e1e"/>
          <rect x="180" y="120" width="80" height="50" rx="4" fill="#1e3e1e"/>
        </svg>
      </div>

      {/* Location pin */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-full opacity-20"
            style={{ background: "var(--accent)" }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-3 rounded-full opacity-30"
            style={{ background: "var(--accent)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          />
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-800 text-sm shadow-xl z-10"
            style={{ background: "var(--accent)" }}>
            R
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="absolute top-3 left-3">
        <span className="text-[10px] font-display font-700 uppercase tracking-widest px-2 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.85)", color: "var(--text)" }}>
          📍 Bangladesh
        </span>
      </div>

      {/* Zoom buttons */}
      <div className="absolute bottom-3 right-3 flex flex-col gap-1">
        {["+","−"].map(s => (
          <div key={s} className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold cursor-pointer"
            style={{ background: "rgba(255,255,255,0.9)", color: "var(--text)" }}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
