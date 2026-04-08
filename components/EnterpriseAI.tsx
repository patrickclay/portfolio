"use client";

import { enterpriseProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useAccordion } from "@/hooks/useAccordion";

export function EnterpriseAI() {
  const { expandedIndex, cardRefs, toggle } = useAccordion();

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">
          Enterprise AI — Credit Acceptance Corporation
        </h2>
        <p className="text-sm text-slate-400 mb-8">
          Director of Product Management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {enterpriseProjects.map((project, i) => (
            <div key={project.title} ref={(el) => { cardRefs.current[i] = el; }}>
              <ProjectCard
                data={project}
                isExpanded={expandedIndex === i}
                onToggle={() => toggle(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
