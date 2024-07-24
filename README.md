# PRUEBA UPCH

Se implementó el diseño del prototipo en React utilizando Vite.

[Web](https://prueba-upch-ten.vercel.app/) de la prueba

Se tomó algunas libertades:

- Se utilizó los `searchParams` de `react-router-dom` para manejo de cambios de algunos estados que he considerado son más importantes y deben mantenerse aún así se refresque la página.
- Se utilizó `Zustand` para el manejo de variables globales, provee una mejor experiencia de desarrollo y es súper ligero y potente.
- Estoy manejando los usuarios random bajo una seed (se agregó la forma de escoger otra seed dinámica), esto para mantener una consistencia al momento de la paginación.
- La API pública no devuelve los géneros filtrados cuando se agrega una seed, esto se tuvo que gestionar a nivel de aplicación pero siempre guiándose de los parámetros de la URL.
- El ícono del navbar lleva '/', sin parámetros. Es una forma de limpiar los parámetros escogidos.
