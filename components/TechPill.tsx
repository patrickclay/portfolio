export function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium text-indigo-400 bg-indigo-500/12">
      {label}
    </span>
  );
}
