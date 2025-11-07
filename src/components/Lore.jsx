import React from 'react';

export default function Lore() {
  return (
    <section id="lore" className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-white tracking-tight">Story & Lore Theories</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Confirmed Lore</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>The Pale King elevated Hallownest, creating Vessels in the Abyss to contain the Radiance.</li>
            <li>The Infection spreads via dreams and memory, turning bugs manic and orange-eyed.</li>
            <li>Hornet is the child of the Pale King and Herrah the Beast, sworn to protect Hallownest.</li>
            <li>The Hollow Knight was chosen as a seal but proved imperfect, allowing the Infection to persist.</li>
            <li>Pharloom lies beyond Hallownest and plays host to new factions, crafts, and rituals bound by bells and song.</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Community Theories</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>Hornet’s fate in Pharloom may test the balance between will and containment, echoing Hallownest’s tragedy.</li>
            <li>Pharloom’s bells could resonate with dream energies, acting as anchors similar to Hallownest’s seals.</li>
            <li>Silk may be a parallel to Soul—another metaphysical resource shaped by craft rather than thought.</li>
            <li>Cultural guilds in Pharloom may serve as spiritual successors to Hallownest’s castes, with competing agendas.</li>
          </ul>
        </div>
      </div>

      <p className="text-slate-300">Where evidence is thin, this compendium clearly labels speculation. As Silksong releases, entries will be updated to reflect canonical information.</p>
    </section>
  );
}
