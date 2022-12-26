import mongoose from "mongoose";

const marksSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    examType: {
      type: String,
      required: true,
    },
    class_name: {
      type: String,
    },
    marks: {
      type: Array
    }
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

export default mongoose.model("Mark", marksSchema);
