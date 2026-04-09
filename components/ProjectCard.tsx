import { CardData, categoryLabels } from "@/data/projects";
import { TechPill } from "./TechPill";

export function ProjectCard({ data }: { data: CardData }) {
  return (
    <div
      className="flex flex-col rounded-xl p-5 border bg-white/[0.03] border-slate-600/20 h-full"
    >
      {data.category && (
        <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-cyan-400 mb-1.5">
          {categoryLabels[data.category]}
        </p>
      )}

      <h3 className="text-base font-semibold text-white mb-1">
        {data.title}
      </h3>

      <p className="text-sm font-sans text-slate-400 leading-relaxed mb-3">
        {data.summary}
      </p>

      <p className="text-sm font-sans text-slate-300 leading-relaxed mb-3">
        {data.description}
      </p>

      {data.outcome && (
        <p className="text-xs font-sans text-slate-500 mt-auto border-t border-white/[0.06] pt-3">
          <span className="text-cyan-400 font-mono font-medium">Outcome: </span>
          {data.outcome}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5 mt-3">
        {data.techStack.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
