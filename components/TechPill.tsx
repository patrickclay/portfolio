export function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/20">
      {label}
    </span>
  );
}
