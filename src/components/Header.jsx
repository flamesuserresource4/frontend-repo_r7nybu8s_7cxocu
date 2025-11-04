import React from 'react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-indigo-500/20 ring-1 ring-indigo-400/30 grid place-items-center text-indigo-300 font-bold">
            HW
          </div>
          <h1 className="text-lg font-semibold text-white tracking-tight">Hello World</h1>
        </div>
        <nav className="text-sm text-slate-300/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
        </nav>
      </div>
    </header>
  );
}
