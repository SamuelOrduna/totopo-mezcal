import { motion } from 'framer-motion'
import bannerOcean from '../assets/photos/banner-ocean.jpg'

export default function LandscapeBanner() {
  return (
    <section className="relative h-[22rem] w-full overflow-hidden sm:h-[26rem]">
      <img
        src={bannerOcean}
        alt="Costa de Oaxaca"
        className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-obsidian-950/10 to-obsidian-950/40" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex h-full items-end justify-center px-6 pb-10 text-center sm:pb-14"
      >
        <p className="max-w-lg font-display text-2xl uppercase leading-tight text-cream-50 drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-3xl">
          De la sierra al mar, Oaxaca cabe en una copa
        </p>
      </motion.div>
    </section>
  )
}
