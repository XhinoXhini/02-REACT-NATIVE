# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- A implementar listas con scroll vertical mediante el componente nativo `ScrollView`.
- A crear componentes reutilizables (`NewsCard`) que reciben propiedades tipadas (`props`).
- A separar la estructura y maquetación fija del contenido dinámico de cada elemento.

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Debe cambiar el contenido específico (los datos dinámicos que se pasan por props: la categoría, el titular y la fecha de publicación). Debe permanecer igual toda la estructura del componente: el contenedor `View` que forma la tarjeta, las etiquetas `<Text>`, los estilos visuales asignados mediante `StyleSheet` (márgenes, paddings, colores y tamaños de fuente) y la jerarquía entre los elementos.

## Qué he modificado
- He añadido una cuarta noticia ("DISEÑO" / "Interfaces accesibles para todos los usuarios") para cumplir con la referencia del preview.
- He asegurado colores de texto consistentes y contrastados.

## Resultado
Una pantalla vertical con desplazamiento fluido donde se presenta una lista de tarjetas de noticias uniformes en diseño pero con contenidos temáticos diferenciados.
