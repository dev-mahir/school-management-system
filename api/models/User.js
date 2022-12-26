import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["operator", "admin"],
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("User", userSchema);
