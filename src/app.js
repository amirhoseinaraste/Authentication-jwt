// import express
import express from 'express';

// import custom response
import customResponse from './configs/custom-response.js';

// import router
import router from './routes/router.js';

// import basic packages for setup appl ication
import cors from 'cors';
import helmet from 'helmet';
import Logger from './configs/logger.js';
import mongoose from 'mongoose';

// import swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi, { serve } from 'swagger-ui-express'

// import http error and http status
import createHttpError from 'http-errors';
import statusCode from 'http-status-codes';



// create class for configuration application
export default class Application{
    // create a instance of express as app
    #app = express()

    // creating app with port and db uri
    constructor(PORT, DB_URI){
        this.config();
        this.DB_Connect(DB_URI);
        this.AppRoutes();
        this.swaggerConfig()
        this.ErrHandler()
        this.Listen(PORT);
    };

    // basic configuration
    config()
    {
       // config url encoded 
        this.#app.use(express.urlencoded({extended : true}));

       // config json
        this.#app.use(express.json());

       // config cors
        this.#app.use(cors())

       // config helmet
        this.#app.use(helmet())

       // config logger
        this.#app.use(Logger)
        
       // config custom resonse
        customResponse()
        
    }
    //  config swagger 
    swaggerConfig(){
        const swaggerOptions = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Card-visit APIs',
                    version: '1.0.0',
                    description: 'All APIs for card visit app'
                },
                servers: [
                    {
                        url: 'http://localhost:3000' // Your server URL
                    }
                ]
            },
            apis: ['./src/routes/**/*.js'] // Recursively include all JS files in router directory and subdirectories
        };
        const swaggerDocs = swaggerJSDoc(swaggerOptions);
        this.#app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    }

    // db connection
    DB_Connect(DB_URI){
        mongoose.connect(DB_URI).
        then(console.log('DB Connected...'))
    }

    // router connection
    AppRoutes(){
         this.#app.use('/', router)
    }

    // error handler 
    ErrHandler(){
        // not found error handler
        this.#app.use((req, res, next)=>{
            // get status
            const notFoundStatus = statusCode.NOT_FOUND

            // get not found error
            const notFoundError = createHttpError.NotFound()

            // send error
            res.status(notFoundStatus).json({
                statusCode: notFoundStatus,
                notFoundError
                
            })
        });

        // Error Handler

        this.#app.use((error, req, res, next)=>{
            // get error 
            const errorMsg = error.message || createHttpError.InternalServerError();

            // get status error 
            const errorStatus = error.status || statusCode.INTERNAL_SERVER_ERROR
            
            // send error
            res.status(errorStatus).json({
                status: errorStatus,
                errorMsg
            })
        })
    }

    // listen the port
    Listen(PORT){
        this.#app.listen(PORT, ()=> console.log('server runnig on port: ' + PORT))
    }

}