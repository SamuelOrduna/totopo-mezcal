import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartLine = { product: Product; qty: number }

type CartContextValue = {
  lines: CartLine[]
  totalCount: number
  totalPrice: number
  add: (product: Product) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  remove: (id: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])

  const add = (product: Product) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id)
      if (existing) {
        return prev.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l))
      }
      return [...prev, { product, qty: 1 }]
    })
  }

  const increment = (id: string) => {
    setLines((prev) => prev.map((l) => (l.product.id === id ? { ...l, qty: l.qty + 1 } : l)))
  }

  const decrement = (id: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.product.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    )
  }

  const remove = (id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id))
  }

  const clear = () => setLines([])

  const totalCount = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines])
  const totalPrice = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * (l.product.price ?? 0), 0),
    [lines],
  )

  return (
    <CartContext.Provider
      value={{ lines, totalCount, totalPrice, add, increment, decrement, remove, clear }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>')
  return ctx
}
