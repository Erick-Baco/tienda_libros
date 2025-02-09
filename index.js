import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import inicio from "./routes/inicio_router.js";
import router_Categorias from "./routes/categorias_router.js";
import router_Search from "./routes/search_router.js";
import router_Login from "./routes/login_router.js";

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));  // Para leer datos de formularios POST

// Servir Bootstrap desde node_modules
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.set("view engine", "pug");
app.set("views", "./views");

// Carpeta pública
app.use(express.static("public"));

// Rutas
app.use("/", router_Login);
app.use("/login", router_Login);
app.use("/home", inicio);
app.use("/categorias", router_Categorias);
app.use("/search", router_Search);



const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
