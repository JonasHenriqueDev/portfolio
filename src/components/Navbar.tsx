import { useI18n } from '../i18n'

export default function Navbar() {
  const { t, toggleLocale } = useI18n()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          {t.nav.brand}
          <span className="text-white/40">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {t.nav.links.map((l) => (
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
          <button
            type="button"
            onClick={toggleLocale}
            className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            aria-label={t.nav.toggleAriaLabel}
            title={t.nav.toggleAriaLabel}
          >
            {t.nav.toggleShort}
          </button>

          <a
            href="#contato"
            className="text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  )
}
