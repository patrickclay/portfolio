import { TechPill } from "./TechPill";

const steps = [
  { number: 1, label: "Client sends update request via email" },
  { number: 2, label: "Email forwarded to an AI agent" },
  { number: 3, label: "Agent updates code, deploys via Vercel + GitHub" },
];

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Vercel",
  "GitHub",
  "AI Agents",
];

export function ClientDelivery() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">
          AI-Managed Client Delivery
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2 mb-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center gap-2 md:gap-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-sm font-mono font-bold text-cyan-400 shrink-0">
                  {step.number}
                </div>
                <p className="text-sm font-sans text-slate-300">{step.label}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="hidden md:block text-slate-600 mx-2">→</span>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm font-sans text-slate-400 leading-relaxed mb-6">
          The product isn&apos;t the websites. It&apos;s the delivery model.
          Traditional agencies charge retainers for change requests that take
          days. This workflow handles most updates in minutes.
        </p>

        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
