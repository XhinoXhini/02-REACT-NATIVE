# Ejercicio 05 - Tarjeta de producto

## Qué he aprendido
- A utilizar `overflow: 'hidden'` en contenedores con `borderRadius` para que las imágenes o elementos hijos respeten las esquinas redondeadas sin salirse.
- A usar `justifyContent: 'space-between'` en filas horizontales (`flexDirection: 'row'`) para enviar los elementos a extremos opuestos.
- A componer tarjetas de e-commerce combinando imágenes de cabecera con zonas de contenido y botones de llamada a la acción.

## Respuesta a la pregunta de comprensión
¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.

Respuesta:
El nombre del producto debe tener la mayor jerarquía visual (mediante un tamaño de fuente mayor y peso en negrita), ya que es el elemento identificador principal que el usuario busca reconocer de inmediato. En segundo lugar se sitúa el precio, que debe ser claramente legible para la decisión de compra, y por último la categoría o etiqueta de oferta, que actúa como contexto secundario o badge informativo complementario.

## Qué he modificado
- He cambiado la etiqueta de categoría a "OFERTA" con un tono naranja destacado (`#ea580c`) como solicita la referencia visual del preview.
- He asegurado los contrastes de texto para título y precio frente al fondo blanco.

## Resultado
Una tarjeta de producto comercial estilizada con imagen superior recortada a las curvas, información jerarquizada y una barra inferior equilibrada con precio y botón de compra alineados a los extremos.
