import Marks from "../models/Marks.js";
import Student from "../models/Student.js";
import createError from "../utility/createError.js";

/**
 * @access public
 * @route /api/marks
 * @method POST
 */
export const add_marks = async (req, res, next) => {
  try {
    // get form data
    const { class_name, examType} = req.body;

    // validation
    if (!class_name || !examType) {
      return next(createError(400, "All fields are required"));
    }

    // create student
    const marks = await Marks.create(req.body);

    if (marks) {
      res.status(201).json({
        message: "Marks added successfully",
      });
    } else {
      return next(createError(400, "Marks added failed, try again"));
    }
  } catch (error) {
    next(error);
  }
};



/**
 * @access public
 * @route /api/student/:id
 * @method GET
 */
export const getSingleStudent = async (req, res, next) => {
  try {
    // get form data
    const { id } = req.params;

    // validation
    if (!id) {
      return next(createError(400, "Field is required"));
    }
    if (id) {
      // check  student
      const student = await Student.findOne({ student_id: id });
      console.log(student);
      if (!student) {
        return next(createError(400, "Invalid ID no"));
      } else {
        res.status(201).json({
          message: "Student Registration successfull",
          student,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};
