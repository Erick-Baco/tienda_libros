import { Libro } from "../model/libros.js";
import { Op } from "sequelize"; // Para buscar coincidencias parciales

const renderizarSearch = async (req, res) => {
    const search = req.body.query; // Texto de búsqueda
    const categoria = req.body.categoria; // Radio seleccionado: "titulo", "categoria" o "autor"

    try {
        let whereCondition = {};

        // Dependiendo de lo que seleccione el usuario, la consulta se ajusta dinámicamente
        if (categoria === "titulo") {
            whereCondition.titulo = { [Op.like]: `%${search}%` };
        } else if (categoria === "autor") {
            whereCondition.autor = { [Op.like]: `%${search}%` };
        } else if (categoria === "categoria") {
            whereCondition.categoria = search; // No usamos LIKE porque las categorías suelen ser valores fijos
        }

        const libros = await Libro.findAll({
            attributes: ['id_libro', 'imagen', 'titulo', 'autor', 'categoria','ISBN', 'editorial', 'precio', 'stock'],
            where: whereCondition
        });

        console.log("Libros encontrados:", libros);
        console.log("Búsqueda:", search);
        console.log("Categoría seleccionada:", categoria);
        console.log("Datos recibidos:", req.body);

        res.render("inicio", { libros });

    } catch (error) {
        console.error("Error en la consulta:", error);
        res.status(500).send("Hubo un error al realizar la búsqueda.");
    }
};

export { renderizarSearch };
