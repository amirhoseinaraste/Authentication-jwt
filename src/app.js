// import express
import express from 'express';

// import custom response
import customResponse from './configs/custom-response.js';

// import router
import router from './routes/router.js';

// import basic middleware for setup appl ication
import cors from 'cors';
import helmet from 'helmet';
import Logger from './configs/logger.js';
import mongoose from 'mongoose';


// create class for configuration application
export default class Application{
    // create a instance of express as app
    #app = express()

    // creating app with port and db uri
    constructor(PORT, DB_URI){
        this.config();
        this.DB_Connect(DB_URI);
        this.AppRoutes();
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
    ErrHandler(){}

    // listen the port
    Listen(PORT){
        this.#app.listen(PORT, ()=> console.log('server runnig on port: ' + PORT))
    }

}