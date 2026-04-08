import { aboutText } from "@/data/projects";

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">About</h2>
        <p className="text-sm text-slate-400 leading-relaxed">{aboutText}</p>
        <a
          href="https://www.linkedin.com/in/pbdesigns"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Full story on LinkedIn →
        </a>
      </div>
    </section>
  );
}
