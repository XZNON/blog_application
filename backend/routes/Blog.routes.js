import express from "express";
import {
  Create,
  deletePost,
  getPost,
  update,
} from "../controllers/Blog.controllers.js";
import { isAdmin } from "../middleware/isAdmin.middleware.js";
import upload from "../middleware/Multer.middleware.js";

const BlogsRoute = express.Router();
//create a post
BlogsRoute.post("/create", isAdmin, upload.single("postImage"), Create);
//delete a blog post
BlogsRoute.delete("/delete/:id", isAdmin, deletePost);
//fetch all the blog posts
BlogsRoute.get("/getPost", getPost);
//can only edit if the user is an admin
BlogsRoute.patch("/update/:id", isAdmin, upload.single("postImage"), update);
export default BlogsRoute;
