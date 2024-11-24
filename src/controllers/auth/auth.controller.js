// import auth service
import authService from "../../services/auth/auth.service.js"

// import http status code
import { StatusCodes } from "http-status-codes"

// http error
import createHttpError from "http-errors";

// import validations
import phoneNumberSchema from "../../validation/otp.validation.js";
import registerSchema from "../../validation/register.validation.js";
import loginSchema from "../../validation/login.validation.js";



// define auth controller
class authController {
    // register
    async register(req, res, next){
        try {
            // take body;
            const body = req.body
            
            let {username, password, email, phoneNumber, first_name, last_name} = body;
            // vallidation body
            await registerSchema.validateAsync({username, password, email, phoneNumber, first_name, last_name}, {abortEarly: false})

            // register user
            const tokens = await authService.register(body);

            // response
            res.custom(StatusCodes.OK, 'Register successful', tokens)
        } catch (error) {
            next(error)
        }
    };

    // login
    async login(req, res, next){
        try {
            // take data from body
            const {email, username, password} = req.body;
    
            // validate data
            await loginSchema.validateAsync({email, username, password});

            // login user and take tokens
            const tokens = await authService.login(email, username, password)

            // response
            res.custom(StatusCodes.OK, 'Login successful', tokens)

        } catch (error) {
            console.log(error);
            next(error)
        }
    };

    // get otp
    async getOtp(req, res, next){
        try {
            // get phone number
            const {phoneNumber} = req.body
            
            // validation phone number
            await phoneNumberSchema.validateAsync({phoneNumber});
            
            // get otp
            const otp = await authService.getOtp(phoneNumber)

            // response otp
            res.custom(StatusCodes.OK, 'otp sent', otp)

        } catch (error) {
            next(error)
        }
    }

    //  confirm otp 
    async confirmOtp(req, res, next){
        try {
            // take otp code
            const {phoneNumber ,code} = req.body
            
            // confirm otp
            const Tokens = await authService.confirmOtp(phoneNumber ,code)

            // set token on cookie
            res.cookie('refreshToken', Tokens.refreshToken, {
                httpOnly: true,
                secure: true,
                maxAge: 3600000,
                sameSite: 'Strict'
            })

            // response
            res.custom(StatusCodes.OK, 'Login successful' , Tokens)
            
        } catch (error) {
            next(error)
        }
    }
    // refresh token
    async getRefreshToken(req, res, next){
        try {
            // take token from header
            const token = req.cookies.refreshToken
            if(!token) throw createHttpError.Unauthorized('Unauthorized access. Please log in to continue');
            console.log(token);

            // get refresh token
            const Tokens = await authService.getRefreshToken(token)

            // set token on cookie
            res.cookie('refreshToken', Tokens.newRefreshToken, {
                httpOnly: true,
                secure: true,
                maxAge: 3600000,
                sameSite: 'Strict'
            })

            // response
            res.custom(StatusCodes.OK, "OK", Tokens)

        } catch (error) {
            console.log(error);
            
            next(error)
        }
    }
}

export default new authController()