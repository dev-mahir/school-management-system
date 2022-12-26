import express from "express";
import { add_marks } from "../controllers/marksController.js";

// init router
const router = express.Router();

// student route
router.post("/", add_marks);



// export  router
export default router;
