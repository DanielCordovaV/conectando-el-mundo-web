# Movie Watchlist

Esta es una aplicación sencilla de react con express.js. Es un sistema CRUD para una lista de películas y está desplegada en [https://danielcordova.info](https://danielcordova.info).

Para hacer pruebas de manera local solo es necesario cambiar el url base del request por ``http://localhost:3001`` en:
- ``/src/client/src/app.js``
- ``/src/client/src/components/PostForm.js``
- ``/src/client/src/components/PutForm.js``
- ``/src/client/src/components/DeleteForm.js``

Y correr en dos terminales diferentes los siguientes comandos:

```bash
cd src/client
npm i
npm run start
```
```bash
cd src/server
npm i
npm run start
```
Mientras estan corriendo se podrá acceder a la pagina en ``http://localhost:3000`` y al api mediante la url base ``http://localhost:3001``.

## API

Endpoints para el api

- ``GET /api``
    - Regesa un mensaje para probar la conexión
- ``GET /api/movies``
    - Regresa todas las peliculas en la lista como un JSON
- ``POST /api/movies``
    - Agrega la película Due Date a la lista.
- ``PUT /api/movies`` 
    - Agrega una pelicula personalizada a la lista, busca su imagen y donde se streamea.
    ```JSON
    {
        params: {
            "id": string,
            "name": string,
            "year": int,
            "genre": string
        }
    }
    ```
- ``DELETE /api/movies``
    - Elimina una pelicula de la lista
    ```JSON
    {
        params: {
            "id": string
        }
    }
    ```