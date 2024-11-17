// define user model 
import mongoose from "mongoose";

// create schema
const schema = new mongoose.Schema({
    first_name : {type: String},
    last_name : {type: String},
    phoneNumber: { type: String, required: true },
    refreshToken: {type: String},
    otp: {
        code : Number,
        expire: String
    }
})

// create user model
const userModel = mongoose.model('Users', schema)

// export user model
export default userModel