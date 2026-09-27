# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- A maquetar entradas de formulario con el componente `TextInput` y su propiedad `placeholder`.
- A ocultar caracteres confidenciales en campos de clave mediante el booleano `secureTextEntry`.
- A definir áreas táctiles estilo botón mediante el componente `Pressable`.

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

Respuesta:
Porque en este ejercicio el objetivo es estrictamente visual y de maquetación (diseño de la interfaz con Flexbox y componentes nativos). No necesitamos capturar, almacenar ni validar lo que el usuario escribe en memoria, ni tampoco ejecutar una acción tras pulsar el botón, que es donde entraría en juego la gestión del estado con `useState`.

## Qué he modificado
- He añadido soporte de teclado (`keyboardType="email-address"` y `autoCapitalize="none"`) en el campo de correo para optimizar la experiencia de entrada en móvil.
- He definido `placeholderTextColor` y colores tipográficos explícitos para asegurar legibilidad.

## Resultado
Una pantalla de inicio de sesión limpia sobre fondo blanco, con campos de entrada suaves bien diferenciados, campo de contraseña oculto y botón de acción azul centrado verticalmente.
