// define user model 

import mongoose, { model } from "mongoose";

// create schema
const schema = new mongoose.Schema({
    first_name : {type: String, required: true},
    last_name : {type: String, required: true},
    password : {type: String, required: true}
})

// create user model
const userModel = mongoose.model('Users', schema)

// export user model
export default userModel