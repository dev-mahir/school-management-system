import express from 'express';
import {
  loggedInUser,
  login,
  activateAccountByCode,
  resendActivation,
  forgotPassword,
  register,
  activateAccountByLink,
  passwordResetAction,
  findUserAccount,
  sendPasswordResetOTP,
  checkPasswordResetOtp,
  passwordReset,
} from "../controllers/userController.js";

// init router 
const router = express.Router();



// user auth route 
router.post('/login', login)
router.post('/register', register)
router.get('/me', loggedInUser)

router.get('/activate/:token', activateAccountByLink)

router.post('/code-activation', activateAccountByCode)
router.post('/resend-activate', resendActivation)

router.post('/forgot-password', forgotPassword)
router.post('/forgot-password/:token', passwordResetAction)

router.post('/find-account', findUserAccount)
router.post("/send-password-reset-otp", sendPasswordResetOTP);
router.post("/check-password-reset-otp", checkPasswordResetOtp);

router.post("/user-password-reset", passwordReset);



// export  router 
 export default router 