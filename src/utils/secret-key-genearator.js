import crypto from 'crypto';
import fs from 'fs'
import path, { dirname } from 'path';

// secret key generator
export default function secretKeyGenerator(){
    // generate a 256-bit secret key
    const secretKey = crypto.randomBytes(32).toString('hex');

    // destination file address
    const envPath = path.join(process.cwd(), '.env');

    if(fs.existsSync(envPath)){
        // define append content
        const envContent = `JWT_SECRET_DEV=${secretKey}\n`;

        // append content to env
        fs.appendFileSync(envPath, envContent, 'utf-8');

        console.log('secret key added to .env');
    }else{
        // if destination file does not exist
        console.log(".env file not found!");

    }
    
}