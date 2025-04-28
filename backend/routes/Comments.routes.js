import express from "express";
import { addComment } from "../controllers/Comments.controllers.js";
import { isLogin } from "../middleware/isAdmin.middleware.js";

const CommentRoutes = express.Router();

CommentRoutes.post("/add-comment", isLogin, addComment);

export default CommentRoutes;
