import { stats, techPills } from "@/data/projects";
import { TechPill } from "./TechPill";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Patrick Boggs</h1>
        <p className="text-sm text-slate-400 tracking-wide mb-4">
          Product &amp; Technology Leader | AI-Accelerated Product Development |
          Builder Since 1997
        </p>
        <p className="text-base text-slate-300 max-w-xl mx-auto mb-8">
          I build AI into real products that solve real problems — from
          enterprise document pipelines to consumer marketplaces.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techPills.map((pill) => (
            <TechPill key={pill} label={pill} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/[0.05] border border-white/10 p-5 text-center"
            >
              <p className="text-3xl font-bold text-indigo-400">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
