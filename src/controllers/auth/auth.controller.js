// import auth service
import authService from "../../services/auth/auth.service.js"

// import http status code
import { StatusCodes } from "http-status-codes"

// define auth controller
class authController {

    // get otp
    async getOtp(req, res, next){
        try {
            // get phone number
            const {phoneNumber} = req.body
            
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


            // get refresh token
            const refreashToken = await authService.getRefreshToken(token)

            // response
            res.custom(StatusCodes.OK, "OK", refreashToken)

        } catch (error) {
            console.log(error);
            
            next(error)
        }
    }
}

export default new authController()