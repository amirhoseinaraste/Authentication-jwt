// define user model 
import mongoose from "mongoose";

// create schema
const schema = new mongoose.Schema({
    first_name : {type: String},
    last_name : {type: String},
    email : {type: String, required: true},
    username : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    isActive : {type: Boolean, default: true},
    lastLogin : {type: Date},
    profileImage : {type: String},
    role : {type: String, default: 'User'},
    createdAt : {type: Date, default: Date.now},
    updateAt : {type: Date, default: Date.now},
    phoneNumber: { type: String, required: true },
    otp: {
        code : Number,
        expire: String
    }
},{
    timestamps: true
});

// create user model
const userModel = mongoose.model('Users', schema)

// export user model
export default userModel