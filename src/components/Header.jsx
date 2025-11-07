import React from 'react';

const navItems = [
  { id: 'overview', label: 'General Overview' },
  { id: 'encyclopedia', label: 'Characters • Areas • Bosses • Items' },
  { id: 'lore', label: 'Story & Lore Theories' },
  { id: 'comparison', label: 'HK vs. Silksong' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden>🕯️</span>
          <p className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Hollow Knight Compendium
          </p>
        </div>
        <nav className="hidden md:flex items-center gap-2 text-slate-200 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-slate-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
