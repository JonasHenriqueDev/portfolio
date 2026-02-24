import { useI18n } from '../i18n'

export default function About() {
  const { t } = useI18n()

  return (
    <section id="sobre" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              {t.about.kicker}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              {t.about.title}
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              {t.about.p1}
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              {t.about.p2}
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 p-6">
            <div className="grid gap-6">
              <Item k={t.about.info.locationLabel} v={t.about.info.locationValue} />
              <Item k={t.about.info.emailLabel} v={t.about.info.emailValue} />
              <Item k={t.about.info.educationLabel} v={t.about.info.educationValue} />
              <Item k={t.about.info.languagesLabel} v={t.about.info.languagesValue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
      <span className="text-xs uppercase tracking-widest text-white/50">{k}</span>
      <span className="text-sm text-white/80">{v}</span>
    </div>
  )
}
