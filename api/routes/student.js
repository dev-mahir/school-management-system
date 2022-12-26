import express from 'express';
import { getSingleStudent, registration } from '../controllers/studentController.js';


// init router 
const router = express.Router();


// student route 

router.post("/registration", registration);
router.get("/:id", getSingleStudent);



// export  router 
 export default router 