// define user controller

import createHttpError from "http-errors";
import userModel from "../../models/user.models.js"

// create user controller class
class userController {
    // get all user method
    async getAllUser(req, res, next){
        try {
        // take all user from db
        const users = await userModel.find({})

        // return list of users
        res.custom(200, 'list of all users', users)

        } catch (error) {
            next(error)
        }
    }

    // get user by id method
    async getUserById(){}

    // update user by id method 
    async updateUserById(){}

    // delete user by id method 
    async deleteUserById(){}

    // check user exist
    async checkUserExist(){
    }
}

// export user controller
export default new userController()