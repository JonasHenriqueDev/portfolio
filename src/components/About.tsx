export default function About() {
  return (
    <section id="sobre" className="border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Resumo
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Backend com experiência em sistemas críticos
            </h2>
            <p className="mt-6 leading-relaxed text-white/70">
              Desenvolvedor Backend com mais de 3 anos de experiência na construção e evolução de sistemas ERP e APIs
              REST escaláveis utilizando Laravel e NestJS. Experiência com arquitetura de software, idempotência com
              Redis e infraestrutura em AWS.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Atuação em sistemas que suportam mais de 250 usuários, com foco em performance, confiabilidade e redução
              de custos operacionais.
            </p>
          </div>

          <div className="border border-white/10 bg-white/5 p-6">
            <div className="grid gap-6">
              <Item k="Local" v="Garanhuns, PE — Brasil" />
              <Item k="Email" v="jonashssantos@gmail.com" />
              <Item k="Formação" v="Engenharia de Software — UPE (2022–2026)" />
              <Item k="Idiomas" v="PT (nativo) • EN (B2)" />
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
      <span className="text-xs uppercase tracking-widest text-white/50">
        {k}
      </span>
      <span className="text-sm text-white/80">{v}</span>
    </div>
  )
}
