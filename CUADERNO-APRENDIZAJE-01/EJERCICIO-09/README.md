# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- A componer pantallas complejas e informativas combinando múltiples patrones (tarjeta de cabecera oscura, fila de botones y lista de transacciones).
- A reutilizar y tipar componentes con props (`Movement` y `QuickAction`).
- A aplicar estilos condicionales en React Native para diferenciar visualmente importes positivos (ingresos en verde) de gastos habituales.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:
Convertiría en componentes reutilizables los elementos repetitivos y modulares, como las filas de movimientos (`Movement`) y los botones de acciones rápidas (`QuickAction`), ya que comparten la misma estructura visual y solo varían sus datos (título, fecha, icono, importe). En cambio, dejaría directamente en `App` la estructura global, el saludo inicial y la tarjeta de saldo principal, puesto que son secciones únicas que definen la jerarquía superior fija de la pantalla.

## Qué he modificado
- He añadido el componente `QuickAction` y la fila de 3 botones de acceso rápido ("Enviar", "Recibir", "Bizum") solicitada en las condiciones del ejercicio.
- He implementado la prop `isIncome` para resaltar en verde los importes que representan ingresos (como la Nómina).

## Resultado
Una interfaz bancaria moderna y legible sobre fondo claro con cabecera oscura destacada para el saldo, botones interactivos simétricos para operativa común y listado ordenado de movimientos recientes con importes contrastados.
