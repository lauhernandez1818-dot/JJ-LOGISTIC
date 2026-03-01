# J.J LOGISTICS C.A — Landing

Landing de conversión para J.J LOGISTICS C.A y JJ Asociados. Next.js 14 (App Router), Tailwind CSS y Framer Motion. Branding negro y dorado metálico.

## Cómo ejecutar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build producción

```bash
npm run build
npm start
```

## Estructura

- `app/` — Layout, página principal y estilos globales
- `components/` — Navbar, Hero, Dual-Hub, ServiceGrid, GlobalMap, ContactForm, GoldButton, Footer
- `lib/constants.ts` — Direcciones, servicios y textos

## SEO

Metadata orientada a: Logística USA-Venezuela, Agenciamiento Aduanal, J.J LOGISTICS C.A, Doral, Puerto Cabello. Incluye sitemap.xml y robots.txt dinámicos.

## Cuando tengas el dominio (Cloudflare + Vercel)

1. **Variables de entorno en Vercel** (Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` = `https://tudominio.com`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (Google Analytics 4)

2. **Google Analytics**: Crear propiedad en [analytics.google.com](https://analytics.google.com), copiar el Measurement ID (G-...) y añadirlo a Vercel.

3. **Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console) → Añadir propiedad → Verificar con tu dominio.

4. **Actualizar** `SITE_URL` en `lib/constants.ts` con tu dominio.
