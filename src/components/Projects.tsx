import { ExternalLink, Github } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
  repo?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Sistema de Gestão de Pedidos e Estoque',
    description:
      'Sistema full stack para gerenciamento de pedidos, produtos e usuários. Autenticação JWT, RBAC, processamento assíncrono com filas/Redis e testes no backend (Pest). CI com GitHub Actions e frontend em React + Vite + Tailwind.',
    tags: [
      'Laravel',
      'PHP',
      'PostgreSQL',
      'Redis',
      'Horizon',
      'React',
      'Vite',
      'Tailwind',
      'JWT',
      'GitHub Actions',
      'Pest',
    ],
    repo: 'https://github.com/jonashenriquedev/order-mananger-crud',
    featured: true,
  },
  // {
  //   title: 'API REST (NestJS) — Arquitetura Hexagonal',
  //   description:
  //     'Projeto de API seguindo arquitetura hexagonal, com boa separação de camadas e foco em testes e evolução segura.',
  //   tags: ['NestJS', 'TypeScript', 'Swagger', 'PostgreSQL'],
  //   repo: 'https://github.com/jonashenriquedev',
  // },
  // {
  //   title: 'ERP em Laravel — Módulos Financeiros e Operacionais',
  //   description:
  //     'Exemplos de padrões e soluções aplicadas em contexto de ERP: otimização de queries, idempotência com Redis e padronização via Docker.',
  //   tags: ['Laravel', 'Redis', 'Docker', 'Performance'],
  // },
]

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          Projetos
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
          Em destaque
        </h2>

        <div className="mt-10 grid gap-4">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div id="contato" className="mt-16 border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Contato
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            Vamos conversar
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Quer falar sobre um projeto, vaga ou parceria? Me chame no email ou LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:jonashssantos@gmail.com"
              className="inline-flex border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-black/50 transition-colors"
            >
              jonashssantos@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jonas-henrique-da-silva-santos-b88321160/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-white hover:border-white/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article className="border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-base font-semibold text-white">{project.title}</h3>
            {featured && (
              <span className="border border-white/10 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-widest text-white/60">
                Destaque
              </span>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Repositório"
            >
              <Github size={18} />
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Preview"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="border border-white/10 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-widest text-white/70"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
