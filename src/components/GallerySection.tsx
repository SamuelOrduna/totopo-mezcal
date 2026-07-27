import { motion } from 'framer-motion'
import galleryAgave from '../assets/photos/gallery-agave.jpg'
import galleryXolo from '../assets/photos/gallery-xolo.jpg'
import galleryOcean from '../assets/photos/gallery-ocean.jpg'
import galleryDoor from '../assets/photos/gallery-door.jpg'
import galleryStreet from '../assets/photos/gallery-street.jpg'
import galleryBooth from '../assets/photos/gallery-booth.jpg'
import galleryAgave2 from '../assets/photos/gallery-agave2.jpg'
import { gallery } from '../data/content'

const photos = [
  { src: galleryAgave, caption: 'Directo del maguey, Santiago Matatlán', rotate: -4 },
  { src: galleryBooth, caption: 'La manada Totopo en expo', rotate: 2 },
  { src: galleryXolo, caption: 'Con la manada, donde sea', rotate: 3 },
  { src: galleryOcean, caption: 'Frente al Pacífico', rotate: -2 },
  { src: galleryAgave2, caption: 'Entre los magueyes de Matatlán', rotate: 4 },
  { src: galleryDoor, caption: 'De viaje por Europa', rotate: -3 },
  { src: galleryStreet, caption: 'En cualquier esquina', rotate: 3 },
]

export default function GallerySection() {
  return (
    <section className="overflow-hidden bg-obsidian-950 py-20 light:bg-cream-50 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-eyebrow text-xs text-gold-500"
        >
          {gallery.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-3xl text-cream-50 light:text-teal-950 sm:text-4xl"
        >
          {gallery.title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-md text-center font-body text-sm text-cream-200 light:text-teal-900/70">
          {gallery.subtitle}
        </p>
      </div>

      {/* Mobile/tablet: carrusel horizontal con scroll-snap. Desktop ancho:
          se acomodan solas en filas centradas, como polaroids sobre una mesa. */}
      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-auto lg:max-w-6xl lg:flex-wrap lg:justify-center lg:gap-6 lg:overflow-visible lg:px-6">
        {photos.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            className="group relative w-[15rem] shrink-0 snap-center rounded-xl bg-cream-50 p-2.5 pb-10 shadow-2xl shadow-black/50 lg:w-52"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-3 text-center font-mono text-[0.65rem] text-teal-950/70">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
