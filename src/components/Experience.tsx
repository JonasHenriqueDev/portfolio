const experiences = [
  {
    period: 'jan/2025 — dez/2025',
    company: 'Wolf Code Solutions',
    role: 'Desenvolvedor de Software — Full Stack',
    highlights: [
      'Desenvolvimento e evolução de ERP em Laravel para construção civil, suportando +250 funcionários.',
      'Implementação de módulos financeiros, gestão de funcionários e controle de estoque.',
      'Otimização de queries e melhorias de performance, reduzindo o tempo de resposta em mais de 70%.',
      'Sistema de idempotência com Redis (cache distribuído) para prevenir inconsistências por requisições repetidas.',
      'API REST em NestJS com arquitetura hexagonal, facilitando testes e evolução sem impacto em módulos.',
      'Docker e documentação com Swagger para padronização de ambiente e integração do time.',
    ],
    tags: ['Laravel', 'PHP', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Swagger', 'AWS'],
  },
  {
    period: 'abr/2024 — dez/2024',
    company: 'Freelancer',
    role: 'Desenvolvedor Backend — Plataforma de Videoaulas',
    highlights: [
      'Backend completo (API REST) em Laravel para playlists, usuários e permissões (+150 usuários ativos).',
      'Autenticação e autorização com Laravel Sanctum e RBAC.',
      'Integração com Amazon S3 para armazenamento e gerenciamento de imagens.',
      'Containerização com Docker e deploy/infra na AWS com AWS Lambda (redução de custo ~50%).',
    ],
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Sanctum', 'RBAC', 'Amazon S3', 'AWS Lambda', 'Docker'],
  },
  {
    period: 'jan/2023 — fev/2024',
    company: 'UFAPE (Laboratório Multidisciplinar de Tecnologias Sociais)',
    role: 'Desenvolvedor de Software — Full Stack',
    highlights: [
      'ERP acadêmico em Laravel para gestão de estágios e editais (duas universidades).',
      'Digitalização de processos administrativos, reduzindo retrabalho e aumentando eficiência.',
      'Modelagem de banco e implementação de regras de negócio para fluxos acadêmicos.',
      'Relatórios e exportação de documentos com PHPOffice.',
      'Manutenção evolutiva e corretiva garantindo estabilidade do projeto.',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Bootstrap', 'PHPOffice'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            Experiências
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Experiência profissional
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {experiences.map((e) => (
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
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-white/10 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-widest text-white/70"
                  >
                    {t}
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
