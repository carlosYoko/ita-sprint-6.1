# Juego de Dados

Juego de dados utilizando clean architecture y las siguientes tecnologías:
Ganarás la partida si obtienes un 7, cualquier otro resultado será partida perdida.
El juego está configurado para que un jugador no pueda jugar mas de 3 minutos. Una vez pasado el tiempo,
ya no podrá jugar más.

- Backend

  - TypeScript/JavaScript
  - Express
  - JWT
  - MySQL/MariaDB
  - MongoDB
  - Prisma (ORM)
  - Mongoose (ODM)
  - Docker
  - Jest
  - CI

- Frontend
  - React
  - TypeScript/JavaScript

##### Trabajo del Sprint 6.1 de IT-Academy en la especialización de Node.js.

Puedes acceder a la [colección de queries](./postman_collection.json) para la versión MySQL y a la [documentación de la API](API.md).

## Requisitos Previos

- Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
- [Docker](https://www.docker.com/).

### Pasos para Iniciar la aplicación

1. Para clonar el repositorio e instalar dependencias:

```bash
  git clone https://github.com/carlosYoko/sprint-6.1
  cd sprint-6.1
  npm run install-allDependencies

```

3. Para instalar y ejecutar virtualización de entorno para desarrollo (Docker), ejecutar el siguiente comando:

```bash
  npm run docker
```

4. Para generar la migración de los schemas Prisma, utiliza el siguiente comando:

```bash
  npm run prisma-generate
```

5. Para aplicar la migración, utiliza el siguiente comando:

```bash
  npm run prisma-migrate
```

## Configuración y desarrollo

El proyecto consta de una carpeta para el servidor backend y otra para el cliente frontend. Ambas partes pueden iniciarse por separado.

### Servidor Backend (API)

1. Navega a la carpeta del servidor:

```bash
   cd server
```

2. Inicia el servidor en modo desarrollo:

```bash
   npm run dev:sql
```

3. Para ejecutar los tests:

```bash
   npm run test
```

Esto iniciará el servidor backend en [http://localhost:puerto-api](http://localhost:puerto-api).

### Cliente Frontend

1. Navega a la carpeta del cliente:

```bash
  cd frontend
```

2. Inicia la aplicación frontend en modo desarrollo:

```bash
  npm run dev
```

Esto iniciará la aplicación frontend en [http://localhost:puerto-frontend](http://localhost:puerto-frontend).

## Transpilación y construcción (Desarrollo)

Si deseas transpilar TypeScript y construir el frontend para producción, puedes utilizar los siguientes comandos:

#### Transpilación

1. Para transpilar frontend y backend, ejecuta desde la raiz del proyecto el siguiente comando:

```bash
  npm run build:project
```

2. Para iniciar el servidor MySQL, ejecuta desde la raiz del proyecto el siguiente comando:

```bash
  npm run start:sql
```

3. Para iniciar frontend,ejecuta desde la raiz del proyecto el siguiente comando:

```bash
  npm run start:frontend
```
