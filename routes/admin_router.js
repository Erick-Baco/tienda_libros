import express from "express";

import { authAdmin, isAuthenticated } from "../middleware/middleware.js";

import {
  actualizarLibro,
  renderizarActualizarLibro,
} from "../controllers/CRUD/actualizarLibroController.js";

import {
  renderizarCrearLibro,
  upload,
  registrando,
} from "../controllers/CRUD/crearLibroController.js";

import { eliminarLibro } from "../controllers/CRUD/eliminarLibroController.js";
import { renderizarLeerLibro } from "../controllers/CRUD/leerLibroController.js";

const router_admin = express.Router();

// actualizar
router_admin.get("/actualizarLibro/:id", isAuthenticated, authAdmin, renderizarActualizarLibro);
//router_admin.post("/actualizarLibro/:id", actualizarLibro);
router_admin.post("/actualizarLibro/:id", upload.single("imagen"), actualizarLibro);

//crear
router_admin.get("/crearLibro", isAuthenticated, authAdmin, renderizarCrearLibro);
router_admin.post("/crearLibro", upload.single("imagen"), registrando);

//leer principalmente
router_admin.get("/leerLibro", isAuthenticated, authAdmin, renderizarLeerLibro);

//eliminar
router_admin.post("/eliminarLibro", eliminarLibro);

export default router_admin;


