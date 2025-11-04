import React from 'react';

const items = [
  {
    title: 'Instant Setup',
    desc: 'Jump straight into building with a minimal, tasteful baseline.',
  },
  {
    title: 'Tailwind Styling',
    desc: 'Utility-first classes for rapid, consistent design decisions.',
  },
  {
    title: 'Accessible',
    desc: 'Semantic HTML and clear contrast for a friendly experience.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">Why you’ll like this</h3>
        <p className="mt-2 text-slate-300/90">A few simple pillars to kickstart your project.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-left shadow-sm transition hover:shadow-md hover:bg-white/10"
          >
            <div className="text-base font-medium text-white">{it.title}</div>
            <p className="mt-2 text-sm text-slate-300/90">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
