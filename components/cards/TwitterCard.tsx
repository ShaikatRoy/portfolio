"use client";

import { motion } from "framer-motion";

export default function TwitterCard() {
  return (
    <motion.a
      href="https://twitter.com/shaikatroy_"
      target="_blank"
      rel="noopener noreferrer"
      className="card h-full flex flex-col items-center justify-center gap-3 cursor-pointer min-h-[120px] relative overflow-hidden"
      style={{ background: "#1d9bf0" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Background circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10" style={{ background: "#fff" }}/>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-10" style={{ background: "#fff" }}/>

      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white relative z-10">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      <span className="text-white text-xs font-display font-700 tracking-wide relative z-10 opacity-80">
        @shaikatroy_
      </span>

      {/* Arrow */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1 10L10 1M10 1H4M10 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.a>
  );
}
