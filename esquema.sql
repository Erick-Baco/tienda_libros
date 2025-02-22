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
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
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
  categoria VARCHAR(50) NOT NULL,
  precio DECIMAL(10,2) NOT NULL CHECK (precio >= 0), -- Evita precios negativos
  stock INT NOT NULL DEFAULT 0
);

-- Insertando datos

INSERT INTO libros (titulo, imagen, autor, editorial, ISBN, categoria, precio, stock) VALUES
('Heartless', '/image/libros/Heartless.webp', 'Marissa Meyer', 'VYRA', '9789877472547', 'Fantasía', 369, 1), 
('Etéreo', '/image/libros/Etéreo.webp', 'Joana Marcús', 'Montena', '9786073851121', 'Romance', 399, 6),
('En Agosto nos vemos', '/image/libros/Agosto.webp', 'Gabriel García Márquez', 'Diana México', '9786073911290', 'Ficción', 348, 10), 
('Medea me cantó un corrido', '/image/libros/Medea.webp', 'Dahlia De la Cerda', 'Sexto Piso', '9786078895793', 'Narrativa', 270, 1), 
('Feminismo silencioso', '/image/libros/Feminismo.webp', 'Beatriz Gutiérrez Müller', 'Planeta México', '9786073915915', 'Ensayo', 328, 8),
('Yo nunca vi televisión', '/image/libros/31minutos.webp', '31minutos', 'Planeta Infantil México', '9786073916837', 'Infantil', 148, 0),
('El gran libro de programación en C', '/image/libros/programacion.webp', 'Alfons González Pérez', 'Marcombo', '9788426739018', 'Programación', 690, 9),
('El Código de la Manifestación', '/image/libros/manifestacion.webp', 'Raimon Samso', 'Obelisco', '9788491111696', 'Desarrollo Personal', 490, 11),
('El principito', '/image/libros/principito.webp', 'Antoine de Saint-Exupéry', 'Gandhi editores', '9786078678013', 'Clásico', 199, 18),
('Nosotros en la luna', '/image/libros/Nosotros.webp', 'Alice Kellen', 'Planeta', '9786070791666', 'Romance', 486, 17);

/*INSERTANDO ROLES*/
INSERT INTO roles (tipo) VALUES
("Administrador"),
("Usuario");

/*INSERTANDO USUARIOS POR DEFAULT*/
INSERT INTO usuarios (nombre, apellido, correo, contrasena, id_rol) VALUES
('Eder', 'Alvarez', 'ederaj30@gmail.com', '1234', '1'),
("Hugo", 'Perez', 'perez.hugo.3010@gmail.com', '4321', '2');  
