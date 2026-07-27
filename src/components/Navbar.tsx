import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import logo from '../assets/brand/logo.png'
import { nav, waLink, hero as heroContent } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-teal-950/95 shadow-lg backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="shrink-0">
          <img src={logo} alt="Totopo Mezcal Artesanal" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-eyebrow text-xs text-cream-100/90 transition hover:text-gold-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink('Hola Totopo Mezcal! Me interesa conocer sus productos 🌵')}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 font-eyebrow text-xs text-teal-950 transition hover:bg-gold-300"
          >
            <MessageCircle size={14} strokeWidth={2.5} />
            {heroContent.ctaPrimary}
          </a>
        </nav>

        <button
          className="text-cream-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream-100/10 bg-teal-950 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-eyebrow text-sm text-cream-100/90"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink('Hola Totopo Mezcal! Me interesa conocer sus productos 🌵')}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 font-eyebrow text-sm text-teal-950"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              {heroContent.ctaPrimary}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
