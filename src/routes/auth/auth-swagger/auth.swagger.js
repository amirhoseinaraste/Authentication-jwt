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
 *                  required: true  
 *                  type: string
 *                  description: The user's phone number
 *                  example: 09 *** ** **
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  required: true 
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
/**
 * @swagger
 *  /auth/confirm-otp:
 *    post:
 *      summary: Confirmation by otp code
 *      description: use otp code for login and take token
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  required: true  
 *                  type: string
 *                  description: The user's phone number
 *                  example: 09 *** ** **
 *                code:
 *                  required: true
 *                  type: string
 *                  description: The user's confirmation code
 *                  example: 010101
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  required: true  
 *                  type: string
 *                  description: The user's phone number
 *                  example: 09 *** ** **
 *                code:
 *                  required: true
 *                  type: string
 *                  description: The user's confirmation code
 *                  example: 010101        
 *      responses:
 *        200:
 *          description: Confirm OTP
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
 *                    description: jwt-Token 
 *                    example: hash              
 *        400:
 *          description: Bad request, invalid input 
 *        500:
 *          description: Internal server error  
 */
