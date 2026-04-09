import { products } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProductsBuilt() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          Recent Products I Have Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((project) => (
            <ProjectCard key={project.title} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
