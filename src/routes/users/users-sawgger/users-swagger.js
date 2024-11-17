/**
 * @swagger
 *  /users/get-all-users:
 *      get:
 *          summary: Get all users that signed up
 *          tags:
 *           - Users
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
 *                                  message: 
 *                                      type: string
 *                                      description: list of all users
 *                                      example: etc message
 *                                  data:
 *                                      type: object
 *                                      description: List of users
 *                                      example: {users}
 *                                  
 *          
 *              
 */