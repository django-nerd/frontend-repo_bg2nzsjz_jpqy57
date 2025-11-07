import React from 'react';

function SectionCard({ title, children }) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-4 text-slate-300 space-y-3">{children}</div>
    </div>
  );
}

export default function Encyclopedia() {
  return (
    <section id="encyclopedia" className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <h2 className="text-3xl font-bold text-white tracking-tight">Characters • Areas • Bosses • Items</h2>

      <SectionCard title="Main Characters">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">The Knight</span> — A silent Vessel born of the Abyss, immune to the Infection’s will. Excels in close combat with the Nail and channels Soul for spells. Their journey uncovers the truth of Hallownest’s sacrifice.
          </li>
          <li>
            <span className="font-semibold text-white">Hornet</span> — Protector of Hallownest and daughter of the Pale King and Herrah. Agile combatant wielding a needle and silk. Protagonist of Silksong, bound for Pharloom by unknown designs.
          </li>
          <li>
            <span className="font-semibold text-white">The Pale King</span> — A Wyrm who shed his skin to become a god-king. Brought civilization and mind to bugs, but at a catastrophic moral cost.
          </li>
          <li>
            <span className="font-semibold text-white">The Radiance</span> — Ancient light and former patron of Moths. Source of the Infection, manifesting through dreams.
          </li>
          <li>
            <span className="font-semibold text-white">The Hollow Knight</span> — Chosen Vessel meant to contain the Radiance; noble but flawed seal.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Important Areas (Hollow Knight)">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">City of Tears</span> — Hallownest’s rain-soaked capital. Key NPCs, the Nailsmith, and access to the Soul Sanctum. Bosses: Soul Master; later variants.
          </li>
          <li>
            <span className="font-semibold text-white">Greenpath</span> — Lush, mossy wetlands teeming with acid pools. Early encounters with Hornet. Bosses: Hornet (Protector), Massive Moss Charger.
          </li>
          <li>
            <span className="font-semibold text-white">Deepnest</span> — Web-choked caverns of skittering horrors. Non-linear traversal, heavy ambushes. Mini-bosses and ambients provide sustained pressure.
          </li>
          <li>
            <span className="font-semibold text-white">Fungal Wastes</span> — Spore-laden tunnels with bounce mechanics. Bosses: Mantis Lords (in adjacent Village), Elder Hu (Dream).
          </li>
          <li>
            <span className="font-semibold text-white">Crystal Peak</span> — Conveyor-laced mines of brittle crystal. Laser hazards and precision platforming. Bosses: Crystal Guardian, Enraged Guardian.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Important Areas (Silksong)">
        <p>Confirmed regions of Pharloom emphasize vertical traversal, craft, and song-driven cultures:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">Moss Grotto</span> — Overgrown entry region with fast, reactive enemies and early resource gathering.
          </li>
          <li>
            <span className="font-semibold text-white">Deep Docks</span> — Industrial harbors with lifts, chains, and patrol routes; introduces quest-giver guilds.
          </li>
          <li>
            <span className="font-semibold text-white">Greymoor</span> — Windswept heights and bell towers; environmental bells act as traversal and world triggers.
          </li>
          <li>
            <span className="font-semibold text-white">Coral Forest</span> — Bioluminescent thickets and capillary platforms; new mobility challenges.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Bosses & Mini-Bosses">
        <p className="text-slate-300">Approaches focus on pattern recognition, patience, and safe punish windows.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">Mantis Lords (HK)</span> — Learn the three main telegraphs: swoop, dash, and wall-jump volley. Stay central, hop-dodge dashes, strike during landings. Lore: test of honor in Mantis culture.
          </li>
          <li>
            <span className="font-semibold text-white">Hornet (HK)</span> — Bait lunges and parry strings. Maintain mid-range, jump over needle throws, punish on thread retrieval. Lore: guardian measuring the Knight’s resolve.
          </li>
          <li>
            <span className="font-semibold text-white">Soul Master (HK)</span> — Circle during teleport phase, pogo after dive slams. Save Soul for heals between phases. Lore: scholar obsessed with Soul manipulation.
          </li>
          <li>
            <span className="font-semibold text-white">Lace (HKS)</span> — Agile duelist with sweeping arcs. Slide under high arcs, hop over low thrusts, counter after landings.
          </li>
          <li>
            <span className="font-semibold text-white">Trobbio (HKS)</span> — Trickster-style miniboss; watch for feints and ballooning leaps. Punish during taunts.
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Items, Charms & Abilities (Hollow Knight)">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">Nail Arts</span> — Cyclone Slash, Dash Slash, Great Slash learned from Nailmasters; provide burst damage windows.
          </li>
          <li>
            <span className="font-semibold text-white">Spells</span> — Vengeful Spirit, Desolate Dive, Howling Wraiths; upgraded via Shade Soul, Descending Dark, Abyss Shriek.
          </li>
          <li>
            <span className="font-semibold text-white">Key Charms</span> — Quick Focus (faster heals), Shaman Stone (spell power), Mark of Pride (nail reach), Dashmaster (mobility), Unbreakable Strength (damage).
          </li>
          <li>
            <span className="font-semibold text-white">Mobility</span> — Mothwing Cloak (dash), Mantis Claw (wall jump), Crystal Heart (super dash), Monarch Wings (double jump), Isma’s Tear (acid swim), Shade Cloak (invincible dash).
          </li>
        </ul>
      </SectionCard>

      <SectionCard title="Tools, Charms & Abilities (Silksong)">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold text-white">Silk-based Healing</span> — Bind to recover quickly while rooted; Silk gained via aggression and parries.
          </li>
          <li>
            <span className="font-semibold text-white">Crafting & Tools</span> — Hornet crafts tools from gathered materials; equips multiple loadouts to solve traversal and combat puzzles.
          </li>
          <li>
            <span className="font-semibold text-white">Movement</span> — Faster base speed, vaults, and needle-grapples enable more vertical routes;
            bells and pulleys integrate into traversal challenges.
          </li>
        </ul>
      </SectionCard>
    </section>
  );
}
