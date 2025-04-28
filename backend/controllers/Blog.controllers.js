import PostModel from "../models/Blog.models.js";
import { ApiError } from "../utils/ApiError.js";
import fs from "fs";
import path from "path";
const Create = async (req, res) => {
  try {
    //get the title and description from the body
    const { title, description } = req.body;
    //get the profile image path from file system
    const imagePath = req.file.filename;
    //create a new instance of the post model and create a new blog
    const CreateBlog = new PostModel({
      title,
      description,
      image: imagePath,
    });
    await CreateBlog.save();
    // res.send("Hello from blogs");
    return res.status(200).json({
      success: true,
      message: "Post created Successfully",
      post: CreateBlog,
    });
  } catch (error) {
    throw new ApiError(500, "internal server error");
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const findPost = await PostModel.findById(postId);
    if (!findPost) {
      throw new ApiError(404, "Post not found");
    }

    //delete the cover image of the blog
    if (findPost.image) {
      const profilePath = path.join("public/temp", findPost.image);
      fs.promises
        .unlink(profilePath)
        .then(() => console.log("Profile image deleted"))
        .catch((err) => console.error("Error deleting profile image:", err));
    }
    //deleting the post from the server
    const deletedPost = await PostModel.findByIdAndDelete(postId);
    res.status(200).json({
      success: true,
      message: "Post Deleted Successfully",
      post: deletedPost,
    });
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

const getPost = async (req, res) => {
  try {
    const post = await PostModel.find();
    if (!post) {
      throw new ApiError(404, "Post not found");
    }
    return res
      .status(200)
      .json({ success: true, message: "Post fetched successfully", post });
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

const update = async (req, res) => {
  try {
    const { title, description } = req.body;
    const postId = req.params.id;

    const postUpdate = await PostModel.findById(postId);
    if (!postUpdate) {
      throw new ApiError(401, "Blog does not exist");
    }

    if (title) {
      postUpdate.title = title;
    }
    if (description) {
      postUpdate.description = description;
    }
    if (req.file) {
      postUpdate.image = req.file.filename;
    }
    await postUpdate.save();
    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      postUpdate,
    });
  } catch (error) {
    throw new ApiError(500, "internal server error");
  }
};

export { Create, deletePost, getPost, update };
