import Libro from "../../model/libros.js";

const eliminarLibro = async (req, res) => {
  console.log("Datos recibidos en eliminarLibro:", req.body); // Debug

  const { id_libro } = req.body;
  if (!id_libro) {
    console.error("Error: ID de libro no proporcionado");
    return res.status(400).send("Error: ID de libro no proporcionado");
  }

  try {
    await Libro.destroy({ where: { id_libro } });
    res.redirect("/admin/leerLibro");
  } catch (error) {
    console.error("Error al eliminar libro:", error);
    res.status(500).send("Error al eliminar el libro");
  }
};

export { eliminarLibro };
