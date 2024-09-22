// create otp 

// define otp function
export default function otpGenerator(){
    // return randum  number with 6 digits 
    const randomNumber = Math.floor(100000 + Math.random() * 900000)

    // expire time of otp
    const expireTime = '1h';

    // create otp
    const otp = {
        code: randomNumber,
        expire: expireTime
    }

    // return otp
    return otp
}
