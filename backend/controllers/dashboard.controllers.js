import UserModel from "../models/User.models.js";
import { ApiError } from "../utils/ApiError.js";
import fs from "fs";
import path from "path";

//API to show all the information about the application
const GetAllData = async (req, res) => {
  try {
    const users = await UserModel.find();
    const posts = await UserModel.find();
    //comment come here

    if (!users && !posts) {
      throw new ApiError(404, "Data does not exist");
    }
    return res.status(200).json({ success: true, users, posts });
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

//api to fetch all the users
const getUser = async (req, res) => {
  try {
    const users = await UserModel.find();

    if (!users) {
      throw new ApiError(404, "Data does not exist");
    }
    return res.status(200).json({ success: true, users });
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

//delete a user
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userExist = await UserModel.findById(userId);
    if (!userExist) {
      throw new ApiError(401, "User does not exist");
    }
    if (userExist == "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Admin account can not be deleted" });
    }
    //delete the profile photo of the user
    if (userExist.profile) {
      const profilePath = path.join("public/temp", userExist.profile);
      fs.promises
        .unlink(profilePath)
        .then(() => console.log("Profile image deleted"))
        .catch((err) => console.error("Error deleting profile image:", err));
    }
    const deleteUser = await UserModel.findByIdAndDelete(userExist);
    return res.status(200).json({
      success: true,
      message: "User has been deleted successfully",
      user: deleteUser,
    });
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Internal server error");
  }
};
export { GetAllData, getUser, deleteUser };
