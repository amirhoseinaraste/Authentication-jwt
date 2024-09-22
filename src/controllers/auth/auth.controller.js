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
            res.custom(StatusCodes.OK, otp)

        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    //  confirm otp 
    confirmOtp(){

    }
}

export default new authController()