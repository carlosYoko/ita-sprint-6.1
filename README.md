# ⚠️ APP EN DESARROLLO ⚠️

# Juego de Dados

Juego de dados utilizando las siguientes tecnologías:

- Backend

  - TypeScript/JavaScript
  - Express
  - MySQL/MariaDB
  - MongoDB
  - Prisma (ORM)
  - Mongoose (ODM)
  - Docker
  - Jest

- Frontend

  - React
  - TypeScript/JavaScript

##### Trabajo del Sprint 6.1 de IT-Academy en la especialización de Node.js.

#### Lista de comandos a ejecutar en orden:

Para instalar todas las dependencias, ejecutar el siguiente comando:

```bash
  npm run install-allDependencies
```

Para transpilar frontend y backend, ejecutar el siguiente comando:

```bash
  npm run build:project
```

Para instalar y ejecutar virtualización de entorno para desarrollo (Docker), ejecutar el siguiente comando:

```bash
  npm run docker
```

Para generar la migración, utiliza el siguiente comando:

```bash
  npm run prisma-generate
```

Para aplicar la migración en el entorno de desarrollo, utiliza el siguiente comando:

```bash
  npm run prisma-migrate
```

Para iniciar el servidor MySQL, ejecutar el siguiente comando en otra terminal apuntando a la raiz del proyecto:

```bash
  npm run start:sql
```

Para iniciar el servidor MongoDB, ejecutar el siguiente comando en otra terminal apuntando a la raiz del proyecto:

```bash
  npm run start:mongodb
```

Para ejecutar los tests en produccion, utiliza el siguiente comando:
_Hay que iniciar los servidores y el container (Docker)_

```bash
  npm run test
```

Para iniciar frontend, ejecutar el siguiente comando en otra terminal apuntando a la raiz del proyecto:

```bash
  npm run start:frontend
```
