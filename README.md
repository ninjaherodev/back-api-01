# back-api-01

![NinjaHeroDev](https://avatars.githubusercontent.com/u/139668847?s=96&v=4)

Este es un proyecto de backend para una API que gestiona Pokémon. Proporciona endpoints para recuperar, crear, actualizar y eliminar Pokémon.

## Propósito

El propósito de este programa es proporcionar un ejemplo básico de un CRUD (Crear, Leer, Actualizar, Eliminar) para aprender a construir una API sin el uso de ningún framework como Express. Esto se hace con el objetivo de comprender los conceptos fundamentales de la creación de APIs y cómo funcionan bajo el capó.

Posteriormente, se puede explorar el uso del framework Express y comprender las ventajas que ofrece en términos de desarrollo rápido, manejo simplificado de rutas y middleware, entre otros beneficios. Aprender Express puede ayudar a desarrollar aplicaciones web de manera más eficiente y a escalar mejor proyectos más grandes.

## Instalación

Para comenzar, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/back-api-01.git
   ```
2. Navega al directorio del proyecto::
 
   ```bash
   cd back-api-01
   ```
3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```
## Uso

### Recuperar Pokemon

Para obtener todos los Pokémon almacenados, realiza una solicitud GET al siguiente endpoint:

 ```bash
   GET http://localhost:3000/pokemon
 ```
### Crear un nuevo Pokemon

Para crear un nuevo Pokémon, realiza una solicitud POST al siguiente endpoint, incluyendo los detalles del Pokémon en el cuerpo de la solicitud en formato JSON:

 ```bash
  POST http://localhost:3000/pokemon
  Content-Type: application/json

{
  "id":1,
  "name": "pikachu",
  "type": "fuego",
  "moves":[
    "transform"
  ]
}  
 ```

 ### Actualizar un Pokemon existente
 
 Para actualizar completamente un Pokémon existente, realiza una solicitud PUT al siguiente endpoint, incluyendo el ID del Pokémon que deseas actualizar en la consulta y los nuevos detalles del Pokémon en el cuerpo de la solicitud en formato JSON:

  ```bash
  PUT http://localhost:3000/pokemon?id=2
  Content-Type: application/json

{
  "id":2,
  "name": "charizar",
  "type": "fuego",
  "moves":[
    "bola de fuego"
  ]
}
 ```

 ### Eliminar un Pokemon existente
 
 Para eliminar completamente un Pokémon existente, realiza una solicitud DELETE al siguiente endpoint, incluyendo el ID del Pokémon que deseas eliminar en la consulta:
 ```bash
  DELETE http://localhost:3000/pokemon?id=1
 ```
 ## Contribución
 
 Si deseas contribuir a este proyecto, ¡estamos abiertos a sugerencias y colaboraciones! Siéntete libre de enviar un PR.

 ## Licencia
 Este proyecto está licenciado bajo la Licencia MIT.