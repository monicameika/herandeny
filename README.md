# Herandeny Sánchez — herandeny.com

Landing page oficial de **Herandeny Sánchez**, Terapeuta Integrativa · Terapias Alternativas Amaneceres.

---

## 🗂 Estructura del proyecto

```
herandeny/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   └── main.js         # JavaScript (nav, animaciones, formulario)
├── images/             # Fotos de Herandeny (añadir aquí)
│   └── README.md
└── pages/              # Páginas adicionales futuras
```

---

## 🖼 Imágenes pendientes

En la carpeta `images/` añadir:
- `herandeny.jpg` — Foto principal para sección "Sobre mí" (formato vertical, buena calidad)
- `og-image.jpg` — Imagen para redes sociales 1200×630px

Una vez añadidas, descomentar estas líneas en `index.html`:
```html
<!-- TODO: <img src="images/herandeny.jpg" alt="Herandeny Sánchez"> -->
```

---

## 📬 Formulario de contacto

El formulario en `js/main.js` está preparado para conectarse con cualquier servicio. Opciones recomendadas:

**Opción A — Formspree (más fácil):**
1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. En `main.js` reemplazar el TODO con:
```js
fetch('https://formspree.io/f/TU_ID', {
  method: 'POST',
  body: new FormData(form),
  headers: { 'Accept': 'application/json' }
})
```

**Opción B — EmailJS:**
1. Crear cuenta en [emailjs.com](https://emailjs.com)
2. Seguir su documentación de integración

---

## 🚀 Deploy recomendado

**Opción A — Netlify (gratis, lo más fácil):**
1. Subir el repo a GitHub
2. Conectar en [netlify.com](https://netlify.com)
3. Deploy automático con cada push

**Opción B — Vercel:**
1. `npm i -g vercel`
2. `vercel` en la carpeta del proyecto

**Opción C — GitHub Pages:**
1. En Settings del repo → Pages → Branch: main

---

## 🌐 Dominio

Dominios comprados: `herandeny.com` + `herandenysana.com`

En Namecheap → Advanced DNS → añadir los registros que indique Netlify/Vercel.

---

## 🎨 Guía de estilo

| Variable | Valor | Uso |
|---|---|---|
| `--terracota` | `#C4622D` | Color principal, CTAs |
| `--brown-dark` | `#2D1F14` | Texto principal, fondos oscuros |
| `--cream` | `#FAF6F0` | Fondos claros |
| `--gold` | `#C9A96E` | Detalles, separadores |

Fuentes: **Cormorant Garamond** (títulos) + **Jost** (cuerpo)

---

## 📱 Secciones

1. **Hero** — Terracota full width, título centrado, stats
2. **Sobre mí** — Grid 2 col: texto + foto
3. **Servicios** — Grid 3 col sobre fondo oscuro
4. **Curso Péndulo** — Sección destacada con precio y descuento
5. **Proceso** — 4 pasos en línea
6. **Testimonios** — 3 cards (reemplazar con testimonios reales)
7. **CTA Banner** — Terracota con tagline principal
8. **Contacto** — Formulario + datos de contacto
9. **Footer**

---

## ✅ TODO antes del lanzamiento

- [ ] Añadir foto de Herandeny en `images/herandeny.jpg`
- [ ] Añadir og:image en el `<head>`
- [ ] Conectar formulario de contacto (Formspree recomendado)
- [ ] Reemplazar testimonios con reales
- [ ] Configurar dominio en Netlify
- [ ] Añadir Google Analytics (opcional)
- [ ] Confirmar precio y fechas del curso de péndulo

---

*Proyecto desarrollado con Claude · Mayo 2025*
