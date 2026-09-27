# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- A renderizar colecciones de datos dinámicas de forma optimizada utilizando `FlatList`.
- A estructurar catálogos en varias columnas con `numColumns={2}` y estilizar las filas con `columnWrapperStyle`.
- A utilizar `keyExtractor` para proporcionar identificadores estables y únicos a cada elemento.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
Permite una separación limpia entre los datos y la interfaz (patrón de diseño clave en React). Si los productos están definidos en un array, modificar un precio, añadir un producto o cambiar un nombre solo requiere actualizar el dato en la fuente, y el componente `FlatList` se encarga automáticamente de renderizarlo con el mismo diseño. Además, hace posible que en el futuro esos datos vengan directamente de una base de datos o API externa sin tener que tocar una sola línea de código visual.

## Qué he modificado
- He implementado la configuración de `FlatList` con 2 columnas, definiendo un array completo de 6 productos representativos.
- He ocultado la barra de desplazamiento (`showsVerticalScrollIndicator={false}`) para una interfaz más limpia.

## Resultado
Un catálogo en cuadrícula de dos columnas simétricas sobre fondo claro, mostrando cada producto en su propia tarjeta blanca con icono grande, nombre en negrita y precio destacado en color azul.
