# Extracción de Figma — ZIMA Coffee + Cowork

Fecha de extracción: 2026-07-28  
Archivo: `ZIMA Coffee + Cowork — Website Design System`  
File version: `2381125994848630748`  
Última modificación observada: `2026-07-28T05:15:29Z`  
Método: Figma REST API, sólo lectura

## Estado de la fuente

- La cuenta conectada tiene rol `owner`.
- El archivo contiene 8 páginas, 14 vistas de sitio y 3 breakpoints de referencia.
- Se revisaron 1,684 frames, 1,337 nodos de texto, 236 vectores y 98 usos de imagen.
- Hay 32 imágenes raster únicas.
- Existen 25 estilos de texto publicados.
- No existen componentes ni component sets publicados.
- Ninguna capa está vinculada a estilos de texto ni a variables.
- `01 — Foundations`, `02 — Components`, `06 — Prototype & flows` y `07 — Content pending` están vacías.
- No hay puntos iniciales, enlaces, transiciones ni interacciones de prototipo.
- El token actual no incluye `file_variables:read`, pero el JSON de las capas tampoco contiene `boundVariables`; el diseño visible está resuelto con valores locales.

Conclusión: el sistema debe normalizarse a partir de los valores usados en las pantallas. No se debe asumir que Figma contiene una librería reutilizable lista para trasladar.

## Breakpoints y contenedores

| Modo    |   Frame | Contenido | Margen lateral | Header | Padding vertical habitual |
| ------- | ------: | --------: | -------------: | -----: | ------------------------: |
| Desktop | 1440 px |   1180 px |         130 px |  80 px |                 80–100 px |
| Tablet  |  768 px |    704 px |          32 px |  76 px |                  64–80 px |
| Mobile  |  390 px |    350 px |          20 px |  68 px |                  48–56 px |

Reglas observadas:

- Desktop usa grids de 3 o 4 columnas y secciones de ancho completo.
- Mobile apila las tarjetas a una columna y usa CTAs de 350 × 47 px.
- Tablet conserva varias composiciones horizontales, pero las vistas entregadas tienen fallas de compresión y clipping; no deben copiarse literalmente.
- Las imágenes usan `FILL`; no se observaron gradientes.
- La base de espaciado predominante es 4 px.

Escala de gaps usada: `2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80`.

Paddings recurrentes:

- Desktop section: `100px 130px` y `80px 130px`.
- Tablet section: `80px 32px`.
- Mobile section: `56px 20px`.
- Card desktop: `32px`.
- Card mobile: `20px` o `24px`.
- Button desktop: `12px 24px`, o altura fija de 48/56 px con 32 px laterales.
- Button mobile: `14px 24px`.

## Paleta

### Colores centrales

| Uso semántico sugerido | Valor     | Uso observado                                     |
| ---------------------- | --------- | ------------------------------------------------- |
| Ink                    | `#171715` | Texto principal, botones oscuros, header y footer |
| Charcoal               | `#34383A` | Secciones CTA, logo y fondos oscuros alternos     |
| Cocoa dark             | `#4A2F23` | Enlaces y acentos oscuros                         |
| Brand brown            | `#95613F` | Eyebrows, iconos, enlaces y bordes destacados     |
| Brand lime             | `#C4D06F` | CTA principal, estado activo y navegación activa  |
| Canvas                 | `#FAF7F1` | Fondo general                                     |
| Surface warm           | `#F2ECE2` | Secciones alternas, barras y cards destacadas     |
| Sand                   | `#EADFC9` | Divisores y bordes de acordeón                    |
| Border strong          | `#B8AA98` | Borde de tarjetas y controles                     |
| Divider                | `#D4C9BA` | Tablas, anotaciones y líneas                      |
| Muted text             | `#666B6E` | Texto secundario                                  |
| White                  | `#FFFFFF` | Cards, texto inverso y controles                  |

### Colores de estado

| Estado        | Valor                 |
| ------------- | --------------------- |
| Success       | `#4ADE80`             |
| Warning       | `#FACC15`             |
| Error         | `#EF4444`             |
| Error text    | `#991B1B` / `#7F1D1D` |
| Error surface | `#FEF2F2`             |
| Error border  | `#FCA5A5` / `#F87171` |

Hay overlays puntuales de negro al 45%, blanco al 10–38% y canvas al 70%.

## Tipografía

Familia única: `Manrope`.

Pesos observados: `400, 500, 600, 700, 800`.

Los 25 nombres publicados son:

- Desktop: `Display XL`, `Display`, `H1`, `H2`, `H3`, `H4`, `Lead`, `Body L`, `Body`, `Body S`, `Label`, `Eyebrow`, `Caption`.
- Mobile: `Display XL`, `Display`, `H1`, `H2`, `H3`, `H4`, `Lead`, `Body`, `Body S`, `Label`, `Eyebrow`, `Caption`.

Estos estilos no están aplicados a ninguna capa. La escala normalizada que mejor representa las pantallas es:

| Rol             | Desktop                    | Tablet                           | Mobile                  |
| --------------- | -------------------------- | -------------------------------- | ----------------------- |
| Hero            | 52/59.8, 800               | 42/48.3, 800                     | 34/40.8, 800            |
| H1 / page title | 40/48–54.64, 800           | 32/38.4–43.71, 800               | 28/35–38.25, 800        |
| H2              | 32/38.4–43.71, 800         | 28/38.25, 800                    | 28/35, 800              |
| H3              | 24–28/32.78–38.25, 800     | 20/27.32, 800                    | 22–24/30.05–32.78, 800  |
| Card title      | 20–22/27.32–30.05, 800     | 18/24.59, 800                    | 18–20/24.59–27.32, 800  |
| Lead            | 18/28.8, 400               | 15/22.5–24, 400                  | 15/22.5–24, 400/500     |
| Body            | 15–16/24–25.6, 400         | 14–15/19.6–22.5, 400             | 13–15/19.5–24, 400/500  |
| Body small      | 13–14/17.76–21, 400/500    | 12–13/16.39–18.2, 400            | 12–14/16.39–21, 400     |
| Label / button  | 13–15/17.76–20.49, 700     | 12–14/16.39–19.12, 700           | 13–14/17.76–19.12, 700  |
| Eyebrow         | 12/16.39, 700 uppercase    | 11–12/15.03–16.39, 700 uppercase | 11/15.03, 700 uppercase |
| Caption         | 10–12/13.66–16.39, 400/700 | 11–12/15.03–16.39, 400           | 10–12/13.66–16.39, 400  |

No hay letter spacing relevante; casi todas las capas usan `0`.

## Radios, bordes y sombras

Escala de radios observada: `3, 4, 5, 6, 8, 12, 16, 18, 20, 24, 100`.

Normalización recomendada:

- `3`: dots.
- `4`: controles pequeños y logo mobile.
- `6`: botones y logo desktop/tablet.
- `8`: barras, icon containers y anotaciones.
- `12`: cards, imágenes y tablas.
- `16`: calendario y paneles especiales.
- `20–24`: cards editoriales puntuales.
- `100`: pills y segmented controls.

Sombras:

- Card: `0 4px 16px rgba(23, 23, 21, 0.0314)`.
- Card prominente: `0 4px 24px rgba(23, 23, 21, 0.0314)`.

El diseño depende más del borde cálido que de la elevación.

## Patrones reutilizables

### Header

- Desktop: 1440 × 80, padding horizontal 130, logo 102 × 36, nav, CTA.
- Tablet: 768 × 76, padding horizontal 32, logo 93 × 32, nav reducida, CTA y menú.
- Mobile: 390 × 68, padding horizontal 20, logo 84 × 30 y menú.
- Fondo habitual: Ink. En Inicio desktop el header queda transparente sobre el hero; Reservar desktop usa Charcoal.

### Logo

- Desktop: símbolo 36 × 36, radio 6; wordmark total 102 × 36.
- Tablet: símbolo 32 × 32, radio 6; wordmark total 93 × 32.
- Mobile: símbolo 30 × 30, radio 4; wordmark total 84 × 30.

### Botones

- Primary lime: Brand lime + Ink, radio 6.
- Dark: Ink + White, radio 6.
- Outline: transparente + borde Ink o White, radio 6.
- Ghost/link: texto y flecha, gap 8, sin fondo.
- Desktop estándar: 43–56 px de alto.
- Mobile estándar: 350 × 47, padding `14px 24px`.
- Nav CTA: 106 × 38 desktop; 93 × 32 tablet.

### Section label

- Auto layout horizontal, gap 8.
- Dot de 6 × 6, radio 3.
- Texto eyebrow uppercase.
- Altura 15–16 px.

### Cards

- Fondo White, radio 12.
- Borde principal Border strong.
- Padding desktop 32; mobile 20–24.
- Cards destacadas usan Surface warm y borde Brand brown.
- Space card mobile: 350 × 305, imagen arriba y contenido debajo.
- Access card mobile: 350 × 244–273.
- Plan card mobile: 350 × 232.
- Hub card mobile: 350 × 359–377.
- Testimonial card mobile: 350 × 198.

### Pills y segmented controls

- Radio 100.
- Desktop intention selector: 475 × 50, padding 6, gap 4.
- Tablet: 291 × 40, padding 4, gap 2.
- Mobile: tabs de 350 × 40 o pills individuales de 32 px de alto.

### FAQ

- Sin fondo de card.
- Separación con borde Sand.
- Desktop: ancho 1180, padding vertical 20, gap 16.
- Mobile: ancho 350, padding vertical 16–20, gap 12–16.
- Iconos plus/minus de 14–20 px.

### Formularios

Campos observados:

- Nombre.
- Correo.
- WhatsApp.
- Empresa o proyecto.
- Interés.
- Número de personas.
- Mensaje.
- Aceptación de aviso de privacidad.
- CTA `Solicitar información`.

El flujo de reservación incluye:

- Selector de modalidad: Day Pass, sala, podcast, visita.
- Calendario.
- Selector de horario.
- Estado de agenda: disponible, sin cupo y error.
- Fallback de Calendly por reintento y WhatsApp.
- Aviso de privacidad.

### Iconografía

Conjunto detectado:

`check`, `plus`, `minus`, `arrow-right`, `arrow-left`, `chevron-down`, `menu`, `map-pin`, `briefcase`, `users`, `mic`, `calendar`, `video`, `headphones`, `info`.

Tamaños usados: `10, 12, 13, 14, 16, 18, 20, 24 px`.

## Mapa de páginas y nodos

### Desktop

- Inicio `18:5`: header `18:6`, hero `18:19`, quick access `18:42`, spaces `18:72`, podcast `18:116`, memberships `18:133`, community `18:175`, testimonials `18:189`, lead capture `18:219`, location `18:252`, FAQ `18:282`, final CTA `18:302`, footer `18:311`.
- Espacios `18:417`: header `18:418`, hero `18:431`, cowork `18:446`, meeting room `18:480`, cafeteria `18:511`, podcast connector `18:524`, FAQ `18:530`, footer `18:549`.
- Podcast `18:592`: header `18:593`, hero `18:606`, problem/solution `18:621`, equipment `18:626`, pricing `18:658`, use cases `18:680`, process `18:717`, FAQ `18:741`, CTA `18:768`, footer `18:777`.
- Membresías `18:811`: header `18:812`, hero `18:825`, day pass `18:839`, individual `18:889`, team `18:978`, hours table `18:1016`, hourly rates `18:1048`, FAQ `18:1103`, CTA `18:1130`, footer `18:1141`.
- Comunidad `18:1178`: header `18:1179`, hero `18:1192`, vibe `18:1205`, editorial `18:1216`, events/resources `18:1228`, FAQ `18:1286`, CTA `18:1301`, footer `18:1310`.
- Reservar `18:1356`: header `18:1357`, hero `18:1371`, reservation hub `18:1380`, Calendly `18:1425`, visit us `18:1566`, FAQ `18:1601`, footer `18:1620`.

### Mobile

- Inicio `18:1676`.
- Espacios `18:1984`.
- Podcast `18:2129`.
- Membresías `18:2317`.
- Comunidad `18:2761`.
- Reservar `18:2901`.

### Tablet

- Inicio `18:3145`.
- Reservar `18:3432`.

## Assets raster

32 `imageRef` únicos, todos con `scaleMode: FILL`.

Reutilizados de forma central:

- `41ce63eaa8eea793fee12790c4ef0dbf43ad9903`: hero Inicio/Espacios.
- `91bbfda2997344533e5c28ff04a7419813d48199`: estudio de podcast.
- `3faf7e560d86cae7844146ae87c1aeb70693af3e`: cowork/form/reservación.
- `ce4e5d459ab1a6233f8c5d1ae993b8f1d6f90840`: sala de juntas.
- `3771832dda697ca06129d49c0f7855acfc6d18ec`: cafetería.
- `5994c912dc69d58c2d6ac8403875dd5fa2035da6`: comunidad hero.
- `61acd5a590b12f0f1bd4b5f2557032adaea6df83`: comunidad/reservación.
- `b4f88e7cda8af7a770f7fe1a1334d76847f955b4`: podcast feature.
- `ee9d94ce2cfe668df9602d9e4de1410839da0981`: mapa.
- `03f89671ff886a9c94a5cdf67477dc10b128bf16`: comunidad.
- `533db173114449110c379004da8a2d5f7ca8f2b1`: ilustración editorial.
- `b9a62d1f9ddcfe7edfc3aab12d359205ab0a0730`: reservación/visita.

Assets editoriales Comunidad:

`e245aeb843bcd8dd35ec526680248e08ccdb6207`, `538f10eb2d9d8af85dd0248dbbfe976e216be272`, `ecafcb4f10b3ec4958bf9625dd2b81f6f7e01228`, `bc9dbe3dc0039a100be3af66c4ab424de96e748d`, `bf108b25ba31526006a531013c9b9b53f881378e`, `694431edeb1260a4005bdaa0960e860440419226`.

Assets exclusivos o de moodboard:

`574b67370514f59ac3166bd8518ec3b46494d936`, `2e8c896371aed189707906e75df0834f81db1ca6`, `5f7fac8caecc2103e524a091d6b2bc97180709cb`, `3fb5df854d8d02a80b189d649629162a6bf97912`, `68728f51430fc8754b41fb1439279fff193a42c5`, `c787fe4091937d0d3d9800c5c4fae782130a92de`, `95058b40332d4de577e79075a8500d74a3fa00aa`, `5fb84630aa740b3df66eac3679b4855b4a0caae5`, `930915e7e0dc3c148a983ade4dd43e81892fee3e`, `5d410d7e81304399cc3a388af387bb2969c71146`, `d4955f92154a8467bc40cff1ab66d9e87fe427bf`, `024d3e0d6ef8762eeef60a46215c6c1a35bd7796`, `a37f325332635c7f86848807cb9a85751644399f`, `677f379d2e93a099dff705139c74da111720985c`.

## Contenido pendiente o inconsistente

Debe resolverse antes de implementar:

- WhatsApp usa el placeholder `+52 444 ZIMA_WP`.
- Los testimonios de Inicio incluyen `PENDIENTE DE APROBACIÓN` / `PENDIENTE`.
- Comunidad contiene 6 cards marcadas `CONTENIDO EN DESARROLLO` en desktop y mobile.
- El calendario está fijado a `Octubre 2025`.
- El copyright está fijado a `© 2025`.
- Conviven `hola@zimacowork.mx` y `contacto@zimacowork.mx`.
- Existe el copy erróneo `¿Anula ZIMA tiene estudio de podcast?` en Inicio desktop; mobile dice `¿ZIMA tiene estudio de podcast?`.
- El diseño menciona Calendly, pero no define URLs ni comportamiento real.
- No hay estados de hover, focus, disabled ni validación de campos formalizados.
- No hay prototipo que defina navegación, apertura de FAQ o interacción de tabs.

## Desviaciones visuales detectadas

- Inicio tablet `18:3145`: quick access, spaces, memberships y community comprimen cards y texto hasta producir columnas ilegibles.
- Reservar tablet `18:3432`: el título del hub queda en una columna muy estrecha y las cards quedan recortadas.
- Reservar mobile `18:2901`: la columna Legal del footer colapsa palabra por palabra.
- Los headers desktop no comparten exactamente el mismo fondo.
- Hay 127 combinaciones tipográficas locales para sólo 25 roles publicados.
- Varias capas genéricas se llaman `Frame` o `Rectangle`; los nodos reutilizables no están convertidos en componentes.

Estas desviaciones se consideran defectos o ambigüedades de la fuente, no especificaciones a reproducir.

## Criterio para la futura implementación

- Usar desktop, mobile y los tokens consolidados como fuente principal.
- Resolver tablet con reglas responsivas propias basadas en el contenedor de 704 px; no copiar sus composiciones rotas.
- Convertir los valores anteriores en tokens semánticos.
- Crear componentes reales para header, footer, buttons, section label, cards, FAQ, form fields, tabs y estados de agenda.
- Mantener el contenido pendiente fuera de producción hasta recibir valores definitivos.
- Exportar los assets por `imageRef` o por los node IDs registrados al iniciar la implementación; las URLs firmadas de Figma son temporales.
