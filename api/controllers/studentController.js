import Student from "../models/Student.js";
import createError from "../utility/createError.js";
import { idGenerator } from "../utility/math.js";
import { st_class } from "../utility/st_class.js";

/**
 * @access public
 * @route /api/student/registration
 * @method POST
 */

export const registration = async (req, res, next) => {
  try {
    // get form data
    const {
      first_name,
      fathers_name,
      mothers_name,
      phone,
      gender,
      date_birth,
      year,
      class_name,
    } = req.body;

    // validation
    if (
      !first_name ||
      !fathers_name ||
      !mothers_name ||
      !phone ||
      !gender ||
      !date_birth ||
      !year
    ) {
      return next(createError(400, "All fields are required"));
    }

    // find student
    const totalStudent = await Student.estimatedDocumentCount();

    const student_class_no = st_class(class_name);

    const student_id = idGenerator(year, student_class_no, totalStudent);

    // create student
    const student = await Student.create({
      ...req.body,
      student_id: student_id,
    });

    if (student) {
      res.status(201).json({
        message: "Student Registration successfull",
        student,
      });
    } else {
      return next(createError(400, "Student Registration failed, try again"));
    }
  } catch (error) {
    next(createError(500, "Internal server error. Try again"));
  }
};

/**
 * @access public
 * @route /api/student/get/all
 * @method GET
 */
export const getAllStudent = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const class_name = req.query.class;
    const year = req.query.year;
    // const roll = req.query.roll;

    const students = await Student.aggregate([
      { $match: { $and: [{ year: year }, { class_name: class_name }] } },
      { $skip: skip },
      { $limit: limit },
    ]);
    if (students.length > 0) {
      const total_doc = await Student.countDocuments();
      res.status(200).json({ students , total_doc});
    } else {
      next(createError(404, "Student not found"));
    }
  } catch (error) {
    next(createError(500, "Internal server error. Try again"));
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
