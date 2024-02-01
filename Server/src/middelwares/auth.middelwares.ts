import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
import {User} from "../models/user.model"
import { access } from "fs";

export const varifyJWT=asyncHandler(async(req,_,next)=>{
    try {

        const token=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer","")
        console.log(token)
        if(!token){
            throw new ApiError(401,"Unauthrized request")
        }

        const decodedToken=jwt.varify(token,process.env.ACCESS_TOKEN_SECRET)

        const user=await User.findById(decodedToken?._id).select("-password -refrenceToken")
        if(!user){
            throw new ApiError(401,"Invalid access token")
        }
        req.user=user;
        next()
        
    } catch (error) {
        throw new ApiError(401,"invalid access token"||error)
        
    }
})