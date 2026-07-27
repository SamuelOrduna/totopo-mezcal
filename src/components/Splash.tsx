import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import imagotipo from '../assets/brand/imagotipo.png'

const HOLD_MS = 2200

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const onFinishRef = useRef(onFinish)
  onFinishRef.current = onFinish

  useEffect(() => {
    const t = setTimeout(() => onFinishRef.current(), HOLD_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-obsidian-950"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, var(--color-teal-700), transparent 60%)',
        }}
      />

      <motion.img
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        src={imagotipo}
        alt="Totopo Mezcal Artesanal"
        className="relative w-48 object-contain sm:w-60"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative flex items-center gap-2"
      >
        <span className="h-1 w-1 rounded-full bg-gold-500" />
        <span className="font-eyebrow text-xs text-gold-500">Mezcal Artesanal · Oaxaca</span>
        <span className="h-1 w-1 rounded-full bg-gold-500" />
      </motion.div>
    </motion.div>
  )
}
