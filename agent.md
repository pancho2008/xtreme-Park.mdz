# 🤖 Agent — Xtreme-Park Mendoza

## Instrucciones del agente
- Stack: **HTML5 semántico, CSS3 moderno (custom properties, Grid/Flexbox) y JavaScript vanilla (ES6+)**. Sin frameworks ni build step.
- Abrir `index.html` directamente en el navegador; no requiere servidor ni bundler.

## Estructura del proyecto
| Archivo | Rol |
|---|---|
| `index.html` | Landing page (nav, hero, nosotros, servicios, tarifas, galería, testimonios, contacto, footer) |
| `styles.css` | Todos los estilos (tokens en `:root`, BEM simple) |
| `script.js` | Interactividad: menú móvil, navbar scroll, scroll reveal, año actual |
| `memory.md` | Contexto y estado del proyecto |
| `agent.md` | Instrucciones del agente |

## Convenciones
- Textos de contenido en **español**.
- Naming BEM simple (`hero__title`, `nav__links`, `price-card`).
- Variables de color y tipografía en `:root` de `styles.css`.
- Breakpoints: `1024px`, `768px`, `480px`.

## Tareas frecuentes
- Cambios visuales → editar `styles.css`.
- Cambios de contenido/texto → editar `index.html`.
- Interactividad/menú → editar `script.js`.

## Notas
- El sitio usa `scroll-behavior: smooth` y `scroll-padding-top` para offset con navbar fija.
- Las animaciones de scroll requieren la clase `.reveal` + `.revealed` (IntersectionObserver en `script.js`).
