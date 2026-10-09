# Kanturobot Reloaded — 3.ª edición 2026

Sitio estático en HTML5, CSS3 y JavaScript vanilla. No requiere instalación, compilación, Node, backend ni base de datos.

## Abrir y publicar

- Abrir index.html directamente para consultar el sitio. El mapa requiere Internet.
- Para desarrollo, servir esta carpeta mediante un servidor HTTP local.
- GitHub Pages: usar la rama `main`, carpeta raíz `/`. URL prevista: https://progluis.github.io/KantuRobot2026/.
- Todos los recursos propios y anclas son relativos. No hay referencias a carpetas hermanas.

## Estructura

- index.html: contenido semántico, nueve tarjetas, premios, cronograma, sede confirmada y contacto.
- css/style.css: variables, componentes y breakpoints de 480, 768, 1100 y 1200 px.
- js/script.js: menú y selector de tema con preferencia persistente. Las fichas usan details/summary nativos y funcionan sin JS.
- images/: recursos originales del sitio, Humanoide, QR de inscripción en SVG/PNG y favicon SVG.
- documentos/: reservado exclusivamente para documentos de esta edición confirmados.
- Pruebas locales excluidas del repositorio, tests/responsive.html: pruebas ejecutables de ocho anchos en iframes reales. Requiere HTTP y sustituye solo el iframe remoto de Maps por about:blank.
- tests/resultados-responsive.json: resultado capturado de las pruebas.
- Informes internos y evidencias se conservan localmente, excluidos mediante .gitignore.

## Mantenimiento de contenido

Los premios se muestran en las tarjetas y en la lista de premios: mantener ambos bloques sincronizados. Suma aprobada en la solicitud: S/ 3,200. No se ha atribuido el importe a un puesto específico.

Las fichas resumen la especificación oficial 2026 de las nueve categorías. La fecha es el 10 de noviembre de 2026 y la sede es la Rotonda de la Facultad de Tecnología – UNE, Lurigancho-Chosica. No cambiar datos técnicos sin validación del organizador.

Las inscripciones están abiertas mediante los archivos QR originales incluidos en images/. No sustituirlos, aplicarles filtros ni recortar su margen blanco. La sección de inscripción incluye los costos por categoría: S/ 30 para las dos categorías escolares, S/ 50 para las seis siguientes y S/ 100 para Warbot 120 lb. No se inventa un enlace directo al formulario.

Las bases oficiales están disponibles desde las nueve tarjetas con acciones para ver y descargar PDF. El Reglamento General y el Cuadro Maestro se encuentran en Documentos Oficiales. Los PDF utilizan rutas relativas y se sirven directamente mediante GitHub Pages cuando se publica el sitio. Esta actualización queda preparada localmente, sin publicar. El PDF de Velocista utiliza el nombre definitivo `06_Bases_Robot_Velocista_Kanturobot_2026.pdf`. Inventario en documentos/README.md.

Para añadir auspiciadores, confirmar autorización y vigencia; usar logos con tamaño reservado y enlaces reales. El bloque no hereda patrocinios anteriores.

## SEO

Se incluyen idioma, descripción, title, viewport, theme-color y Open Graph de texto. Canonical, og:url y og:image absoluto se añadirán cuando se conozcan la URL pública y la imagen social aprobadas. No se inventa fecha para datos estructurados Event.

## Verificaciones

Abrir tests/actualizacion-2026.html por HTTP. Comprueba ambos temas a 320, 375, 768, 1024, 1440 y 1920 px; anclas; nueve categorías; imágenes; fichas abiertas; acciones del menú; objetivo táctil de controles principales; ausencia de enlaces antiguos y errores JS.

La prueba no sustituye una auditoría formal de accesibilidad ni pruebas en dispositivos físicos. La disponibilidad del servicio Google Maps se comprueba aparte de la geometría del iframe.

Sin fuentes remotas, bibliotecas, audio automático ni analítica. El único recurso remoto incorporado es Google Maps, con la ubicación de la universidad.

Los datos web se sincronizaron con el Cuadro Maestro vigente indicado por el organizador. Los PDF y sus rutas se conservan; sus versiones actualizadas serán reemplazadas posteriormente.
