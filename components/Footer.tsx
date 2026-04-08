const links = [
  {
    label: "Email",
    href: "mailto:pboggs2006@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pbdesigns",
  },
  {
    label: "GitHub",
    href: "https://github.com/patrickclay",
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-indigo-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
