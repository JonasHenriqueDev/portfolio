import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto grid min-h-[70vh] max-w-5xl items-center px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Desenvolvedor de Software
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Jonas Santos
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              +3 anos construindo e evoluindo sistemas com Laravel e ReactJS. Experiência com Redis, AWS e
              performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
              <a
                href="tel:+5587981312850"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} />
                (87) 98131-2850
              </a>
              <a
                href="mailto:jonashssantos@gmail.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={16} />
                jonashssantos@gmail.com
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                Ver projetos
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 border border-white/10 px-4 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-white hover:border-white/20 transition-colors"
              >
                Experiências
              </a>

              <div className="h-6 w-px bg-white/10" />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/jonashenriquedev"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jonas-henrique-da-silva-santos-b88321160/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-white/40">
              Laravel • PHP • NestJS • React • Tailwind • Vite • PostgreSQL • Redis • Docker • AWS
            </p>
          </div>

          <div className="md:justify-self-end">
            <img
              src={profilePhoto}
              alt="Foto de Jonas Santos"
              className="h-40 w-40 border border-white/15 object-cover md:h-74 md:w-74 rounded-lg"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
