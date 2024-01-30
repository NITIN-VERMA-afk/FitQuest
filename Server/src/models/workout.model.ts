import mongoose, { Schema } from "mongoose";

const WorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});
export const Workout = mongoose.model("Workout", WorkoutSchema);
