import { products } from "@/data/projects";
import { ProjectList } from "./ProjectList";

export function ProductsBuilt() {
  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          Recent Products I Have Built
        </h2>

        <ProjectList projects={products} />
      </div>
    </section>
  );
}
