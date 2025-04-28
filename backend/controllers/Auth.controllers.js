import UserModel from "../models/User.models.js";
import bcryptjs from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const Register = async (req, res) => {
  try {
    const { FullName, email, password } = req.body;
    const existUser = await UserModel.find({ email });
    const imagePath = req.file.filename;
    const hashPassword = await bcryptjs.hashSync(password, 10);
    if (!existUser) {
      throw new ApiError(409, "User with email already exists");
    }

    const NewUser = new UserModel({
      FullName,
      email,
      password: hashPassword,
      profile: imagePath,
    });
    await NewUser.save();
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      user: NewUser,
    });
  } catch (error) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      throw new ApiError(401, "Both the fields are required");
    }
    const FindUser = await UserModel.findOne({ email });
    if (!FindUser) {
      return res.status(404).json({
        success: false,
        message: "Account not found. Please register.",
      });
    }
    const comparePassword = await bcryptjs.compare(password, FindUser.password);
    if (!comparePassword) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ userId: FindUser._id }, process.env.JWT_SECRET);
    //options for cookies
    const options = {
      //cookies can only be modified by the server
      httpOnly: true,
      secure: true,
      maxAge: 3 * 24 * 60 * 60 * 100,
    };
    return res.status(200).cookie("token", token, options).json({
      success: true,
      message: "Login successfully",
      user: FindUser,
      token,
    });
  } catch (error) {
    throw new ApiError(500, "Internal server error");
  }
};

const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "logged out successfully",
    });
  } catch (error) {
    throw new ApiError(500, "Unable to log out");
  }
};

export { Register, Login, Logout };
