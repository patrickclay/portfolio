import { stats, techPills } from "@/data/projects";
import { TechPill } from "./TechPill";

export function Hero() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Patrick Boggs</h1>
        <p className="text-sm font-mono text-slate-400 tracking-wide mb-4">
          Product &amp; Technology Leader | AI-Accelerated Product Development |
          Builder Since 1997
        </p>
        <p className="text-base font-sans text-[#f4f4f4]/80 max-w-xl mx-auto mb-8">
          I&apos;ve spent 27 years building products with designers and
          engineers — turning messy ideas into things people love using.
          Today I&apos;m focused on the intersection of marketplaces,
          automotive technology, and AI-assisted product development.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techPills.map((pill) => (
            <TechPill key={pill} label={pill} />
          ))}
        </div>

        {/* Metric block hidden while rethinking design
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/[0.05] border border-white/10 p-5 text-center"
            >
              <p className="text-3xl font-bold text-cyan-400">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
