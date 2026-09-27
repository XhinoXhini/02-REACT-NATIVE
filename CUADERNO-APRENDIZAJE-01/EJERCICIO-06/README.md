# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- A construir sistemas en cuadrícula (grid) combinando `flexDirection: 'row'` con `flexWrap: 'wrap'`.
- A modularizar interfaces creando componentes funcionales reutilizables tipados (`Metric`) que reciben datos mediante props.
- A controlar el salto de línea y la separación de columnas mediante porcentajes relativos y `gap`.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Porque si cada tarjeta ocupara exactamente el 50%, la suma de dos tarjetas ya llenaría el 100% del ancho del contenedor. Al añadir una propiedad como `gap` (o márgenes), el espacio total necesario superaría el 100%, forzando a la segunda tarjeta a saltar prematuramente a la siguiente línea y rompiendo el diseño en dos columnas. El 48% deja ese margen de maniobra necesario para absorber el espacio de separación sin romper la fila.

## Qué he modificado
- He añadido una quinta métrica ("Tickets" con valor "86" y variación positiva) para reflejar la modificación observada en el preview visual del ejercicio.
- He asegurado los estilos de color de texto en el título y métricas para un contraste adecuado.

## Resultado
Un panel de control limpio organizado en dos columnas simétricas mediante tarjetas blancas independientes, mostrando métricas clave con sus valores destacados y variaciones porcentuales en verde.
