import Libro from "../../model/libros.js";


const renderizarLeerLibro = async (req, res) => {
  try {
    const libros = await Libro.findAll({
      /* include: {
        model: Libros_Categorias,
      }, */
    });

    //console.log(libros);
    res.render("admin/leerLibro", { libros });
  } catch (error) {
    console.error("Error al obtener libros:", error);
    res.render("admin/leerLibro", { libros: [] });
  }
};

export { renderizarLeerLibro };
