import crypto from 'crypto';

// secret key generator
export default function secretKeyGenerator(){
    return crypto.randomBytes(32).toString('hex')
}