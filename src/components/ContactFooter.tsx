import { MessageCircle, MapPin } from 'lucide-react'
import InstagramGlyph from './icons/InstagramGlyph'
import logo from '../assets/brand/logo.png'
import patternEstampado from '../assets/brand/pattern-estampado.png'
import PatternDivider from './PatternDivider'
import { contact, footer, waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, ORIGIN } from '../data/content'

export default function ContactFooter() {
  return (
    <footer id="contacto" className="bg-oxblood-900 text-cream-50">
      <PatternDivider src={patternEstampado} height={20} className="opacity-70" />

      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <p className="font-eyebrow text-xs text-gold-500">{contact.eyebrow}</p>
        <h2 className="mt-3 text-3xl text-cream-50 sm:text-4xl">{contact.title}</h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-cream-200">{contact.body}</p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={waLink(contact.waMessage)}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-eyebrow text-sm text-teal-950 transition hover:bg-gold-300"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 font-eyebrow text-sm text-cream-100 transition hover:border-gold-500 hover:text-gold-500"
          >
            <InstagramGlyph size={16} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 font-body text-xs text-cream-200/70">
          <MapPin size={13} />
          {ORIGIN}
        </p>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
          <img src={logo} alt="Totopo Mezcal Artesanal" className="h-9 w-auto opacity-90" />
          <p className="max-w-md text-center font-body text-[11px] leading-relaxed text-cream-200/60 sm:text-right">
            {footer.legal}
          </p>
        </div>
        <p className="pb-6 text-center font-mono text-[10px] text-cream-200/40">
          © {new Date().getFullYear()} Totopo Mezcal Artesanal
        </p>
      </div>
    </footer>
  )
}
