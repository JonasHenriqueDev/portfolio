const links = [
  { href: '#sobre', label: 'Resumo' },
  { href: '#experiencia', label: 'Experiências' },
  { href: '#skills', label: 'Skills' },
  { href: '#projetos', label: 'Projetos' },
]

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          Jonas Santos<span className="text-white/40">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}
