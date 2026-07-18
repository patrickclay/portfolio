import { enterpriseProjects } from "@/data/projects";
import { ProjectList } from "./ProjectList";

export function EnterpriseAI() {
  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-1">
          Enterprise AI — Credit Acceptance Corporation
        </h2>
        <p className="text-sm font-mono text-slate-400 mb-8">
          Director of Product Management
        </p>

        <ProjectList projects={enterpriseProjects} />
      </div>
    </section>
  );
}
