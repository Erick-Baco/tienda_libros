import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import inicio from "./routes/inicio_router.js";
import router_Categorias from "./routes/categorias_router.js";
import router_Search from "./routes/search_router.js";
import router_admin from "./routes/admin_router.js";
import router_Login from "./routes/login_router.js";
import router_Logout from "./routes/logout_router.js"
import db from "./config/db.js";
import session from "express-session";


// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true })); // Para leer datos de formularios POST

// Servir Bootstrap desde node_modules
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
);

app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta pública
app.use(express.static("public"));

// Parses URL-encoded bodies
app.use(express.urlencoded({ extended: true })); 

// Configurar sesiones
app.use(
    session({
        secret: "yourSecretKey",  // Change this to a secure secret
        resave: false,  // Don't save session if nothing changed
        saveUninitialized: false,  // Don't create session until something is stored
        cookie: { secure: false }, // Set `true` if using HTTPS
    })
);


// Middleware para verificar la sesión y mandar datos de sesion a pug
app.use(function(req, res, next) {
  res.locals.loggedin = req.session.user; // Terminar variable de pug para mostrar nombre
   next();  // Usamos 'next()' para continuar el flujo
});


// Rutas
app.use("/", router_Login);
app.use("/home", inicio)
app.use("/login", router_Login);
app.use("/logout", router_Logout);
app.use("/categorias", router_Categorias);
app.use("/search", router_Search);
app.use("/admin", router_admin)
app.use("/image", express.static("public/image"));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
