import { useI18n } from '../i18n'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, format } = useI18n()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">{format(t.footer.rightsTemplate, { year })}</p>
        </div>
      </div>
    </footer>
  )
}
