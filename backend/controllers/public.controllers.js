import PostModel from "../models/Blog.models.js";
import { ApiError } from "../utils/ApiError.js";

//get all the comments on the post in a single api
const GetSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;
    //populate the comment array with the comments
    //populate the userIds that have commented
    const Post = await PostModel.findById(postId).populate({
      path: "comments",
      populate: {
        path: "userId",
      },
    });

    if (!Post) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    res.status(200).json({ success: true, Post });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { GetSinglePost };
