import userModel from "../../models/user.models.js";
import { signAccessToken, signRefreshToken, verifyToken } from "../../utils/jwt.js";
import otpGenerator from "../../utils/otp-generator.js";
import userService from "../user/user.service.js";
import createHttpError from "http-errors";
import RedisConfig from "../../configs/redisClient.js";
import bcrypt from 'bcrypt';

// define auth servise
class authService{
    async register(body){
        // take fields from user
        const {username, password, email, phoneNumber, first_name, last_name} = body;

        // check user exist by important fileds like username, email, phoneNumber
        const key = await userService.checkUserExistByFileds({username, email, phoneNumber}, true)
        if(key){
            throw createHttpError.Conflict(`${key} is already in use.`)
        }

        // hash password
        const salt = 10
        const hash = await bcrypt.hash(password, salt);

        // create new user
        const user = await userModel.create({
            username,
            password: hash,
            email,
            phoneNumber,
            first_name,
            last_name
        })

        // change password value for response
        user.password = undefined
        
        // take tokns
        const accessToken = signAccessToken({userId: user._id});
        const refreashToken = signRefreshToken({userId: user._id});

        // return user and token
        return {user, accessToken, refreashToken}
    }
    
    async login(emai, username, password){
        // check exist user
        const user = await userService.getUser(username)
        if(!user) throw createHttpError.NotFound('user does not exist');
        console.log(user);
        
        // check password
        console.log(password);
        console.log(user.password);
        
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);
        
        if(!isMatch) throw createHttpError.Unauthorized('Invalid email or password');
        ی
        // get tokens
        const accessToken = signAccessToken({userId : user._id})
        const refreashToken = signRefreshToken({userId : user._id})

        // change password value for response
        user.password = undefined

        // return response
        return {accessToken, refreashToken, user}
    }
    
    async getOtp(phoneNumber){
        // get otp
        const otp = otpGenerator()

        // check exist user
        const user = await userService.getUser({phoneNumber})

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
        const user = await userService.getUser({phoneNumber});
        
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
        const tokenExpiration = 7 * 24 * 60 * 60 * 1000
        await RedisConfig.set(`refresh_Token_${user._id}`, newRefreshToken, 'EX', tokenExpiration);

        // return tokens
        return {newAccessToken, newRefreshToken};
    }
}
// export auth service
export default new authService()                 