// import auth service
import authService from "../../services/auth/auth.service.js"

// import http status code
import { getStatusCode, StatusCodes } from "http-status-codes"

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
            res.custom(StatusCodes.OK, otp)

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
            const Token = await authService.confirmOtp(phoneNumber ,code)
            // response
            res.custom(StatusCodes.OK, {Token: Token})
            
        } catch (error) {
            console.log(error);
            
            next(error)
        }
    }
}

export default new authController()