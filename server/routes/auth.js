import express from "express";
import { googleAuth, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//create a user
router.post("/signup", signup);

//create a user
router.post("/signin", signin);

//create a user
router.post("/google", googleAuth);

export default router;
