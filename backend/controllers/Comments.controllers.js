import PostModel from "../models/Blog.models.js";
import CommentModel from "../models/comments.models.js";
import { ApiError } from "../utils/ApiError.js";

const addComment = async (req, res) => {
  try {
    const { postId, userId, comment } = req.body;

    //store the items in a new comment
    const newComment = new CommentModel({
      postId,
      userId,
      comment,
    });

    await newComment.save();

    //find the post the comment is made on
    const existPost = await PostModel.findById(postId);
    if (!existPost) {
      throw new ApiError(401, "Blog Post does not exist");
    }
    //push the comment to the post
    existPost.comments.push(newComment._id);
    await existPost.save();
    return res.status(200).json({
      success: true,
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Interval server error");
  }
};

export { addComment };
