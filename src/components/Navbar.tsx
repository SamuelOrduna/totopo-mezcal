import { useEffect, useState } from 'react'
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react'
import logo from '../assets/brand/logo.png'
import { nav } from '../data/content'
import { useCart } from '../context/CartContext'
import { useTheme } from '../hooks/useTheme'

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalCount } = useCart()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const CartButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={onCartClick}
      aria-label="Ver carrito"
      className={`relative flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 font-eyebrow text-xs text-teal-950 transition hover:bg-gold-300 ${className}`}
    >
      <ShoppingBag size={14} strokeWidth={2.5} />
      Carrito
      {totalCount > 0 && (
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-teal-950 px-1 font-mono text-[0.6rem] text-gold-500">
          {totalCount}
        </span>
      )}
    </button>
  )

  const ThemeButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/25 text-cream-100 transition hover:border-gold-500 hover:text-gold-500 light:border-teal-950/15 light:text-teal-950 light:hover:border-wine-700 light:hover:text-wine-700 ${className}`}
    >
      {theme === 'dark' ? <Sun size={15} strokeWidth={2.25} /> : <Moon size={15} strokeWidth={2.25} />}
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-teal-950/95 shadow-lg backdrop-blur light:bg-cream-50/95'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="shrink-0">
          <img src={logo} alt="Totopo Mezcal Artesanal" className="h-10 w-auto light:invert" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-eyebrow text-xs text-cream-100/90 transition hover:text-gold-500 light:text-teal-950/80 light:hover:text-wine-700"
            >
              {item.label}
            </a>
          ))}
          <ThemeButton />
          <CartButton />
        </nav>

        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeButton />
          <CartButton className="px-3 py-1.5" />
          <button
            className="text-cream-50 light:text-teal-950"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-cream-100/10 bg-teal-950 px-6 py-4 light:border-teal-950/10 light:bg-cream-50 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-eyebrow text-sm text-cream-100/90 light:text-teal-950/80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
