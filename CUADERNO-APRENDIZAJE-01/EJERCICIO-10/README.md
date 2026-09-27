# Ejercicio 10 - Proyecto final: Fitness

## Qué he aprendido
- A integrar todos los conceptos del cuaderno: Flexbox (`row`, `wrap`, `gap`), Box Model (`padding`, `margin`, `borderRadius`), `ScrollView`, modularización con componentes tipados y renderizado estructurado.
- A diseñar indicadores de progreso combinando contenedores anidados con `overflow: 'hidden'` y anchos porcentuales relativos.
- A mantener una coherencia visual sólida entre tarjetas oscuras de impacto principal y tarjetas claras para métricas secundarias.

## Respuesta a la pregunta de comprensión
¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?

Respuesta:
He recuperado el patrón de cabecera oscura destacada del Ejercicio 09 para la tarjeta del objetivo principal, aportando alto contraste y jerarquía sobre el fondo gris suave de la app. Para el resumen de métricas recuperé el grid en dos columnas con `width: '48%'` y `flexWrap: 'wrap'` del Ejercicio 06. Asimismo, decidí enriquecer el componente `Activity` añadiendo iconos descriptivos en fila (`flexDirection: 'row'`) para facilitar el escaneo visual rápido de las actividades registradas.

## Qué he modificado
- He sincronizado los datos con el preview solicitado: 8.200 pasos (82% de progreso), 610 kcal, 55 min, 69 bpm y 6,3 km de distancia.
- He ampliado la lista de actividades recientes incluyendo iconos descriptivos en cada registro.

## Resultado
Un dashboard fitness completo, responsive y ordenado, estructurado en una tarjeta principal con barra de progreso verde, una cuadrícula 2x2 para las métricas corporales y un listado limpio de sesiones de actividad recientes.
