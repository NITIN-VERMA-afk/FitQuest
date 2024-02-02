import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/Apiresponse";
import User from "../models/user.model"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";








// const generateAccessAndRefereshTokens = async(userId:any) =>{
//   try {
//       const user = await User.findById(userId)
//       const accessToken = user.generateAccessToken()
//       const refreshToken = user.generateRefreshToken()

//       user.refreshToken = refreshToken
//       await user.save({ validateBeforeSave: false })

//       return {accessToken, refreshToken}


//   } catch (error) {
//       throw new ApiError(500, "Something went wrong while generating referesh and access token")
//   }
// }



const Register = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

     console.log("email: ", email,password);
     res.send(200)
 



 
  
  


  if ([email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const existedUser = await User.findOne({
    $or: [{ email }, { password }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const createdUser = await User.create({
    email,
    password,
  });

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const Login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // const isPasswordValid =

  // if (!isPasswordValid) {
  //   throw new ApiError(401, "Invalid password");
  // }

  return res.status(200).json(new ApiResponse(200, user, "Login successful"));
});

const User1 = asyncHandler(async (req, res) => {
  res.send("hello nitin");
});
const logoutUser=asyncHandler(async(req,res)=>{
  await User
})

export { Register, Login, User1 };
