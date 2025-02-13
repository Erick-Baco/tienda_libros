import Usuario from "../model/usuario.js"
import session from "express-session";
import Libro from "../model/libros.js";

const renderizarLogin = async (req, res) => {
    res.render("login/log");
}

const logear = async (req, res) => {
    try {
        console.log("Received body:", req.body);

        // Fix variable names
        const { email: correo, password: contrasena } = req.body;

        if (!correo || !contrasena) {
            console.log("Falta correo o contraseña");
            return res.render("login/log", { error: "Correo y contraseña son obligatorios" });
        }

        const user = await Usuario.findOne({ where: { correo } });
        const libros = await Libro.findAll({});

        if (!user) {
            console.log("Usuario no encontrado");
            return res.render("login/log", { error: "Correo o contraseña incorrectos" });
        }

        const isPasswordCorrect = user.contrasena === contrasena; // Direct comparison

        if (!isPasswordCorrect) {
            console.log("Contraseña incorrecta");
            return res.render("login/log", { error: "Correo o contraseña incorrectos" });
        }

        req.session.user = {
            id: user.id_usuario,
            nombre: user.nombre,
            id_rol: user.id_rol,
            libros: libros
        };

        console.log("Session after login:", req.session);

        req.session.save((err) => {
            if (err) {
                console.error("Error saving session:", err);
                return res.status(500).render("login/log", { error: "Error en el servidor, intenta de nuevo" });
            }

            // Middleware para verificar la sesión y mandar datos de sesion a pug
            res.locals.loggedin = req.session.user;
            

            if (user.id_rol == 2) {
                return res.render("inicio", { nombre: user.nombre, libros: libros});
            } else if (user.id_rol == 1) {
                return res.redirect("/admin/leerLibro");
            }
        });

    } catch (error) {
        console.error("Error en login:", error);
        return res.status(500).render("login/log", { error: "Error en el servidor, intenta de nuevo" });
    }
};


export{
    renderizarLogin,
    logear
}