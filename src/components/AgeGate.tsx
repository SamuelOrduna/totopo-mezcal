import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import imagotipo from '../assets/brand/imagotipo.png'
import patternPicos from '../assets/brand/pattern-picos.png'
import PatternDivider from './PatternDivider'

const STORAGE_KEY = 'totopo-age-verified'

export default function AgeGate() {
  const [status, setStatus] = useState<'checking' | 'gate' | 'denied' | 'open'>('checking')

  useEffect(() => {
    const verified = localStorage.getItem(STORAGE_KEY) === 'true'
    setStatus(verified ? 'open' : 'gate')
  }, [])

  function confirm() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setStatus('open')
  }

  if (status === 'checking' || status === 'open') return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-950 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-sm rounded-3xl bg-teal-900 px-8 py-10 text-center text-cream-50 shadow-2xl"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <img src={imagotipo} alt="Totopo Mezcal Artesanal" className="mx-auto mb-6 w-40" />

          {status === 'gate' && (
            <>
              <h2 className="text-2xl leading-tight text-gold-500">¿Eres mayor de edad?</h2>
              <p className="mt-4 font-body text-sm normal-case text-cream-200">
                Este sitio contiene información sobre bebidas alcohólicas. Debes ser mayor de 18
                años para ingresar.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={confirm}
                  className="rounded-full bg-gold-500 px-6 py-3 font-eyebrow text-sm text-teal-950 transition hover:bg-gold-300"
                >
                  Sí, soy mayor de 18
                </button>
                <button
                  onClick={() => setStatus('denied')}
                  className="rounded-full border border-cream-100/30 px-6 py-3 font-eyebrow text-sm text-cream-200 transition hover:border-cream-100/60"
                >
                  No, soy menor
                </button>
              </div>
              <p className="mt-6 text-xs normal-case text-cream-200/60">
                Al ingresar, confirmas tener 18 años o más y aceptas el consumo responsable de
                alcohol.
              </p>
            </>
          )}

          {status === 'denied' && (
            <>
              <h2 className="text-xl leading-tight text-gold-500">Vuelve pronto</h2>
              <p className="mt-4 font-body text-sm normal-case text-cream-200">
                Este sitio es solo para mayores de edad. Te esperamos cuando cumplas 18 años para
                brindar juntos.
              </p>
            </>
          )}

          <div className="mt-8 overflow-hidden rounded-full opacity-70">
            <PatternDivider src={patternPicos} height={14} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
