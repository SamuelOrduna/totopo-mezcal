import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Share } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

const AUTO_HIDE_MS = 4000

export default function InstallToast() {
  const { deferred, installable } = useInstallPrompt()
  const [dismissed, setDismissed] = useState(false)
  const { totalCount } = useCart()

  const visible = installable && !dismissed

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setDismissed(true), AUTO_HIDE_MS)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className={`glass-strong fixed inset-x-4 z-40 mx-auto flex max-w-xs items-center gap-3 rounded-2xl p-3.5 text-cream-50 transition-[bottom] light:text-teal-950 sm:inset-x-auto sm:right-6 ${
            totalCount > 0 ? 'bottom-24' : 'bottom-4'
          }`}
        >
          <img
            src="/pwa-192x192.png"
            alt="Ícono de Totopo Mezcal"
            className="h-9 w-9 shrink-0 rounded-xl object-cover"
          />
          <div className="flex-1 text-xs">
            {deferred ? (
              <p className="text-cream-100/85 light:text-teal-900/75">
                Instala Totopo en tu inicio, un toque y listo.
              </p>
            ) : (
              <p className="flex flex-wrap items-center gap-1 text-cream-100/85 light:text-teal-900/75">
                Instala Totopo: toca <Share className="h-3 w-3 text-gold-500 light:text-wine-700" strokeWidth={2} />{' '}
                y "Añadir a inicio"
              </p>
            )}
          </div>
          {deferred && (
            <button
              onClick={async () => {
                await deferred.prompt()
                setDismissed(true)
              }}
              className="shrink-0 rounded-full bg-gold-500 px-2.5 py-1 text-[0.65rem] font-semibold text-teal-950 hover:bg-gold-300"
            >
              Instalar
            </button>
          )}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Cerrar"
            className="shrink-0 text-cream-100/40 hover:text-cream-50 light:text-teal-950/35 light:hover:text-teal-950"
          >
            <X size={14} strokeWidth={1.75} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
