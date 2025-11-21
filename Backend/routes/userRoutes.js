import express from "express";
import { registerUser, loginUser, requestPasswordReset, resetPassword } from "../controllers/userController.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot", requestPasswordReset);
router.post("/reset", resetPassword);
export default router;
 