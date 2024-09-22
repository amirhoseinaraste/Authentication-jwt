// import joi
import Joi from "joi";

//import http error
import createHttpError from "http-errors";

// create schema validation
const schema = Joi.object({
    phoneNumber: Joi.string()
        .pattern(/^09[0-9]{9}$/)
        .length(11)
        .error(createHttpError.BadRequest('The phone number is incorrect'))
});

// export schema
export default schema;
