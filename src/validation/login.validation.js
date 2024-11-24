import Joi from "joi"

// define login validaton
const schema = Joi.object({

    email: Joi.string()
    .email()
    .message({
        "string.email": "Invalid email format",
        "string.empty": "Email cannot be empty",
    }),

    username: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,}$/)
    .message({
        "string.empty": "Username cannot be empty",
        "string.pattern.base": "Username must be at least 3 characters and contain only letters and numbers",
    }),

    password : Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .message({
        "string.empty": "Password is required",
        "string.pattern.base": "Password must be at least 8 characters, including upper/lowercase letters, numbers, and special characters",
    })

}).xor('username', 'email');

// export schema
export default schema