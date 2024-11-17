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