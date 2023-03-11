import express from 'express';
import { getAllStudent, getSingleStudent, registration } from '../controllers/studentController.js';


// init router 
const router = express.Router();


// student route 

router.post("/registration", registration);
router.get("/get/all", getAllStudent);
router.get("/:id", getSingleStudent);




// export  router 
 export default router 