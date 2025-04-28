import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import UserModel from "../models/User.models.js";

//middleware to check if the user has admin permission of not
const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new ApiError(401, "Unathorized: token not available");
    }
    //verify if the user has the correct token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.userId); //find the user from db
    const role = user.role;

    if (!user) {
      throw new ApiError(402, "User does not exist");
    }
    if (user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Unauthorized: User is not an admin" });
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

//middleware to check if the user is logged in or not
const isLogin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new ApiError(401, "Unathorized: token not available");
    }
    //verify if the user has the correct token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.userId); //find the user from db

    if (!user) {
      throw new ApiError(402, "User does not exist");
    }
    //pass the user to the next function if he is verified
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

export { isAdmin, isLogin };
