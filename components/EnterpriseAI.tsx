import { enterpriseProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function EnterpriseAI() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">
          Enterprise AI — Credit Acceptance Corporation
        </h2>
        <p className="text-sm font-mono text-slate-400 mb-8">
          Director of Product Management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {enterpriseProjects.map((project) => (
            <ProjectCard key={project.title} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
