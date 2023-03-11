import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    fathers_name: {
      type: String,
    },
    mothers_name: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "Custom"],
    },

    date_birth: {
      type: String,
    },

    year: {
      type: String,
    },

    class_name: {
      type: String,
    },
    student_id: {
      type: String,
    },
    roll: {
      type: String,
    },

    discount: {
      type: Number,
    },

    monthly_fee: {
      type: Number,
    },

    isActivate: {
      type: Boolean,
      default: false,
    },
    access_token: {
      type: String,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Student", studentSchema);
