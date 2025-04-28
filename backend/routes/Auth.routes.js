import express from "express";
import { Login, Register, Logout } from "../controllers/Auth.controllers.js";
import upload from "../middleware/Multer.middleware.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", upload.single("profile"), Register);
AuthRoutes.post("/login", Login);
AuthRoutes.post("/logout", Logout);
export default AuthRoutes;
