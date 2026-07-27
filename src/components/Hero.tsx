import { motion } from 'framer-motion'
import { MessageCircle, ArrowDown } from 'lucide-react'
import imagotipo from '../assets/brand/imagotipo.png'
import heroPhoto from '../assets/photos/hero-agave.jpg'
import patternEstampado from '../assets/brand/pattern-estampado.png'
import PatternDivider from './PatternDivider'
import { hero, waLink } from '../data/content'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-obsidian-950 pt-24 text-cream-50"
    >
      <img
        src={heroPhoto}
        alt="Botella de Totopo Mezcal entre agaves, Santiago Matatlán, Oaxaca"
        className="absolute inset-0 h-full w-full object-cover object-[65%_35%]"
      />
      <div className="photo-scrim absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-eyebrow text-xs text-gold-500"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.img
          src={imagotipo}
          alt="Totopo Mezcal Artesanal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="animate-float-gentle my-6 w-40 drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:w-48"
        />

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-4xl leading-[1.05] text-cream-50 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-6xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance font-body text-base text-cream-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={waLink('Hola Totopo Mezcal! Quiero hacer un pedido 🌵')}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-eyebrow text-sm text-teal-950 shadow-lg shadow-black/30 transition hover:scale-[1.03] hover:bg-gold-300"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            {hero.ctaPrimary}
          </a>
          <a
            href="#historia"
            className="flex items-center justify-center gap-2 rounded-full border border-cream-100/40 bg-obsidian-950/20 px-7 py-3.5 font-eyebrow text-sm text-cream-100 backdrop-blur-sm transition hover:border-gold-500 hover:text-gold-500"
          >
            {hero.ctaSecondary}
            <ArrowDown size={14} />
          </a>
        </motion.div>
      </div>

      <PatternDivider src={patternEstampado} height={22} className="relative opacity-90" />
    </section>
  )
}
