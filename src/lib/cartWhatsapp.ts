import type { CartLine } from '../context/CartContext'
import { WHATSAPP_NUMBER } from '../data/content'

export function buildOrderMessage(lines: CartLine[]): string {
  const itemsText = lines
    .map(({ product, qty }, i) => {
      const subtotal = (product.price ?? 0) * qty
      return `${i + 1}.- ${qty}x ${product.name} ${product.size} — $${subtotal.toLocaleString('es-MX')}`
    })
    .join('\n')

  const total = lines.reduce((sum, { product, qty }) => sum + (product.price ?? 0) * qty, 0)

  return [
    '¡Hola Totopo Mezcal! Quiero hacer este pedido:',
    '',
    itemsText,
    '',
    `Total: $${total.toLocaleString('es-MX')} MXN`,
    '',
    '¿Me confirman disponibilidad y cómo es el envío? 🌵',
  ].join('\n')
}

export function buildOrderLink(lines: CartLine[]): string {
  const text = encodeURIComponent(buildOrderMessage(lines))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
