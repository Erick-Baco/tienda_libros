import { Libro } from "../model/libros.js";
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)


const inicio = async (req, res) => {
    const libros = await Libro.findAll({});
    console.log(libros);
    res.render("inicio", { libros });
};

// Exportaciones de funciones
export {
    inicio
};
