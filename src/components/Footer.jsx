import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-slate-400">
        <p className="text-sm">© {year} Hello World. All rights reserved.</p>
      </div>
    </footer>
  );
}
