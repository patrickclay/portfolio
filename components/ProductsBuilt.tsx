"use client";

import { products } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useAccordion } from "@/hooks/useAccordion";

export function ProductsBuilt() {
  const { expandedIndex, cardRefs, toggle } = useAccordion();

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          Products I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((project, i) => (
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
