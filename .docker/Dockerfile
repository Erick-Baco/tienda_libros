# Usar una imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json (si existen)
COPY package*.json ./

# Instalar las dependencias si el archivo package.json existe
RUN [ -f package.json ] && npm install || true

# Crear la estructura de directorios si no existen
RUN mkdir -p config controllers model routes views public

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "server"]
