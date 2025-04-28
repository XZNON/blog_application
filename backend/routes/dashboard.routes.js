import express from "express";
import { isAdmin } from "../middleware/isAdmin.middleware.js";
import {
  deleteUser,
  GetAllData,
  getUser,
} from "../controllers/dashboard.controllers.js";

const DashboardRoutes = express.Router();

DashboardRoutes.get("/", isAdmin, GetAllData);
DashboardRoutes.get("/users", isAdmin, getUser);
DashboardRoutes.delete("/delete-user/:id", isAdmin, deleteUser);

export default DashboardRoutes;
