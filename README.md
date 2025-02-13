# Proyecto Node.js

## Planteamiento del problema

Se desarrollará un sistema web para gestionar el inventario de una librería.

El sistema permitirá a los administradores registrar, actualizar y eliminar libros, así como consultar el stock disponible. También permitirá a los empleados consultar los libros disponibles y buscar por distintos criterios (título, autor y categoría).

La información debe permanecer persistente independientemente de que el sistema se apague.

## Funcionalidades Principales

1. **Gestión de Libros**.- Permitir el registro, actualización y eliminación de libros con los siguientes datos: ISBN, título, autor, editorial, precio y cantidad en stock.
2. **Búsqueda de Libros**.- Buscar libros por título, autor o categoría.
3. **Gestión de Categorías**.- Permitir a los administradores clasificar los libros en distintas categorías (Novela, Ciencia, Historia, etc.).
4. **Control de Stock**.- Mostrar alertas cuando la cantidad de un libro en stock sea baja.
5. **Roles de Usuario**.-
   - **Administrador**: Puede gestionar libros y categorías.
   - **Empleado**: Puede consultar el inventario y buscar libros.

## Requisitos previos

Asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: 20.18.2 o superior)
- [MariaDB](https://mariadb.org/) para la base de datos 10.11.10 o superior

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/Erick-Baco/tienda_libros.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd tienda_libros
   ```
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias (ejemplo):
   ```env
   DB_USER = tu_usuario
   DB_PASSWORD = tu_contraseña
   DB_DATABASE = nombre_de_la_base
   DB_DIALEC = mariadb
   DB_PORT = 3306
   ```

## Dependencias

Este proyecto utiliza las siguientes librerías:

- **bcryptjs**: Para el hashing de contraseñas.
- **dotenv**: Para la gestión de variables de entorno.
- **ejs**: Motor de plantillas basado en JavaScript.
- **express**: Framework para el desarrollo del servidor.
- **express-session**: Manejo de sesiones en Express.
- **express-validator**: Middleware para la validación de datos en Express.
- **mariadb**: Conector para la base de datos MariaDB.
- **multer**: Middleware para la gestión de archivos en Express.
- **pug**: Otro motor de plantillas para la renderización de vistas.
- **sequelize**: ORM para manejar la base de datos de forma estructurada.

## Uso

Para iniciar el servidor, ejecuta:

```sh
mysql -u root -p
```
```sh
source esquema.sql
```
```sh
npm run server
```

Por defecto, el servidor se ejecutará en `http://localhost:4000/`.

## Estructura del Proyecto

```
├── public/             # Archivos estáticos (CSS, JS, imágenes)
├── views/              # Plantillas (EJS/Pug)
├── routes/             # Definición de rutas
├── models/             # Modelos de base de datos con Sequelize
├── controllers/        # Lógica del negocio
├── middleware/         # Manejo de seguridad en inicio de sesion
├── config/             # Configuración de base de datos y entorno
├── app.js              # Punto de entrada principal
├── .env                # Variables de entorno
├── esquema.sql         # script para ejecutar la base de datos
├── docker-compose.yml  # contenedor docker
└── package.json        # Configuración del proyecto y dependencias
```

## DOCUMENTACION

https://docs.google.com/document/d/1Np10Qsne_sjwfkMKGd2I90kt-4tdwE6jBTfspzBkaC0/edit?usp=sharing

---

