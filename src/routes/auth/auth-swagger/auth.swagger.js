/**
 * @swagger
 * components:
 *   securitySchemes:
 *     CookieAuth:
 *       type: apiKey
 *       in: cookie
 *       name: refreshToken
 */

/**
 * @swagger
 *  /auth/get-otp:
 *    post:
 *      summary: Get OTP code for login
 *      tags:
 *       - Authentication
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
 *                  message: 
 *                      type: string
 *                      description: response message or status message
 *                      example: ' etc message '
 *                  data:
 *                    type: number
 *                    description: otp code 
 *                    example: 010101      
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
 *      tags:
 *       - Authentication
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
 *                  message: 
 *                      type: string
 *                      description: response message or status message
 *                      example: ' etc message '
 *                  data:
 *                    type: object
 *                    description: jwt-Token 
 *                    example: hash              
 *        400:
 *          description: Bad request, invalid input 
 *        500:
 *          description: Internal server error  
 */
/**
 * @swagger
 *  /auth/get-refresh-token:
 *      post:
 *          summary: Generate new access and refresh tokens
 *          tags:
 *           - Authentication
 *          responses:
 *              200:
 *                  description:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties: 
 *                                  accessToken:
 *                                      type: string
 *                                      description: The new access token.
 *                                      example:
 *                                  refreshToken:
 *                                      type: string
 *                                      description: The new refresh token.
 *                                      example: eyJhbGciOiJIUzI1NiIsInR5...
 *          400:
 *              description:
 *          401:
 *              description:
 *      security:
 *       - CookieAuth: []               
 */
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user
 *     description: This endpoint allows a user to register by providing required information.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *               - phoneNumber
 *               - first_name
 *               - last_name
 *             properties:
 *               username:
 *                 type: string
 *                 example: username123
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Asdf1234
 *               email:
 *                 type: string
 *                 format: email
 *                 example: exam@gmail.com
 *               phoneNumber:
 *                 type: string
 *                 example: "09121234567"
 *               first_name:
 *                 type: string
 *                 example: John
 *               last_name:
 *                 type: string
 *                 example: Doe
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *               - phoneNumber
 *               - first_name
 *               - last_name
 *             properties:
 *               username:
 *                 type: string
 *                 example: username123
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Asdf1234
 *               email:
 *                 type: string
 *                 format: email
 *                 example: exam@gmail.com
 *               phoneNumber:
 *                 type: string
 *                 example: "09121234567"
 *               first_name:
 *                 type: string
 *                 example: name
 *               last_name:
 *                 type: string
 *                 example: lastname
 *     responses:
 *       201:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: number
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Registration successful
 *                 data:
 *                   type: object
 *                   example: {}
 *       400:
 *         description: Bad Request - Validation Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Email is already in use
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Something went wrong
 */
/**
 * @swagger
 *  /auth/login:
 *      post:
 *          summary: Login user
 *          description: Authenticate a user with email/username and password
 *          tags:
 *              - Authentication
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - password
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  example: example@gmail.com
 *                              username:
 *                                  type: string
 *                                  example: username123
 *                              password:
 *                                  type: string
 *                                  example: password@123 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          required:
 *                              - password
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  example: example@gmail.com
 *                              username:
 *                                  type: string
 *                                  example: username123
 *                              password:
 *                                  type: string
 *                                  example: password@123
 *          responses:
 *              200:
 *                  description: User successfully logged in
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  statusCode:
 *                                      type: integer
 *                                      example: 200
 *                                  message:
 *                                      type: string
 *                                      example: Login successful
 *                                  data:
 *                                      type:  object 
 *                                      properties:
 *                                          accesstToken:
 *                                              type: string
 *                                              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                                          refreshToken: 
 *                                              type: string
 *                                              example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *              400:
 *                  description: Invalid input data
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  statusCode:
 *                                      type: integer
 *                                      example: 400
 *                                  error:
 *                                      type:  string 
 *                                      example: Invalid username or password
 *              401:
 *                  description: Unathorized
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  statusCode:
 *                                      type: integer
 *                                      example: 401
 *                                  error:
 *                                      type:  string 
 *                                      example: Unauthorized Invalid credentials
 *              500:
 *                  description: Intenal Server Error    
 */