"use client";

export type FilterType = "all" | "about" | "projects" | "media";

const filters: { key: FilterType; label: string }[] = [
  { key: "all",      label: "All"      },
  { key: "about",    label: "About"    },
  { key: "projects", label: "Projects" },
  { key: "media",    label: "Media"    },
];

export default function Navbar({ activeFilter, onFilterChange }: {
  activeFilter: FilterType;
  onFilterChange: (f: FilterType) => void;
}) {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Desktop row — logo + filters + hire me all inline */}
        <div className="hidden sm:flex items-center justify-between py-3 gap-4">
          <a href="/" className="flex items-center gap-2 select-none flex-shrink-0">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm"
              style={{ background: "var(--accent)" }}>R</div>
            <span className="font-display font-bold text-base tracking-tight" style={{ color: "var(--text)" }}>
              Roy<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </a>
          <div className="nav-pill">
            {filters.map((f) => (
              <button key={f.key} onClick={() => onFilterChange(f.key)} className={activeFilter === f.key ? "active" : ""}>
                {f.label}
              </button>
            ))}
          </div>
          <a href="mailto:shaikatroy257@gmail.com"
            className="text-xs font-display font-semibold px-4 py-2 rounded-full border flex-shrink-0 transition-all hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            Hire me
          </a>
        </div>

        {/* Mobile — 2 rows: logo+hire on top, filters below */}
        <div className="flex sm:hidden flex-col py-2.5 gap-2.5">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 select-none">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm"
                style={{ background: "var(--accent)" }}>R</div>
              <span className="font-display font-bold text-base tracking-tight" style={{ color: "var(--text)" }}>
                Roy<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </a>
            <a href="mailto:shaikatroy257@gmail.com"
              className="text-xs font-display font-semibold px-3 py-1.5 rounded-full border"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
              Hire me
            </a>
          </div>
          {/* Filters full width on mobile */}
          <div className="flex justify-center">
            <div className="nav-pill w-full justify-center">
              {filters.map((f) => (
                <button key={f.key} onClick={() => onFilterChange(f.key)} className={`flex-1 text-center ${activeFilter === f.key ? "active" : ""}`}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}