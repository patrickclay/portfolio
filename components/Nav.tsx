import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export function Nav() {
  return (
    <nav className="relative z-20 py-4 px-6 border-b border-slate-700/30">
      <div className="max-w-3xl mx-auto flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
