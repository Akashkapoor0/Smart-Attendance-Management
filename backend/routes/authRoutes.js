import express from "express";
import { registerAdmin, adminLogin } from "../controllers/authController.js";

const router = express.Router();

router.post("/admin-register", registerAdmin);
router.post("/admin-login", adminLogin);

export default router;