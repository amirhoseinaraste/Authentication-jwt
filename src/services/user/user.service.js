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
    async getUser(key){
        // get user by key
        const user = await userModel.findOne({key})
        if(!user) throw createHttpError.NotFound('user does not exist')

        // return user
        return user
    }

    // update user by id method 
    async updateUserById(){}

    // delete user by id method 
    async deleteUserById(){}

    // check user exist
    async checkUserExistByFileds(userField, reurnUser = false){
        // validate input criteria
        if (!userField || typeof userField !== "object" || Object.keys(userField).length === 0){
            throw createHttpError.BadRequest("Invalid userField for user lookup.")
        }
    
        // Loop through each field and check if it exists in the database
        for ( const  [key , value] of Object.entries(userField)){
            // check exist user
            const user = await userModel.findOne({[key] : value})
            if(user) return key
        }

        return null
    }
        
}

// export user controller
export default new userService()