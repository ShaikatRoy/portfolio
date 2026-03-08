"use client";

import { useEffect, useState, useRef } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1400;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 12, suffix: "+", label: "Projects" },
  { value: 8,  suffix: "+", label: "Clients"  },
  { value: 3,  suffix: "y", label: "Exp."     },
];

export default function StatsCard() {
  return (
    <div className="card h-full flex items-center justify-around px-4 py-5">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <p className="font-display font-800 text-3xl sm:text-4xl leading-none" style={{ color: "var(--accent)" }}>
            <Counter end={s.value} suffix={s.suffix} />
          </p>
          <p className="text-xs font-500 mt-1.5 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
