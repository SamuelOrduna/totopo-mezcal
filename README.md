# Totopo Mezcal 🐺🌵

Sitio de marca de Totopo Mezcal Artesanal — historia, proceso de producción y producto, con pedidos directo por WhatsApp. Sin carrito, cuentas ni backend: es un sitio informativo/catálogo, no una tienda en línea.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (paleta oficial de marca: teal, cream, oro, vino)
- [Framer Motion](https://motion.dev/) para las animaciones de scroll
- [lucide-react](https://lucide.dev/) para íconos

Los assets de marca (logo, imagotipo, patrones oaxaqueños) vienen de `/home/samuel/Totopo-mezcal`, redimensionados a `src/assets/brand/`.

## Configuración

`src/data/content.ts` tiene `WHATSAPP_NUMBER` (ya configurado), `INSTAGRAM_HANDLE`, la descripción del producto y el resto del wording. No hay precio en pantalla porque no había uno confirmado — se puede agregar ahí mismo cuando se confirme.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```
