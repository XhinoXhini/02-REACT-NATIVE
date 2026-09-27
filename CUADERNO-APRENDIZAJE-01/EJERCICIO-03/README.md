# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- A cargar y dimensionar imágenes remotas mediante el componente `Image` y la propiedad `source={{ uri: ... }}`.
- A crear avatares circulares asignando en `borderRadius` exactamente la mitad del ancho/alto.
- A alinear elementos en horizontal utilizando `flexDirection: 'row'` y separarlos con `gap`.

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Respuesta:
Se debe aplicar en el `View` padre (contenedor) que envuelve directamente a los bloques de las estadísticas. En React Native, la propiedad `flexDirection` define el eje principal en el que el contenedor distribuye a sus elementos hijos directos; por defecto es en columna (`column`), por lo que al poner `row` en el padre, sus hijos pasan a colocarse en fila horizontal.

## Qué he modificado
- He añadido una tercera columna de estadísticas ("86 Contactos") cumpliendo con el reto propuesto.
- He ajustado el `gap` a 28 para mantener un espaciado equilibrado en tarjetas móviles.

## Resultado
Una tarjeta centrada con avatar circular, nombre y puesto, que muestra en la parte inferior una fila de tres métricas numéricas centradas y perfectamente espaciadas.
