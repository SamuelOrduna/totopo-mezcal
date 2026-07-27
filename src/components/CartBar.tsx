import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, ChevronRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartBar({ onOpen }: { onOpen: () => void }) {
  const { totalCount, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {totalCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] sm:flex sm:justify-center"
        >
          <button
            onClick={onOpen}
            className="glass-shine flex w-full items-center gap-3 rounded-2xl bg-gold-500 px-5 py-4 text-teal-950 shadow-xl shadow-black/40 transition hover:bg-gold-300 sm:w-auto sm:min-w-[22rem] sm:rounded-full"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-950/15">
              <ShoppingBag size={16} strokeWidth={2.25} />
            </span>
            <span className="flex-1 text-left font-eyebrow text-xs">
              {totalCount} {totalCount === 1 ? 'producto' : 'productos'}
            </span>
            <span className="font-mono text-base">${totalPrice.toLocaleString('es-MX')}</span>
            <span className="flex items-center gap-1 border-l border-teal-950/20 pl-3 font-eyebrow text-xs">
              Ver pedido
              <ChevronRight size={14} strokeWidth={2.25} />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
