import userModel from "../../models/user.models.js";
import otpGenerator from "../../utils/otp-generator.js";
import phoneNumberSchema from "../../validation/auth.validation.js";
import userService from "../user/user.service.js";

// define auth servise
// create auth service class
class authService{
    // signUp service
    async getOtp(phoneNumber){
        console.log(phoneNumber);
        // validation phone number
        await phoneNumberSchema.validateAsync({phoneNumber})

        // check exist user
        await userService.checkUserExist(phoneNumber)
        
        // get otp
        const otp = otpGenerator()

        // create user
        const createUser = await userModel.create({phoneNumber, otp})

        // return otp
        return otp.code

    }

    // confirm otp service
    async confirmOtp(otp){

    }
}
// export auth service
export default new authService()