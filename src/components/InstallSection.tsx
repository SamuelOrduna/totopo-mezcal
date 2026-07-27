import { motion } from 'framer-motion'
import { Share } from 'lucide-react'
import { useInstallPrompt } from '../hooks/useInstallPrompt'

/** Versión permanente (no se esfuma) del aviso de instalar la app, para
 * quien se perdió el modal -- vive antes del footer. No se muestra si ya
 * está instalada o si el navegador no ofrece ninguna forma de instalarla. */
export default function InstallSection() {
  const { deferred, installable } = useInstallPrompt()

  if (!installable) return null

  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 pb-16 sm:px-10 sm:pt-20 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <span className="font-eyebrow text-xs text-gold-500 light:text-wine-700">Acceso directo</span>
        <h2 className="mt-2 text-3xl text-cream-50 light:text-teal-950 sm:text-4xl">
          Totopo en tu pantalla de inicio
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass-strong mt-8 flex flex-col items-center gap-4 rounded-3xl p-7 text-center text-cream-50 light:text-teal-950 sm:p-8"
      >
        <img
          src="/pwa-192x192.png"
          alt="Ícono de Totopo Mezcal"
          className="h-16 w-16 shrink-0 rounded-2xl object-cover shadow-[0_10px_25px_-10px_rgba(0,0,0,0.5)]"
        />
        <p className="text-cream-200/75 light:text-teal-900/65">
          Un ícono propio en tu inicio: entrás directo al catálogo, sin buscar el navegador ni
          escribir la dirección.
        </p>

        {deferred ? (
          <button
            onClick={() => deferred.prompt()}
            className="mt-2 w-full rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-teal-950 transition hover:-translate-y-0.5 hover:bg-gold-300 sm:w-auto"
          >
            Instalar Totopo Mezcal
          </button>
        ) : (
          <div className="mt-2 flex w-full flex-col items-center gap-3 border-t border-dashed border-cream-100/15 pt-6 light:border-teal-950/15 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex items-center gap-2.5 text-sm text-cream-200/80 light:text-teal-900/70">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-xs font-bold text-gold-500 light:text-wine-700">
                1
              </span>
              Toca <Share className="h-4 w-4 text-gold-500 light:text-wine-700" strokeWidth={2} />{' '}
              <strong className="text-cream-50 light:text-teal-950">Compartir</strong> en Safari
            </div>
            <div className="flex items-center gap-2.5 text-sm text-cream-200/80 light:text-teal-900/70">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-xs font-bold text-gold-500 light:text-wine-700">
                2
              </span>
              Elige <strong className="text-cream-50 light:text-teal-950">Añadir a pantalla de inicio</strong>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}
