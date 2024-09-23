// define auth router...

// import express router
import { Router } from "express";
import authController from "../../controllers/auth/auth.controller.js";
const router = Router()

/**
 * @swagger
 *  /auth/get-otp:
 *    post:
 *      summary: Get OTP code for login
 *      description: Log in with OTP
 *      requestBody:
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber: 
 *                  type: string
 *                  description: The user's phone number
 *                  example: 09 *** ** **
 *      responses:
 *        200:
 *          description: Received OTP
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  statusCode:
 *                    type: string
 *                    description: Status code
 *                    example: 200
 *                  data:
 *                    type: string
 *                    description: OTP code
 *                    example: 111111
 *        400:
 *          description: Bad request, invalid input 
 *        500:
 *          description: Internal server error
 */
 
// define sign up route with post method
router.post('/get-otp', authController.getOtp)

// define sign in router
router.post('/confirm-otp', authController.confirmOtp)

export default router


