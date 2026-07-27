import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import imagotipo from '../assets/brand/imagotipo.png'
import patternPicos from '../assets/brand/pattern-picos.png'
import PatternDivider from './PatternDivider'
import { product, waLink } from '../data/content'

export default function ProductSection() {
  return (
    <section id="producto" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-center font-eyebrow text-xs text-wine-700">{product.eyebrow}</p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 overflow-hidden rounded-3xl bg-teal-900 text-cream-50 shadow-xl"
        >
          <PatternDivider src={patternPicos} height={16} className="opacity-80" />

          <div className="flex flex-col items-center px-8 py-10 text-center sm:px-14 sm:py-14">
            <img src={imagotipo} alt="" className="w-28 opacity-95" />
            <h2 className="mt-6 text-3xl text-cream-50 sm:text-4xl">{product.name}</h2>
            <span className="mt-2 font-mono text-sm tracking-widest text-gold-500">
              {product.size}
            </span>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-cream-200">
              {product.description}
            </p>

            <a
              href={waLink(product.waMessage)}
              target="_blank"
              rel="noopener"
              className="mt-8 flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-eyebrow text-sm text-teal-950 transition hover:bg-gold-300"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              {product.cta}
            </a>
          </div>

          <PatternDivider src={patternPicos} height={16} className="rotate-180 opacity-80" />
        </motion.div>
      </div>
    </section>
  )
}
