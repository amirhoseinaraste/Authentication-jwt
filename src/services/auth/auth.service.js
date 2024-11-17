import userModel from "../../models/user.models.js";
import { signAccessToken, signRefreshToken, verifyToken } from "../../utils/jwt.js";
import otpGenerator from "../../utils/otp-generator.js";
import phoneNumberSchema from "../../validation/auth.validation.js";
import userService from "../user/user.service.js";
import createHttpError from "http-errors";
import RedisConfig from "../../configs/redisClient.js";

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
        
        // if user does not exist throw error
        if(!user){
            throw createHttpError.NotFound('The provided data is invalid. Please check your input and try again.')
        } 

        // check confirmation otp
        const now = new Date().getDate();
        if(code !=  user.otp?.code || user.otp.expire < now){
            throw createHttpError.BadRequest('Incorrect OTP. Please try again.')
        }
        
        // get access token
        const accessToken = signAccessToken({userId: user._id});

        // get refresh token
        const refreshToken = signRefreshToken({userId: user._id})
        
        // save token on redis
        const tokenExpiration = 7 * 24 * 60 * 60 * 1000
        await RedisConfig.set(`refresh_token_${user._id}`, refreshToken, 'EX', tokenExpiration);

        // return Token
        return {accessToken, refreshToken};


    }
    async getRefreshToken(token){
        // check exist token 
        if(!token) throw createHttpError.Unauthorized('Unauthorized access. Please log in to continue');

        // verify token and take user
        const user = verifyToken(token);
        
        // get token from redis
        const refreshToken = await RedisConfig.get(`refresh_token_${user.userId}`);
        
        
        if (!refreshToken) {
            throw createHttpError.Unauthorized('Refresh token not found. Please log in again');
        }
        

        // make new tokens
        const newAccessToken = signAccessToken({userId: user.userId});
        const newRefreshToken = signRefreshToken({userId: user.userId});

        // save new refresh token on redis
        const  tokenExpiration = 7 * 24 * 60 * 60 * 1000
        await RedisConfig.set(`refresh_Token_${user._id}`, newRefreshToken, 'EX', tokenExpiration);

        // return tokens
        return {newAccessToken, newRefreshToken};
    }
}
// export auth service
export default new authService()                 