import Joi from "joi";

// Define the register validation schema
const schema = Joi.object({
    username: Joi.string()
        .pattern(/^[a-zA-Z0-9]{5,}$/)
        .required()
        .messages({
            "string.empty": "Username is required",
            "string.pattern.base": "Username must be at least 5 characters and contain only letters and numbers",
        }),

    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.pattern.base": "Password must be at least 8 characters, including upper/lowercase letters, numbers, and special characters",
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Invalid email format",
        }),

    phoneNumber: Joi.string()
        .pattern(/^[0-9]{10,}$/)
        .required()
        .messages({
            "string.empty": "Phone number is required",
            "string.pattern.base": "Phone number must be at least 10 digits",
        }),

    first_name: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            "string.empty": "First name is required",
            "string.pattern.base": "First name must contain only letters and spaces",
        }),

    last_name: Joi.string()
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            "string.empty": "Last name is required",
            "string.pattern.base": "Last name must contain only letters and spaces",
        }),
});

// Export validation schema
export default schema;
