import express from "express";
import {renderizarSearch} from "../controllers/searchController.js"

const router_Search = express.Router();

router_Search.post("/", renderizarSearch );

export default router_Search;