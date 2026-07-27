import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/content'

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Hola Totopo Mezcal! Quiero hacer un pedido 🌵')}
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-teal-950 shadow-xl transition hover:scale-105 hover:bg-gold-300"
    >
      <MessageCircle size={24} strokeWidth={2.5} />
    </a>
  )
}
