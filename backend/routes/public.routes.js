import express from "express";
import { GetSinglePost } from "../controllers/public.controllers.js";

const PublicRoutes = express.Router();

PublicRoutes.get("/single-post/:id", GetSinglePost);

export default PublicRoutes;
