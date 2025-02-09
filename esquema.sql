SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS libreria;
CREATE DATABASE IF NOT EXISTS libreria;
USE libreria;

CREATE TABLE roles (
  id_rol INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  tipo VARCHAR(30) NOT NULL
);

CREATE TABLE usuarios (
  id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nombres VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE, 
  contrasena VARCHAR(60) NOT NULL, 
  id_rol INT,
  FOREIGN KEY (id_rol) REFERENCES roles (id_rol)
);

CREATE TABLE libros (
  id_libro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  editorial VARCHAR(50) NOT NULL,
  ISBN VARCHAR(13) UNIQUE NOT NULL,
  precio DECIMAL(10,2) NOT NULL CHECK (precio >= 0), -- Evita precios negativos
  stock INT NOT NULL DEFAULT 0
);

CREATE TABLE categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL UNIQUE -- Evita nombres repetidos
);

CREATE TABLE libros_categorias (
  id_libro INT NOT NULL,
  id_categoria INT NOT NULL,
  PRIMARY KEY (id_libro, id_categoria),
  FOREIGN KEY (id_libro) REFERENCES libros (id_libro),
  FOREIGN KEY (id_categoria) REFERENCES categorias (id_categoria) 
);

-- Insertando datos

INSERT INTO libros (titulo, imagen, autor, editorial, ISBN, precio, stock) VALUES
('Heartless', '/image/libros/Heartless.webp', 'Marissa Meyer', 'VYRA', '9789877472547', 369, 3), 
('Etéreo', '/image/libros/Etéreo.webp', 'Joana Marcús', 'Montena', '9786073851121', 399, 6),
('En Agosto nos vemos', '/image/libros/Agosto.webp', 'Gabriel García Márquez', 'Diana México', '9786073911290', 348, 10), 
('Medea me cantó un corrido', '/image/libros/Medea.webp', 'Dahlia De la Cerda', 'Sexto Piso', '9786078895793', 270, 1), 
('Feminismo silencioso', '/image/libros/Feminismo.webp', 'Beatriz Gutiérrez Müller', 'Planeta México', '9786073915915', 328, 8),
('Yo nunca vi televisión', '/image/libros/31minutos.webp', '31minutos', 'Planeta Infantil México', '9786073916837', 148, 31),
('El gran libro de programación en C', '/image/libros/programacion.webp', 'Alfons González Pérez', 'Marcombo', '9788426739018', 690, 9),
('El Código de la Manifestación', '/image/libros/manifestacion.webp', 'Raimon Samso', 'Obelisco', '9788491111696', 490, 11),
('El principito', '/image/libros/principito.webp', 'Antoine de Saint-Exupéry', 'Gandhi editores', '9786078678013', 199, 18),
('Nosotros en la luna', '/image/libros/Nosotros.webp', 'Alice Kellen', 'Planeta', '9786070791666', 486, 17);

-- Insertando categorías
INSERT INTO categorias (nombre) VALUES
('Ficción'),
('No Ficción'),
('Literatura Infantil'),
('Tecnología'),
('Ciencia'),
('Historia'),
('Psicología'),
('Autoayuda'),
('Filosofía'),
('Arte');

INSERT INTO libros_categorias (id_libro, id_categoria) VALUES
(1, 1),  -- Heartless -> Ficción
(2, 1),  -- Etéreo -> Ficción
(3, 1),  -- En Agosto nos vemos -> Ficción
(4, 1),  -- Medea me cantó un corrido -> Ficción
(5, 2),  -- Feminismo silencioso -> No Ficción
(6, 3),  -- Yo nunca vi televisión -> Literatura Infantil
(7, 4),  -- El gran libro de programación en C -> Tecnología
(8, 2),  -- El Código de la Manifestación -> No Ficción
(9, 5),  -- El principito -> Literatura Infantil
(10, 6); -- Nosotros en la luna -> Historia
