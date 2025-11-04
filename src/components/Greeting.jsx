import React from 'react';

export default function Greeting() {
  return (
    <section className="relative isolate">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90 shadow-sm">
          Welcome
        </p>
        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Hello, world!
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto">
          A tiny starter you can build on. Clean, modern styles with a warm gradient glow. Enjoy the vibe and ship fast.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-indigo-500/20 transition-colors"
          >
            Explore features
          </a>
          <a
            href="#"
            className="rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
