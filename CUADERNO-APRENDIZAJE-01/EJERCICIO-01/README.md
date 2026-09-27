# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido
- A estructurar una pantalla básica usando View y Text.
- A aplicar estilos mediante StyleSheet.create.
- A centrar contenido en pantalla completa usando flex: 1, justifyContent y alignItems.

## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

Respuesta:
El componente `View` es un contenedor estructural (como un div o una caja invisible) que sirve para agrupar elementos y definir la distribución visual con Flexbox, pero no puede contener texto directamente. El componente `Text` es el único elemento en React Native encargado de pintar caracteres y palabras en la pantalla y aplicarle propiedades tipográficas.

## Qué he modificado
- He añadido un tercer componente Text con el texto "Curso 2026/27".
- He creado el estilo `badge` en StyleSheet para darle margen superior y diferenciarlo visualmente.

## Resultado
La pantalla muestra un fondo gris claro con el título principal destacado en grande y negrita, el subtítulo debajo en tono gris, y la etiqueta del curso académico más abajo, todo centrado vertical y horizontalmente.
