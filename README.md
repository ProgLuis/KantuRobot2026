# Kanturobot Reloaded — 3.ª edición 2026

Sitio estático en HTML5, CSS3 y JavaScript vanilla. No requiere instalación, compilación, Node, backend ni base de datos.

## Abrir y publicar

- Abrir index.html directamente para consultar el sitio. El mapa requiere Internet.
- Para desarrollo, servir esta carpeta mediante un servidor HTTP local.
- GitHub Pages: usar la rama `main`, carpeta raíz `/`. URL prevista: https://progluis.github.io/KantuRobot2026/.
- Todos los recursos propios y anclas son relativos. No hay referencias a carpetas hermanas.

## Estructura

- index.html: contenido semántico, ocho tarjetas, premios, cronograma, sede de referencia y contacto.
- css/style.css: variables, componentes y breakpoints de 480, 768, 1100 y 1200 px.
- js/script.js: menú y selector de tema con preferencia persistente. Las fichas usan details/summary nativos y funcionan sin JS.
- images/: nueve copias sin modificación de recursos históricos y un favicon SVG tipográfico.
- documentos/: reservado exclusivamente para documentos de esta edición confirmados.
- Pruebas locales excluidas del repositorio, tests/responsive.html: pruebas ejecutables de ocho anchos en iframes reales. Requiere HTTP y sustituye solo el iframe remoto de Maps por about:blank.
- tests/resultados-responsive.json: resultado capturado de las pruebas.
- Informes internos y evidencias se conservan localmente, excluidos mediante .gitignore.

## Mantenimiento de contenido

Los premios se muestran en las tarjetas y en la lista de premios: mantener ambos bloques sincronizados. Suma aprobada en la solicitud: S/ 1.900. No se ha atribuido el importe a un puesto específico.

Las fichas técnicas conservan datos de la web histórica salvo los premios anteriores, identificados como provisionales. No cambiar dimensiones, edades, pesos, modalidades ni pistas sin validación del organizador.

Para activar inscripciones, confirmar primero la URL; después añadir un enlace accesible en header/hero y actualizar el bloque cronograma. No reutilizar automáticamente el formulario antiguo.

Para publicar documentos, seguir documentos/README.md. Cada tarjeta muestra el estado pendiente; sustituirlo por enlaces reales únicamente cuando existan documentos aprobados. No usar href="#" como marcador de posición.

Para añadir auspiciadores, confirmar autorización y vigencia; usar logos con tamaño reservado y enlaces reales. El bloque no hereda patrocinios anteriores.

## SEO

Se incluyen idioma, descripción, title, viewport, theme-color y Open Graph de texto. Canonical, og:url y og:image absoluto se añadirán cuando se conozcan la URL pública y la imagen social aprobadas. No se inventa fecha para datos estructurados Event.

## Verificaciones

Abrir tests/responsive.html por HTTP. Comprueba layout a 320, 360, 390, 430, 768, 1024, 1366 y 1920 px; anclas; ocho categorías; imágenes; fichas abiertas; acciones del menú; objetivo táctil de controles principales; ausencia de enlaces antiguos y errores JS.

La prueba no sustituye una auditoría formal de accesibilidad ni pruebas en dispositivos físicos. La disponibilidad del servicio Google Maps se comprueba aparte de la geometría del iframe.

Sin fuentes remotas, bibliotecas, audio automático ni analítica. El único recurso remoto incorporado es Google Maps, marcado como ubicación de referencia.
