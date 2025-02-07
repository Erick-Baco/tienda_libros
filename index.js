import express from "express";

import inicio from "./routes/inicio_router.js"

const app = express();

// Renderizar las paginas
// pug -> estilo
// Motor de plantillas
app.set("view engine", "pug");
app.set("views", "./views");

// carpeta publica (Acceso de Usuario)
app.use(express.static("public"));

// routing -> Ruta por default
app.use("/", inicio);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Esperando peticiones en");
});
