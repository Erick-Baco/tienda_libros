import express from "express";
import {renderizarLibrosCategoria} from "../controllers/categoriaController.js"

const router_Categorias = express.Router();

router_Categorias.get("/:categoria", renderizarLibrosCategoria );

export default router_Categorias;