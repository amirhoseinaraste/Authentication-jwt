import userModel from "../../models/user.models.js";
import { signToken } from "../../utils/jwt.js";
import otpGenerator from "../../utils/otp-generator.js";
import phoneNumberSchema from "../../validation/auth.validation.js";
import userService from "../user/user.service.js";
import createHttpError from "http-errors";

// define auth servise
// create auth service class
class authService{
    // signUp service
    async getOtp(phoneNumber){
        // validation phone number
        await phoneNumberSchema.validateAsync({phoneNumber})

        // get otp
        const otp = otpGenerator()

        // check exist user
        const user = await userService.checkUserExist(phoneNumber, {returnUser: true})
        // if user exist update otp code otherwise create new user
        if(user){
            // update otp code
            await userModel.updateOne({_id: user._id},{otp: otp})
        } else {
            // create user
            const createUser = await userModel.create({phoneNumber, otp})   
        }

        // return otp
        return otp.code

    }

      
    async confirmOtp(phoneNumber ,code){
        // check exist user
        const user = await userService.checkUserExist(phoneNumber, {returnUser: true});
        console.log(code);
        
        // if user does not exist throw error
        if(!user){
            throw createHttpError.NotFound('The provided data is invalid. Please check your input and try again.')
        } 

        // check confirmation otp
        if(code !=  user.otp?.code){
            throw createHttpError.BadRequest('The provided data is invalid. Please check your input and try again.')
        }
        
        // get token
        const Token = signToken({userId: user._id});

        // return Token
        return Token;


    }
}
// export auth service
export default new authService()                 