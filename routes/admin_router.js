import express from "express";
import { inicio } from "../controllers/inicioController.js";
import { renderizarActualizarLibro } from "../controllers/CRUD/actualizarLibroController.js";

import {
  renderizarCrearLibro,
  upload,
  registrando,
} from "../controllers/CRUD/crearLibroController.js";

import {} from "../controllers/CRUD/eliminarLibroController.js";
import { renderizarLeerLibro } from "../controllers/CRUD/leerLibroController.js";

const router_admin = express.Router();

// Routing
router_admin.get("/actualizarLibro", renderizarActualizarLibro);

router_admin.get("/crearLibro", renderizarCrearLibro);
router_admin.post("/crearLibro", upload.single("imagen"), registrando);

router_admin.get("/leerLibro", renderizarLeerLibro);

export default router_admin;
