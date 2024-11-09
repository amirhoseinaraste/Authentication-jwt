import jwt from "jsonwebtoken";
import secretKeyGenerator from "./secret-key-genearator.js";
import getEnv from "../configs/get-env.js";
import createHttpError from "http-errors";

// signToken
export function signToken(payload){
    
    const secretKey = secretKeyGenerator()
    return jwt.sign(
        payload, secretKey, {expiresIn: getEnv('JWT_EXPIRATION')}
    )
};
// verify token
export function verifyToken(token){
    try {
        return jwt.verify(token, getEnv('JWT_EXPIRATION'))
    } catch (error) {
        next(createHttpError.Unauthorized('Invalid or expired token'))
    }
}