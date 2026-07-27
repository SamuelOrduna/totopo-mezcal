import { motion } from 'framer-motion'
import { ShieldCheck, Leaf, Gem, HeartHandshake } from 'lucide-react'
import perro from '../assets/brand/perro.png'
import patternMitla from '../assets/brand/pattern-mitla.png'
import PatternDivider from './PatternDivider'
import { story, mission, vision, values } from '../data/content'

function EyeGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={3}>
      <circle cx="32" cy="10" r="3" fill="currentColor" stroke="none" />
      <circle cx="20" cy="10" r="3" fill="currentColor" stroke="none" />
      <circle cx="44" cy="10" r="3" fill="currentColor" stroke="none" />
      <path d="M8 30c8-14 40-14 48 0-8 14-40 14-48 0Z" />
      <circle cx="32" cy="30" r="9" />
    </svg>
  )
}

function BalanceGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={3}>
      <path d="M32 6v40M18 12h28" strokeLinecap="round" />
      <path d="M32 46c-6 0-11 4-11 9h22c0-5-5-9-11-9Z" />
      <path d="M18 12 10 26h16l-8-14ZM46 12l-8 14h16l-8-14Z" strokeLinejoin="round" />
    </svg>
  )
}

const valueIcons = [ShieldCheck, Leaf, Gem, HeartHandshake]

export default function StorySection() {
  return (
    <section id="historia" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-eyebrow text-xs text-wine-700"
        >
          {story.eyebrow}
        </motion.p>

        <div className="mt-6 grid items-center gap-10 sm:grid-cols-[220px_1fr] sm:gap-14">
          <motion.img
            src={perro}
            alt="Totopo, el perro que inspira la marca"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-40 rounded-full bg-teal-900 p-6 sm:w-full"
          />

          <div>
            <h2 className="text-3xl text-teal-950 sm:text-4xl">{story.title}</h2>
            <div className="mt-5 space-y-4 font-body text-base leading-relaxed text-teal-900/80">
              {story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-teal-900/10 bg-white/60 p-6"
          >
            <BalanceGlyph />
            <h3 className="mt-3 font-eyebrow text-sm text-wine-700">{mission.title}</h3>
            <p className="mt-2 font-body text-sm text-teal-900/80">{mission.body}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-teal-900/10 bg-white/60 p-6"
          >
            <div className="text-wine-700">
              <EyeGlyph />
            </div>
            <h3 className="mt-3 font-eyebrow text-sm text-wine-700">{vision.title}</h3>
            <p className="mt-2 font-body text-sm text-teal-900/80">{vision.body}</p>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {values.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl bg-teal-900 p-5 text-cream-50"
              >
                <Icon size={22} className="text-gold-500" strokeWidth={2} />
                <h4 className="mt-3 font-eyebrow text-xs text-gold-500">{v.title}</h4>
                <p className="mt-1.5 font-body text-xs leading-relaxed text-cream-200">{v.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 opacity-80">
        <PatternDivider src={patternMitla} height={20} />
      </div>
    </section>
  )
}
