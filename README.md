# Blogg API

## Description (English)
Blogg API is a RESTful API built with Node.js, Express, and MongoDB (Mongoose) to manage blog posts. It allows you to create, read, update, filter, and delete posts, as well as handle categories and tags.

### Project Structure
```
Blogg API/
├── package.json
└── src/
    ├── app.js                # Main application file
    ├── config/
    │   └── db.js             # Database configuration
    ├── controllers/
    │   └── postControllers.js# Business logic for posts
    ├── middlewares/
    │   ├── notFound.js       # Middleware for 404 routes
    │   ├── errosHandle.js    # Error handling middleware
    │   └── validatePost.js   # Middleware to validate posts
    ├── models/
    │   └── postModel.js      # Mongoose schema for posts
    ├── routes/
    │   └── postRoutes.js     # API routes for posts
    ├── services/             # (Optional) Additional business logic
    └── utils/                # (Optional) Utilities and helpers
```

### Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Morgan (logs)
- dotenv (environment variables)
- body-parser, cors

### Main Endpoints
- `POST   /api`         → Create a post
- `GET    /api`         → Get all posts
- `GET    /api/:id`     → Get a post by ID
- `PUT    /api/:id`     → Update a post
- `DELETE /api/:id`     → Delete a post
- (Optional) Filter by category and tags

### Usage
1. Install dependencies: `npm install`
2. Configure your `.env` file with MongoDB URI and port.
3. Start the server: `npm run dev`
4. Test the endpoints with Thunder Client, Postman, etc.

---
# Blogg API

## Descripción (Español)
Blogg API es una API RESTful construida con Node.js, Express y MongoDB (Mongoose) para gestionar publicaciones de un blog. Permite crear, leer, actualizar, filtrar y eliminar posts, así como manejar categorías y etiquetas.

### Estructura del Proyecto
```
Blogg API/
├── package.json
└── src/
    ├── app.js                # Archivo principal de la aplicación
    ├── config/
    │   └── db.js             # Configuración de la base de datos
    ├── controllers/
    │   └── postControllers.js# Lógica de negocio de los posts
    ├── middlewares/
    │   ├── notFound.js       # Middleware para rutas no encontradas
    │   ├── errosHandle.js    # Middleware para manejo de errores
    │   └── validatePost.js   # Middleware para validar posts
    ├── models/
    │   └── postModel.js      # Esquema de Mongoose para posts
    ├── routes/
    │   └── postRoutes.js     # Rutas de la API para posts
    ├── services/             # (Opcional) Lógica de negocio adicional
    └── utils/                # (Opcional) Utilidades y helpers
```

### Stack Tecnológico
- Node.js
- Express.js
- MongoDB + Mongoose
- Morgan (logs)
- dotenv (variables de entorno)
- body-parser, cors

### Endpoints Principales
- `POST   /api`         → Crear un post
- `GET    /api`         → Obtener todos los posts
- `GET    /api/:id`     → Obtener un post por ID
- `PUT    /api/:id`     → Actualizar un post
- `DELETE /api/:id`     → Eliminar un post
- (Opcional) Filtros por categoría y tags

### Uso
1. Instala dependencias: `npm install`
2. Configura tu archivo `.env` con la URI de MongoDB y el puerto.
3. Inicia el servidor: `npm run dev`
4. Prueba los endpoints con Thunder Client, Postman, etc.
