"use client";

const timeline = [
  {
    year: "2024–Now",
    role: "Freelance Full-Stack Developer",
    company: "Fiverr / Upwork",
    desc: "Building real estate automation, dashboards & custom web apps for international clients.",
    color: "var(--accent)",
  },
  {
    year: "2023–24",
    role: "MERN Stack Developer",
    company: "Personal Projects",
    desc: "Built 10+ full-stack projects including AI tools, billing systems & landing pages.",
    color: "var(--accent2)",
  },
  {
    year: "2021–23",
    role: "Self-taught Developer",
    company: "Online Learning",
    desc: "Mastered HTML, CSS, JavaScript, React, Node and deployed first client project.",
    color: "#8b5cf6",
  },
];

export default function ExperienceCard() {
  return (
    <div className="card p-5 sm:p-6 h-full flex flex-col gap-4">
      <h3 className="font-display font-800 text-sm tracking-wide uppercase" style={{ color: "var(--text)" }}>
        Experience
      </h3>
      <div className="flex flex-col gap-5 flex-1">
        {timeline.map((t, i) => (
          <div key={i} className="flex gap-3">
            {/* Timeline line */}
            <div className="flex flex-col items-center pt-1">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: t.color }}/>
              {i < timeline.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ background: "var(--border)" }}/>
              )}
            </div>
            <div className="pb-1">
              <p className="text-[10px] font-display font-700 uppercase tracking-widest mb-0.5" style={{ color: t.color }}>
                {t.year}
              </p>
              <p className="font-display font-700 text-sm leading-tight" style={{ color: "var(--text)" }}>
                {t.role}
              </p>
              <p className="text-xs font-500 mb-1" style={{ color: "var(--text-muted)" }}>{t.company}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
