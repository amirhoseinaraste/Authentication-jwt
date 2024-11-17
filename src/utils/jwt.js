import jwt from "jsonwebtoken";
import getEnv from "../configs/get-env.js";
import createHttpError from "http-errors";

// sign Access Token
export function signAccessToken(payload){
    const secretKey = getEnv('JWT_SECRET_DEV');
    const exp = getEnv('ACCSESS_TOKEN_EXPIRATION')
    return jwt.sign(
        payload, secretKey, {expiresIn: exp}
    )
};

// sign Refresh Token
export function signRefreshToken(payload){
    const secretKey = getEnv('JWT_SECRET_DEV');
    const exp = getEnv('REFRESH_TOKEN_EXPIRATION')
    return jwt.sign(
        payload, secretKey, {expiresIn: exp}
    )
};

// verify token
export function verifyToken(token){
    try {
        const secretKey = getEnv('JWT_SECRET_DEV')
        return jwt.verify(token, secretKey)
    } catch (error) {
        throw createHttpError.Unauthorized('Invalid or expired token')
    }
}