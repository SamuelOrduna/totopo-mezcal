import espadin750 from '../assets/photos/product-espadin-750.jpg'
import espadinPachita from '../assets/photos/product-espadin-pachita.jpg'
import diaDeMuertos from '../assets/photos/product-diamuertos.jpg'

export type Product = {
  id: string
  name: string
  size: string
  tagline: string
  /** Sin precio confirmado -> se muestra "Consultar por WhatsApp" en vez de agregar al carrito. */
  price?: number
  description: string
  specs: { label: string; value: string }[]
  image?: string
}

export const products: Product[] = [
  {
    id: 'espadin-750',
    name: 'Espadín Joven 750ml',
    size: '750ml',
    tagline: 'El mezcal para compartir la mesa, la historia y el momento.',
    price: 450,
    description:
      'Mezcal joven elaborado con agave Espadín (Agave angustifolia) en Santiago Matatlán, Oaxaca, la Capital Mundial del Mezcal. Una expresión amable, equilibrada y fácil de disfrutar, sin perder el carácter auténtico del agave. Su presentación de 750 ml está hecha para compartir, sin prisa.',
    specs: [
      { label: 'Agave', value: 'Espadín (Agave angustifolia)' },
      { label: 'Origen', value: 'Santiago Matatlán, Oaxaca' },
      { label: 'Contenido', value: '750 ml' },
      { label: 'Alcohol', value: '38% Alc. Vol.' },
    ],
    image: espadin750,
  },
  {
    id: 'espadin-pachita-200',
    name: 'Espadín Joven Pachita 200ml',
    size: '200ml',
    tagline: 'Un pedacito de Oaxaca que cabe donde sea.',
    price: 150,
    description:
      'La versión de bolsillo de nuestro mezcal Espadín, elaborada en Santiago Matatlán, Oaxaca. Conserva el mismo sabor, carácter y 38% de alcohol de la botella grande, en formato práctico de 200 ml — ideal para llevar, compartir de viaje o regalar.',
    specs: [
      { label: 'Agave', value: 'Espadín (Agave angustifolia)' },
      { label: 'Origen', value: 'Santiago Matatlán, Oaxaca' },
      { label: 'Contenido', value: '200 ml' },
      { label: 'Alcohol', value: '38% Alc. Vol.' },
    ],
    image: espadinPachita,
  },
  {
    id: 'dia-de-muertos',
    name: 'Ensamble Espadín-Guishé',
    size: '375ml · Edición especial Día de Muertos',
    tagline: 'Etiqueta conmemorativa, tiraje limitado.',
    description:
      'Ensamble de dos agaves con etiqueta conmemorativa de Día de Muertos. Tiraje limitado — consulta disponibilidad antes de que se agote.',
    specs: [
      { label: 'Origen', value: 'Santiago Matatlán, Oaxaca' },
      { label: 'Contenido', value: '375 ml' },
      { label: 'Alcohol', value: '48% Alc. Vol.' },
    ],
    image: diaDeMuertos,
  },
]

export function findProduct(id: string) {
  return products.find((p) => p.id === id)
}
