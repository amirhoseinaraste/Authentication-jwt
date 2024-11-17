// import express
import express from 'express';

// create custom response method
express.response.custom = function(status, message, data = {}){
    return this.status(status).json({
        statusCode: status,
        message: message,
        data : data
    })
}
export default express