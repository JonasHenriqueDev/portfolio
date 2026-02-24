export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">© {year} Jonas. Todos os direitos reservados.</p>
          {/*<p className="text-xs uppercase tracking-widest text-white/40">React + Tailwind</p>*/}
        </div>
      </div>
    </footer>
  )
}
