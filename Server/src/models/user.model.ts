import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "plz provide  email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "plz provide a password"],
      unique: true,
      trim: true,
    },
    rewards:{
        type:Number,
        default:0,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
