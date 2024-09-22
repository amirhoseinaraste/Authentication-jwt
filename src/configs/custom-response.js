// import express
import express from 'express';

// create custom response method
express.response.custom = function(status, responseData){
    return this.status(status).json({
        statusCode: status,
        data: responseData
    })
}
export default express