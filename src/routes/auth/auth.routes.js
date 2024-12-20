// define auth router...

// import express router
import { Router } from "express";
import authController from "../../controllers/auth/auth.controller.js";
const router = Router()

// define register route
router.post('/register', authController.register);

// define login route
router.post('/login', authController.login)

// define sign up route with post method
router.post('/get-otp', authController.getOtp)

// define sign in router
router.post('/confirm-otp', authController.confirmOtp)

// define get refresh token
router.post('/get-refresh-token', authController.getRefreshToken)

export default router


