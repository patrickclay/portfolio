"use client";

import { useState } from "react";
import { CardData, categoryLabels } from "@/data/projects";
import { TechPill } from "./TechPill";

export function ProjectList({ projects }: { projects: CardData[] }) {
  const [openRows, setOpenRows] = useState<Set<number>>(new Set([0]));
  const allOpen = openRows.size === projects.length;

  const toggleRow = (index: number) => {
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleAll = () => {
    setOpenRows(allOpen ? new Set() : new Set(projects.map((_, i) => i)));
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <button
          onClick={toggleAll}
          className="text-[11px] font-mono uppercase tracking-wider text-slate-500 hover:text-cyan-400 transition-colors px-2 py-1"
        >
          {allOpen ? "Collapse all" : "Expand all"} ↕
        </button>
      </div>

      <div className="rounded-xl border border-slate-600/20 bg-white/[0.03] divide-y divide-slate-600/20 overflow-hidden">
        {projects.map((project, index) => {
          const isOpen = openRows.has(index);
          return (
            <div key={project.title}>
              <button
                onClick={() => toggleRow(index)}
                aria-expanded={isOpen}
                className={`w-full flex items-center gap-3.5 px-5 py-3.5 text-left transition-colors hover:bg-cyan-400/5 ${
                  isOpen ? "bg-cyan-400/5" : ""
                }`}
              >
                <span className="text-cyan-400 text-xs shrink-0">▸</span>
                <h3 className="flex-1 text-sm font-semibold text-white">
                  {project.title}
                </h3>
                {project.category && (
                  <span className="hidden sm:block text-[10px] font-mono uppercase tracking-widest text-slate-500 whitespace-nowrap">
                    {categoryLabels[project.category]}
                  </span>
                )}
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-cyan-400" : "text-slate-500"
                  }`}
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-3 px-5 pb-4 pl-12">
                    <p className="text-sm font-sans text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>
                    <p className="text-sm font-sans text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                    {project.outcome && (
                      <p className="text-xs font-sans text-slate-500 border-t border-white/[0.06] pt-3">
                        <span className="text-cyan-400 font-mono font-medium">
                          Outcome:{" "}
                        </span>
                        {project.outcome}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <TechPill key={tech} label={tech} />
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="self-start text-xs font-mono text-cyan-400 hover:underline"
                      >
                        View live site ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
