import React from 'react';

export default function Overview() {
  return (
    <section id="overview" className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">General Overview</h2>
        <p className="text-slate-300 mt-2">The world of Hollow Knight unfolds beneath the surface in the fallen kingdom of Hallownest, a labyrinth of ancient cities, fungal forests, caverns, and haunted sanctums. Hollow Knight: Silksong continues this lineage in the far land of Pharloom, a bell-bound realm of silk, song, and ritual. Both games are hand-drawn, atmospheric action-adventure “Metroidvania” experiences known for tight, precise combat, broad exploration, and environmental storytelling. Themes explore sacrifice, cyclical decay, and fragile hope in the face of infection and fate.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">Core Gameplay</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>Exploration-first design with interconnected regions, shortcuts, benches (checkpoints), and map progression.</li>
            <li>Precise melee combat with spells/skills; resource management via Soul (HK) or Silk (HKS).</li>
            <li>Build customization through Charms (HK) and Tools/Charms (HKS) to alter offense, mobility, and utility.</li>
            <li>High-stakes boss encounters that teach patterns, positioning, and stamina management.</li>
          </ul>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white">World & Themes</h3>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
            <li>Hallownest: A subterranean civilization ravaged by an orange Infection, governed by the Pale King and ancient pacts.</li>
            <li>Pharloom: A vertical kingdom of spires and bells where song, craft, and ritual shape society.</li>
            <li>Motifs of memory, purpose, and the cost of containment shape character arcs like The Knight and Hornet.</li>
            <li>Environmental storytelling drives discovery—lore is uncovered through exploration rather than exposition.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
