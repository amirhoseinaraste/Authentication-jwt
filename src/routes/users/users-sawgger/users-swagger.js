/**
 * @swagger
 *  /users/get-all-users:
 *      get:
 *          summary: Get all users that signed up
 *          description: Retrieves all users who signed up
 *          responses:
 *              200:
 *                  description: Successfully retrieved users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  statusCode:
 *                                      type: integer
 *                                      description: State of response 
 *                                      example: 200
 *                                  data:
 *                                      type: string
 *                                      description: List of users
 *                                      example: {[{user}]}
 *                                  
 *          
 *              
 */