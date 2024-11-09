// define user controller

import createHttpError from "http-errors";
import userModel from "../../models/user.models.js"

// create user controller class
class userService {
    // get all user method
    async getAllUser(req, res, next){
        try {
        // take all user from db
        const users = await userModel.find({})

        // return list of users
        res.custom(200, users)

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
    async checkUserExist(phoneNumber , options = { returnUser: false , throwError}){
        // find user by usnig arg
        const user = await userModel.findOne({phoneNumber : phoneNumber});
        // Check if user exists based on options
        if(user){
            if(options.throwError)  throw new Error(createHttpError.Forbidden('credential error'));
            if(options.returnUser) return user;
            } 
            // Return null if user does not exist or options do not require a return
            return user
        }
        
}

// export user controller
export default new userService()