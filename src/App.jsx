import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Encyclopedia from './components/Encyclopedia';
import Lore from './components/Lore';
import Comparison from './components/Comparison';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200">
      <Header />

      <main className="pt-4">
        <Overview />
        <Encyclopedia />
        <Lore />
        <Comparison />
      </main>

      <footer className="border-t border-slate-800 mt-8">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Fan-made compendium for educational purposes. Hollow Knight and Silksong are trademarks of Team Cherry.</p>
          <a href="#overview" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
