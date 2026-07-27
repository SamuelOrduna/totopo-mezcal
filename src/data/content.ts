export const WHATSAPP_NUMBER = '525574516577'
export const INSTAGRAM_HANDLE = '@totopomezcal'
export const INSTAGRAM_URL = 'https://instagram.com/totopomezcal'
export const ORIGIN = 'Santiago Matatlán, Oaxaca, México'

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { label: 'Producto', href: '#producto' },
  { label: 'Quiénes somos', href: '#historia' },
  { label: 'Cómo lo hacemos', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export const hero = {
  eyebrow: 'Mezcal artesanal · Oaxaca',
  title: 'Un brindis con propósito',
  subtitle:
    'Compartimos la esencia, tradición y riqueza cultural de Oaxaca en un mezcal 100% artesanal, cocido en horno de piedra y destilado en alambique de cobre.',
  ctaPrimary: 'Pedir por WhatsApp',
  ctaSecondary: 'Conocer la historia',
}

export const story = {
  eyebrow: 'Quiénes somos',
  title: 'La historia de Totopo',
  paragraphs: [
    'Totopo es un tributo a un perro leal: auténtico, cálido, sin pretensiones. Su espíritu es el que corre por cada botella — se celebra sin prisa y se comparte sin protocolo.',
    'Nacimos para llevar el verdadero mezcal artesanal de Santiago Matatlán —la capital mundial del mezcal— a las manos de quienes lo merecen, honrando el oficio de los maestros mezcaleros que lo destilan igual que sus abuelos.',
  ],
}

export const xolo = {
  eyebrow: 'El guardián',
  title: 'Un xoloitzcuintle en cada brindis',
  body: 'Para los antiguos mexicas, el xoloitzcuintle era un guía sagrado: acompañaba el alma en su paso al Mictlán. Nosotros lo vemos igual — un compañero real, sin pretensiones, que hace que cada camino (y cada brindis) se sienta acompañado. Por eso Totopo lleva su nombre y su espíritu.',
}

export const gallery = {
  eyebrow: 'Para cualquier ocasión',
  title: 'Totopo donde sea que estés',
  subtitle: 'De la sierra de Oaxaca a la playa, del centro histórico a Europa — así viaja Totopo con nuestra manada.',
}

export const mission = {
  title: 'Misión',
  body: 'Hacer de cada encuentro una expresión sincera y auténtica de lo que somos.',
}

export const vision = {
  title: 'Visión',
  body: 'Ser la marca número 1 en el mercado nacional y referente en la industria mezcalera.',
}

export const values = [
  { title: 'Honestidad', body: 'Lo que dice la etiqueta es lo que hay en la botella.' },
  { title: 'Sustentabilidad', body: 'Agave, agua y madera, respetando los tiempos del campo.' },
  { title: 'Calidad', body: 'Cada lote se prueba antes de llevar el nombre Totopo.' },
  { title: 'Confianza', body: 'Celebración sin prisa, compartida sin protocolo.' },
]

export const process = {
  eyebrow: 'Cómo lo hacemos',
  title: 'Del agave a la copa',
  steps: [
    {
      n: '01',
      title: 'Agave',
      body: 'Agave Angustifolia (Espadín), madurado de 7 a 10 años en las tierras de Santiago Matatlán.',
    },
    {
      n: '02',
      title: 'Cocción',
      body: 'Horno de piedra a 800 ºC durante 2 a 3 días, para caramelizar los azúcares del corazón del agave.',
    },
    {
      n: '03',
      title: 'Molienda',
      body: 'Tahona de piedra tirada a mano, siguiendo el mismo método de generaciones de maestros mezcaleros.',
    },
    {
      n: '04',
      title: 'Fermentación',
      body: 'En tinas de madera, al ritmo de las levaduras silvestres del entorno — sin prisa, sin atajos.',
    },
    {
      n: '05',
      title: 'Destilación',
      body: 'Doble destilación en alambique de cobre, gota a gota, hasta encontrar el punto exacto.',
    },
  ],
}

export const shop = {
  eyebrow: 'La tienda',
  title: 'Llévate un pedazo de Oaxaca',
  subtitle: 'Agrega al carrito y armamos tu pedido directo por WhatsApp — sin vueltas.',
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Hagamos un brindis',
  body: 'Pedidos, cotizaciones al mayoreo o simple curiosidad — escríbenos directo por WhatsApp.',
  waMessage: 'Hola Totopo Mezcal, tengo una consulta 🌵',
}

export const footer = {
  tagline: 'Mezcal Artesanal',
  legal:
    'El consumo excesivo de este producto es nocivo para la salud. Prohibida su venta a menores de edad.',
}
