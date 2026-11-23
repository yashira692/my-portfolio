# my-portfolio — Laboratorio 14: Optimización y SEO (Next.js)

Portafolio personal de **Yashira Rojas Alarcon** con meta tags dinámicos, Open Graph, `next/image` con lazy loading, sitemap y robots generados por Next.js.

## Tarea
- Nueva página **/contact** (metadata propia, canonical, formulario con mailto).
- `sitemap.xml` actualizado con `/contact`.
- `robots.txt` actualizado (`Allow: /contact`, `Host`, `Sitemap`).
- Despliegue en Vercel con dominio configurado desde **Settings → Domains**.

## Ejecutar
```bash
npm install
npm run dev
```

La URL pública del sitio se toma de `NEXT_PUBLIC_SITE_URL` (o del valor por defecto en `src/lib/data.ts`).
