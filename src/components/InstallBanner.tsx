import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Share } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

const AUTO_HIDE_MS = 5000
const SEEN_KEY = 'totopo-install-banner-seen'

export default function InstallBanner() {
  const { deferred, installable } = useInstallPrompt()
  const [dismissed, setDismissed] = useState(false)
  const [alreadySeen] = useState(() => localStorage.getItem(SEEN_KEY) === '1')
  const { totalCount } = useCart()

  const visible = installable && !dismissed && !alreadySeen

  useEffect(() => {
    if (visible) localStorage.setItem(SEEN_KEY, '1')
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setDismissed(true), AUTO_HIDE_MS)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          className={`glass-strong fixed inset-x-4 z-50 mx-auto flex max-w-md items-center gap-3 rounded-2xl p-4 text-cream-50 transition-[bottom] light:text-teal-950 sm:inset-x-auto sm:right-6 ${
            totalCount > 0 ? 'bottom-24' : 'bottom-4'
          }`}
        >
          <motion.div
            animate={{ scale: [1, 1.16, 1, 1.1, 1] }}
            transition={{ duration: 2.2, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
            className="flex flex-1 items-center gap-3"
          >
            <img
              src="/pwa-192x192.png"
              alt="Ícono de Totopo Mezcal"
              className="h-9 w-9 shrink-0 rounded-xl object-cover"
            />
            <div className="flex-1">
              {deferred ? (
                <p className="text-sm">
                  Instala Totopo en tu inicio: acceso directo con ícono propio y pedí en un toque.
                </p>
              ) : (
                <>
                  <p className="text-sm font-medium">Agrega Totopo a tu pantalla de inicio</p>
                  <ol className="mt-1.5 space-y-1">
                    <li className="flex items-center gap-1.5 text-xs opacity-70">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-[0.65rem] font-bold text-gold-500 light:text-wine-700">
                        1
                      </span>
                      Toca <Share className="h-3.5 w-3.5 text-gold-500 light:text-wine-700" strokeWidth={2} />{' '}
                      <strong>Compartir</strong> en Safari
                    </li>
                    <li className="flex items-center gap-1.5 text-xs opacity-70">
                      <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-[0.65rem] font-bold text-gold-500 light:text-wine-700">
                        2
                      </span>
                      Elige <strong>Añadir a pantalla de inicio</strong>
                    </li>
                  </ol>
                </>
              )}
            </div>
          </motion.div>
          {deferred && (
            <button
              onClick={async () => {
                await deferred.prompt()
                setDismissed(true)
              }}
              className="shrink-0 rounded-full bg-gold-500 px-3 py-1.5 text-xs font-semibold text-teal-950 hover:bg-gold-300"
            >
              Instalar
            </button>
          )}
          <button
            onClick={() => setDismissed(true)}
            className="shrink-0 opacity-50 hover:opacity-100"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
