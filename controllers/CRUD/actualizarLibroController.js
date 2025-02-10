import Libro from "../../model/libros.js";
import multer from "multer";
import path from "path";
import { validationResult } from "express-validator";

const renderizarActualizarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await Libro.findByPk(id);

    // Verificar si el libro no existe
    if (!info) {
      return res.status(404).send("Libro no encontrado");
    }

    res.render("admin/actualizarLibro", {
      valores: {
        titulo: info.titulo,
        imagen: info.imagen,
        autor: info.autor,
        editorial: info.editorial,
        ISBN: info.ISBN,
        categoria: info.categoria,
        precio: info.precio,
        stock: info.stock,
        id_libro: info.id_libro,
      },
    });
  } catch (error) {
    console.error("Error al cargar la vista de actualización:", error);
    res.status(500).send("Error interno del servidor");
  }
};

const actualizarLibro = async (req, res) => {
  const { id } = req.params;
  
  // `req.body` no estará definido si hay un error con `multipart/form-data`
  const { titulo, autor, editorial, ISBN, categoria, precio, stock } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const info = await Libro.findByPk(id);
    if (!info) {
      return res.status(404).send("Libro no encontrado");
    }

    console.log("Archivo de imagen cargado:", req.file);
    const nuevaImagen = req.file ? `/image/libros/${req.file.filename}` : info.imagen;

    await Libro.update(
      {
        titulo,
        autor,
        editorial,
        ISBN,
        categoria,
        precio: parseFloat(precio), // Asegurar que `precio` se guarde como número
        stock: parseInt(stock, 10), // Asegurar que `stock` sea número entero
        imagen: nuevaImagen,
      },
      { where: { id_libro: id } }
    );

    res.redirect("/admin/leerLibro");
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).send("Error al actualizar el libro");
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image/libros");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export { renderizarActualizarLibro, upload, actualizarLibro };


/*
import Libro from "../../model/libros.js";
import multer from "multer";
import path from "path";
import { validationResult } from "express-validator";

const renderizarActualizarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const info = await Libro.findByPk(id);

    // Verificar si el libro no existe
    if (!info) {
      return res.status(404).send("Libro no encontrado");
    }

    res.render("admin/actualizarLibro", {
      valores: {
        titulo: info.titulo,
        imagen: info.imagen,
        autor: info.autor,
        editorial: info.editorial,
        ISBN: info.ISBN,
        categoria: info.categoria,
        precio: info.precio,
        stock: info.stock,
        id_libro: info.id_libro,
      },
    });
  } catch (error) {
    console.error("Error al cargar la vista de actualización:", error);
    res.status(500).send("Error interno del servidor");
  }
};

const actualizarLibro = async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, editorial, ISBN, categoria, precio, stock } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const info = await Libro.findByPk(id);
    if (!info) {
      return res.status(404).send("Libro no encontrado");
    }

    console.log("Archivo de imagen cargado:", req.file);
    let nuevaImagen;
    if (req.file) {
      nuevaImagen = `/image/libros/${req.file.filename}`;
    } else {
      nuevaImagen = info.imagen;
    }
    await Libro.update(
      {
        titulo,
        autor,
        editorial,
        ISBN,
        categoria,
        precio,
        stock,
        imagen: nuevaImagen,
      },
      { where: { id_libro: id } }
    );

    res.redirect("/admin/leerLibro");
  } catch (error) {
    console.error("Error al actualizar el libro:", error);
    res.status(500).send("Error al actualizar el libro");
  }
};

// de nuevo para la imagen
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image/libros");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export { renderizarActualizarLibro, upload, actualizarLibro };

*/