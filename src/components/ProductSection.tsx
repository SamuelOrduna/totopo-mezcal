import { motion } from 'framer-motion'
import { Plus, Check, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import imagotipo from '../assets/brand/imagotipo.png'
import patternPicos from '../assets/brand/pattern-picos.png'
import PatternDivider from './PatternDivider'
import { products, type Product } from '../data/products'
import { useCart } from '../context/CartContext'
import { shop, waLink } from '../data/content'
import GoldSweep from './GoldSweep'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { add } = useCart()
  const [justAdded, setJustAdded] = useState(false)
  const orderable = product.price !== undefined

  function handleAdd() {
    add(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1400)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.08 * index }}
      className="flex flex-col overflow-hidden rounded-2xl bg-teal-900 light:bg-white light:shadow-lg"
    >
      <div className="flex aspect-[3/4] items-center justify-center overflow-hidden bg-obsidian-950/40">
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} ${product.size}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <img src={imagotipo} alt="Totopo Mezcal Artesanal" className="w-24 opacity-90" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-cream-50 light:text-teal-950">{product.name}</h3>
        <p className="mt-2 font-body text-sm font-semibold leading-snug text-gold-500 light:text-wine-700">
          {product.tagline}
        </p>
        <p className="mt-2 font-body text-sm leading-relaxed text-cream-200 light:text-teal-900/75">
          {product.description}
        </p>

        <dl className="mt-4 space-y-1 border-t border-cream-100/10 pt-3 light:border-teal-950/10">
          {product.specs.map((s) => (
            <div key={s.label} className="flex justify-between gap-3 font-mono text-[0.68rem]">
              <dt className="text-cream-200/50 light:text-teal-900/45">{s.label}</dt>
              <dd className="text-right text-cream-100/80 light:text-teal-900/70">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-1 items-end justify-between gap-3">
          {orderable ? (
            <>
              <span className="font-mono text-lg text-cream-50 light:text-teal-950">
                ${product.price!.toLocaleString('es-MX')}
              </span>
              <button
                onClick={handleAdd}
                className={`relative flex items-center gap-2 overflow-hidden rounded-full border px-4 py-2.5 font-eyebrow text-xs transition ${
                  justAdded
                    ? 'border-gold-500 bg-teal-950 text-gold-500 light:bg-cream-50 light:text-wine-700'
                    : 'border-transparent bg-gold-500 text-teal-950 hover:bg-gold-300'
                }`}
              >
                {justAdded && <GoldSweep triggerKey={`${product.id}-added`} />}
                {justAdded ? (
                  <>
                    <Check size={14} strokeWidth={2.5} />
                    Agregado
                  </>
                ) : (
                  <>
                    <Plus size={14} strokeWidth={2.5} />
                    Agregar
                  </>
                )}
              </button>
            </>
          ) : (
            <a
              href={waLink(`Hola Totopo Mezcal, me interesa la edición ${product.name} 🌵`)}
              target="_blank"
              rel="noopener"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-2.5 font-eyebrow text-xs text-teal-950 transition hover:bg-gold-300"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              Consultar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductSection() {
  return (
    <section id="producto" className="bg-teal-950 py-20 light:bg-cream-50 sm:py-28">
      <PatternDivider src={patternPicos} height={16} className="opacity-70 light:invert light:opacity-50" />

      <div className="mx-auto max-w-5xl px-6 pt-16">
        <p className="text-center font-eyebrow text-xs text-gold-500 light:text-wine-700">
          {shop.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-3xl text-cream-50 light:text-teal-950 sm:text-4xl">
          {shop.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-sm text-cream-200 light:text-teal-900/70">
          {shop.subtitle}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
