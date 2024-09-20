// import dotenv
import dotenv from 'dotenv'
// config dotenv 
dotenv.config()

// create getEnv function
export default function getEnv(key){
    // return key
    return process.env[key];
}