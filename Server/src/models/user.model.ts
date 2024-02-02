
import jwt  from "jsonwebtoken"
import * as bcrypt from "bcrypt"
import mongoose,{ Document, Schema, model, Model } from 'mongoose';



interface I_UserDocument extends Document {
  email: string;
  password: string;
  rewards: boolean;
}

const userSchema = new mongoose.Schema<I_UserDocument>(
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
        type:Boolean,
        default:false,
    }
  },
  { timestamps: true }
);

// userSchema.pre('save', async function (this: I_UserDocument, next) {
//   if (!this.isModified('password')) return next();

//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// userSchema.methods.isPasswordCorrect = async function (password: string) {
//   return await bcrypt.compare(password, this.password);
// };

// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//       email: this.email,
//     },
//     process.env.ACCESS_TOKEN_SECRET as string,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
//     }
//   );
// };

// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET as string,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//     }
//   );
// };


export const User: Model<I_UserDocument> = model<I_UserDocument>('User', userSchema);


