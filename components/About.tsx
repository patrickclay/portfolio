import { aboutParagraphs } from "@/data/projects";

export function About() {
  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">About</h2>
        <div className="space-y-4">
          {aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-sm font-sans text-slate-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/pbdesigns"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Full story on LinkedIn →
        </a>
      </div>
    </section>
  );
}
