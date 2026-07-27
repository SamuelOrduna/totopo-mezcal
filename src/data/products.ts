import labelBadge from '../assets/photos/label-badge.jpg'
import diaDeMuertos from '../assets/photos/product-diamuertos.jpg'

export type Product = {
  id: string
  name: string
  size: string
  /** Sin precio confirmado -> se muestra "Consultar por WhatsApp" en vez de agregar al carrito. */
  price?: number
  description: string
  image?: string
}

export const products: Product[] = [
  {
    id: 'espadin-750',
    name: 'Espadín Joven',
    size: '750ml',
    price: 450,
    description:
      'Nuestro clásico: suave y de baja graduación, ideal para iniciarse en el mezcal o para disfrutarlo con experiencia.',
    image: labelBadge,
  },
  {
    id: 'espadin-200',
    name: 'Espadín Joven',
    size: '200ml',
    price: 150,
    description: 'La misma receta artesanal en formato compacto — perfecta para probar o para llevar de viaje.',
    image: labelBadge,
  },
  {
    id: 'dia-de-muertos',
    name: 'Ensamble Espadín-Guishé',
    size: '375ml · Edición especial Día de Muertos',
    description:
      'Etiqueta conmemorativa, ensamble de dos agaves. Tiraje limitado — consulta disponibilidad antes de que se agote.',
    image: diaDeMuertos,
  },
]

export function findProduct(id: string) {
  return products.find((p) => p.id === id)
}
