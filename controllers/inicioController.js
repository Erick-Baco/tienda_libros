import { Libro } from "../model/libros.js";
import session from "express-session";
// Request -> Peticion Usuario (req)
// Resource -> Resultado de la Peticion (res)


const inicio = async (req, res) => {
    const libros = await Libro.findAll({});
    // console.log(libros);
    // console.log(req.session);
    
    res.render("inicio", { libros });
};

// Exportaciones de funciones
export {
    inicio
};
