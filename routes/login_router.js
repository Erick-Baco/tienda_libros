import express from "express";
import {renderizarLogin, logear} from "../controllers/loginController.js"

const router_Login = express.Router();

router_Login.get("/", renderizarLogin );
router_Login.post("/", logear);

export default router_Login;