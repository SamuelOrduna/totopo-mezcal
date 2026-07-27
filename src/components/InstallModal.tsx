import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Share } from 'lucide-react'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

const AUTO_HIDE_MS = 10000

export default function InstallModal() {
  const { deferred, installable } = useInstallPrompt()
  const [dismissed, setDismissed] = useState(false)

  const visible = installable && !dismissed

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setDismissed(true), AUTO_HIDE_MS)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDismissed(true)}
            className="fixed inset-0 z-[90] bg-obsidian-950/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="glass-strong fixed inset-x-4 top-1/2 z-[91] mx-auto max-w-sm -translate-y-1/2 rounded-3xl p-7 text-center text-cream-50 light:text-teal-950 sm:p-8"
          >
            <button
              onClick={() => setDismissed(true)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 text-cream-100/50 hover:text-cream-50 light:text-teal-950/40 light:hover:text-teal-950"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <motion.img
              animate={{ scale: [1, 1.1, 1, 1.06, 1] }}
              transition={{ duration: 2.2, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' }}
              src="/pwa-192x192.png"
              alt="Ícono de Totopo Mezcal"
              className="mx-auto h-16 w-16 rounded-2xl object-cover shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)]"
            />

            <p className="mt-4 font-eyebrow text-xs text-gold-500 light:text-wine-700">
              Instala la app
            </p>

            {deferred ? (
              <>
                <p className="mt-2 text-sm text-cream-200/80 light:text-teal-900/70">
                  Instala Totopo Mezcal en tu inicio: acceso directo con ícono propio y pedí en un
                  toque.
                </p>
                <button
                  onClick={async () => {
                    await deferred.prompt()
                    setDismissed(true)
                  }}
                  className="mt-5 w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-teal-950 transition hover:bg-gold-300"
                >
                  Instalar Totopo Mezcal
                </button>
              </>
            ) : (
              <>
                <p className="mt-2 text-sm text-cream-200/80 light:text-teal-900/70">
                  Agrega Totopo Mezcal a tu pantalla de inicio:
                </p>
                <ol className="mt-4 space-y-2 text-left">
                  <li className="flex items-center gap-2 text-sm text-cream-200/80 light:text-teal-900/70">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-[0.65rem] font-bold text-gold-500 light:text-wine-700">
                      1
                    </span>
                    Toca <Share className="h-3.5 w-3.5 text-gold-500 light:text-wine-700" strokeWidth={2} />{' '}
                    <strong className="text-cream-50 light:text-teal-950">Compartir</strong> en Safari
                  </li>
                  <li className="flex items-center gap-2 text-sm text-cream-200/80 light:text-teal-900/70">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-[0.65rem] font-bold text-gold-500 light:text-wine-700">
                      2
                    </span>
                    Elige <strong className="text-cream-50 light:text-teal-950">Añadir a pantalla de inicio</strong>
                  </li>
                </ol>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
