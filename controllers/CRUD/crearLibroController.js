import db from "../../config/db.js";
import Libro from "../../model/libros.js";
import Libros_Categorias from "../../model/libros_categorias.js";
import multer from "multer";
import path from "path";

const renderizarCrearLibro = async (req, res) => {
  res.render("admin/crearLibro");
};

const registrando = async (req, res) => {
  try {
    const imagenRuta = req.file ? `/image/libros/${req.file.filename}` : null;
    if (!imagenRuta) {
      return res.status(400).send("Error: No se subió la imagen.");
    }

    await Libro.create({
      titulo: req.body.titulo,
      imagen: imagenRuta,
      autor: req.body.autor,
      editorial: req.body.editorial,
      ISBN: req.body.ISBN,
      precio: req.body.precio,
      stock: req.body.stock,
    });

    console.log("Libro agregado correctamente");
    res.redirect("/admin/crearLibro");
  } catch (error) {
    console.error("Error al registrar libro:", error);
    res.status(500).send("Error interno del servidor");
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

export { renderizarCrearLibro, registrando, upload };
