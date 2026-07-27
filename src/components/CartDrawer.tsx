import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { buildOrderLink } from '../lib/cartWhatsapp'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, totalPrice, increment, decrement, remove, clear } = useCart()

  // El scroll real corre sobre <html>, no sobre <body> -- hay que bloquear
  // ambos o el fondo se sigue moviendo detrás del carrito en mobile.
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    const body = document.body
    const prevHtml = html.style.overflow
    const prevBody = body.style.overflow
    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    return () => {
      html.style.overflow = prevHtml
      body.style.overflow = prevBody
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-obsidian-950/70 backdrop-blur-sm light:bg-teal-950/20"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="glass-strong fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain p-6 text-cream-50 light:text-teal-950 sm:inset-y-0 sm:left-auto sm:right-0 sm:w-full sm:max-w-sm sm:rounded-l-3xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-cream-50 light:text-teal-950">Tu pedido</h3>
              <button
                onClick={onClose}
                aria-label="Cerrar carrito"
                className="flex h-11 w-11 items-center justify-center rounded-full text-cream-100/60 transition hover:bg-cream-100/10 hover:text-cream-50 light:text-teal-950/50 light:hover:bg-teal-950/5 light:hover:text-teal-950"
              >
                <X size={22} strokeWidth={1.75} />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="mt-10 flex flex-1 flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-50/8 text-gold-500 light:bg-teal-950/6 light:text-wine-700">
                  <ShoppingBag size={22} strokeWidth={1.75} />
                </span>
                <p className="mt-4 font-body text-sm text-cream-200/70 light:text-teal-900/60">
                  Todavía no agregaste nada. Elige tu mezcal y arma tu pedido.
                </p>
                <a
                  href="#producto"
                  onClick={onClose}
                  className="mt-5 flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 font-eyebrow text-xs text-teal-950 transition hover:bg-gold-300"
                >
                  Ver catálogo
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
              </div>
            ) : (
              <div className="mt-6 flex-1 space-y-3">
                {lines.map(({ product, qty }) => (
                  <div key={product.id} className="glass rounded-2xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="font-eyebrow text-xs text-cream-50 light:text-teal-950">
                          {product.name} · {product.size}
                        </p>
                        <p className="mt-1 font-mono text-sm text-gold-500 light:text-wine-700">
                          ${((product.price ?? 0) * qty).toLocaleString('es-MX')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-cream-50/10 px-1 py-1 light:bg-teal-950/8">
                        <button
                          onClick={() => decrement(product.id)}
                          aria-label="Quitar uno"
                          className="flex h-6 w-6 items-center justify-center rounded-full text-cream-100 hover:bg-cream-50/15 light:text-teal-950 light:hover:bg-teal-950/10"
                        >
                          <Minus size={12} strokeWidth={2.5} />
                        </button>
                        <span className="w-4 text-center font-mono text-xs">{qty}</span>
                        <button
                          onClick={() => increment(product.id)}
                          aria-label="Agregar uno"
                          className="flex h-6 w-6 items-center justify-center rounded-full text-cream-100 hover:bg-cream-50/15 light:text-teal-950 light:hover:bg-teal-950/10"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.id)}
                        aria-label="Quitar del carrito"
                        className="text-cream-100/35 hover:text-wine-600 light:text-teal-950/30 light:hover:text-wine-700"
                      >
                        <Trash2 size={16} strokeWidth={1.75} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 border-t border-cream-100/10 pt-4 light:border-teal-950/10">
              <div className="flex items-center justify-between">
                <span className="font-eyebrow text-xs text-cream-200/60 light:text-teal-900/50">
                  Total
                </span>
                <span className="font-mono text-xl text-gold-500 light:text-wine-700">
                  ${totalPrice.toLocaleString('es-MX')}
                </span>
              </div>

              <a
                href={lines.length > 0 ? buildOrderLink(lines) : undefined}
                target="_blank"
                rel="noopener"
                aria-disabled={lines.length === 0}
                className="glass-shine mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3.5 font-eyebrow text-sm text-teal-950 transition hover:scale-[1.02] hover:bg-gold-300 aria-disabled:pointer-events-none aria-disabled:opacity-40"
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                Pedir por WhatsApp
              </a>

              {lines.length > 0 && (
                <button
                  onClick={clear}
                  className="mt-3 w-full text-center font-body text-xs text-cream-200/40 hover:text-cream-100 light:text-teal-900/40 light:hover:text-teal-950"
                >
                  Vaciar carrito
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
