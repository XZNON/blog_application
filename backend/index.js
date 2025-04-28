import express from "express";
import dotenv from "dotenv";
import DBconnection from "./utils/db.js";
import AuthRoutes from "./routes/Auth.routes.js";
import cookieParser from "cookie-parser";
import BlogsRoute from "./routes/Blog.routes.js";
import DashboardRoutes from "./routes/dashboard.routes.js";
import CommentRoutes from "./routes/Comments.routes.js";
import PublicRoutes from "./routes/public.routes.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const corsOptions = {
  origin: true,
  credentials: true,
};

//mongo db connection
DBconnection();
app.use(express.static("public"));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello from backend");
});

//create endpoints for the application
app.use("/auth", AuthRoutes);
app.use("/blogs", BlogsRoute);
app.use("/dashboard", DashboardRoutes);
app.use("/comment", CommentRoutes);
app.use("/public", PublicRoutes);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
