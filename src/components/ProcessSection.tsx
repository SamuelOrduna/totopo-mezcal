import { motion } from 'framer-motion'
import patternDobles from '../assets/brand/pattern-dobles.png'
import PatternDivider from './PatternDivider'
import { process } from '../data/content'

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-teal-950 py-20 text-cream-50 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-eyebrow text-xs text-gold-500">{process.eyebrow}</p>
        <h2 className="mt-3 text-3xl text-cream-50 sm:text-4xl">{process.title}</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-5">
          {process.steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className="relative border-t-2 border-gold-500/40 pt-5"
            >
              <span className="font-mono text-2xl text-gold-500">{step.n}</span>
              <h3 className="mt-3 font-eyebrow text-sm text-cream-50">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-cream-200">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 opacity-70">
        <PatternDivider src={patternDobles} height={26} />
      </div>
    </section>
  )
}
