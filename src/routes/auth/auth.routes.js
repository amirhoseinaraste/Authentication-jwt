// define auth router...

// import express router
import { Router } from "express";
import authController from "../../controllers/auth/auth.controller.js";
const router = Router()

// define sign up route with post method
router.post('/signup', authController.signUp)

// define sign in router
router.post('/signin', authController.signIn)

export default router


