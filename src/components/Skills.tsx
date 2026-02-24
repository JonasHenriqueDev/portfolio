import { useI18n } from '../i18n'

export default function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">{t.skills.kicker}</p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          {t.skills.title}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.skills.groups.map((g) => (
            <div key={g.group} className="border border-white/10 bg-white/5 p-6">
              <h3 className="text-xs uppercase tracking-widest text-white/70">
                {g.group}
              </h3>

              <ul className="mt-6 grid gap-2">
                {g.items.map((name) => (
                  <li key={name} className="text-sm text-white/80">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
