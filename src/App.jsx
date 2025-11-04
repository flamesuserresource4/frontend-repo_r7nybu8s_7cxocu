import React from 'react';
import Header from './components/Header.jsx';
import Greeting from './components/Greeting.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 selection:text-white">
      <Header />
      <main>
        <Greeting />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
