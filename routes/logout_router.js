import express from "express"

import {deslogear} from "../controllers/logoutController.js"

const router_Logout = express.Router();

router_Logout.post("/", deslogear);

export default router_Logout;