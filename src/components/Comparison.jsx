import React from 'react';

export default function Comparison() {
  return (
    <section id="comparison" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white tracking-tight">Hollow Knight vs. Silksong</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Combat & Resources</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>HK uses Soul for spells and Focus (healing). Soul is gathered by striking foes.</li>
            <li>Silksong replaces Soul with Silk. Bind enables rapid heals with positional risk.</li>
            <li>Hornet’s needle has longer reach and faster movement; encounters expect more aggressive dodging.</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Traversal & World Design</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>HK emphasizes discovery through layered horizontal regions connected by stagways.</li>
            <li>Silksong leans vertical with lifts, ropes, and bell towers; faster routing and chase sequences.</li>
            <li>Quest boards and guild tasks in Pharloom complement open exploration with directed goals.</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Buildcraft</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>HK Charms modify Soul gain, spell power, nail reach, mobility, and utility.</li>
            <li>Silksong adds craftable Tools and materials gathering, enabling situational loadouts.</li>
            <li>Both support risk-reward builds; Silksong trends toward speed and offense.</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Tone & Theme</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>HK: elegiac decay, duty, and memory—quiet melancholy.</li>
            <li>Silksong: craft, song, and resilience—urgent momentum.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
