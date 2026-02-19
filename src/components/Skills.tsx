const skills = [
  {
    group: 'Backend',
    items: [
      { name: 'Laravel / PHP', level: 92 },
      { name: 'NestJS / Node.js', level: 80 },
      { name: 'APIs REST', level: 90 },
      { name: 'Arquitetura (Hexagonal / Clean)', level: 78 },
    ],
  },
  {
    group: 'Dados & Cache',
    items: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Redis (idempotência)', level: 78 },
      { name: 'Otimização de queries', level: 85 },
    ],
  },
  {
    group: 'Infra & Ferramentas',
    items: [
      { name: 'Docker', level: 78 },
      { name: 'AWS (S3 / Lambda)', level: 72 },
      { name: 'Swagger', level: 75 },
      { name: 'GitHub / CI', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          Skills
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Tecnologias e práticas
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="border border-white/10 bg-white/5 p-6">
              <h3 className="text-xs uppercase tracking-widest text-white/70">
                {g.group}
              </h3>

              <div className="mt-6 grid gap-4">
                {g.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm text-white/80">{s.name}</span>
                      <span className="text-[11px] uppercase tracking-widest text-white/50">
                        {s.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-[2px] w-full bg-white/10">
                      <div
                        className="h-[2px] bg-white/60"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
