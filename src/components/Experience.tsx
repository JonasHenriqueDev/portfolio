import { useI18n } from '../i18n'

export default function Experience() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            {t.experience.kicker}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            {t.experience.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {t.experience.items.map((e) => (
            <article
              key={`${e.period}-${e.company}`}
              className="border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {e.company} <span className="text-white/30">•</span> {e.period}
                  </p>
                </div>
              </div>

              <ul className="mt-5 grid gap-2 text-sm leading-relaxed text-white/70">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white/40" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-white/10 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-widest text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
