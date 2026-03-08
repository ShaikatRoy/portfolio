"use client";

import { useState, useEffect } from "react";

export default function ClockCard() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts = { timeZone: "Asia/Dhaka" };
      setTime(now.toLocaleTimeString("en-US", { ...opts, hour: "2-digit", minute: "2-digit", hour12: true }));
      setDate(now.toLocaleDateString("en-US", { ...opts, weekday: "long", month: "short", day: "numeric" }));
      setSeconds(new Date(now.toLocaleString("en-US", opts)).getSeconds());
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const secondsDeg = seconds * 6;

  return (
    <div className="card p-5 h-full flex flex-col justify-between min-h-[150px]">
      {/* Clock face */}
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 flex-shrink-0">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="18" fill="none" stroke="var(--border)" strokeWidth="2"/>
            <circle cx="20" cy="20" r="2" fill="var(--accent)"/>
            <line
              x1="20" y1="20"
              x2={20 + 13 * Math.sin((secondsDeg * Math.PI) / 180)}
              y2={20 - 13 * Math.cos((secondsDeg * Math.PI) / 180)}
              stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-display font-600 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Dhaka, BD
          </p>
          <p className="font-display font-800 text-xl leading-tight" style={{ color: "var(--text)" }}>
            {time || "—:—"}
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{date}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: "#22c55e" }}/>
          <span className="text-xs font-500" style={{ color: "#22c55e" }}>Open to work</span>
        </div>
      </div>
    </div>
  );
}
