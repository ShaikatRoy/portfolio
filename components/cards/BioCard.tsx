"use client";

import { motion } from "framer-motion";

export default function BioCard() {
  const handleContact = () => {
    const subject = encodeURIComponent("Let's Work Together");
    const body = encodeURIComponent("Hi Roy,\n\nI'd like to discuss a project with you.\n\n");
    window.open(`https://mail.google.com/mail/?view=cm&to=shaikatroy257@gmail.com&su=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="card p-5 sm:p-7 h-full flex flex-col gap-5">
      {/* Top row */}
      <div className="flex items-start gap-4">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2"
            style={{ ringColor: "var(--border)" }}>
            <div className="w-full h-full"
              style={{
                backgroundImage: "url('/avatar.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--accent)",
              }}
            />
          </div>
          {/* Online dot */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
            style={{ background: "#22c55e", borderColor: "var(--bg-card)" }}>
          </span>
        </div>

        {/* Name block */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="font-display font-800 text-xl sm:text-2xl leading-none" style={{ color: "var(--text)" }}>
              Shaikat Roy
            </h1>
          </div>
          <p className="text-sm font-500" style={{ color: "var(--accent)" }}>
            Full-Stack Developer
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            📍 Bangladesh · GMT+6
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
        I craft <span className="font-600" style={{ color: "var(--text)" }}>high-performance web apps</span> and
        automation systems. Specializing in{" "}
        <span className="font-600" style={{ color: "var(--text)" }}>Next.js</span>,
        real estate tech, and AI-powered products that scale globally.
      </p>

      {/* CTA */}
      <motion.button
        onClick={handleContact}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 rounded-xl font-display font-700 text-sm tracking-wide text-white transition-all"
        style={{ background: "var(--accent)" }}
      >
        Contact Me →
      </motion.button>
    </div>
  );
}
