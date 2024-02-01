import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "plz provide  email"],
      unique: true,
      lowercase: true,
      
    },
    password: {
      type: String,
      require: [true, "plz provide a password"],
      unique: true,
      
    },
   
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
