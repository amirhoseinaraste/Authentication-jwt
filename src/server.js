// create a instance of app for runnig on server;

// import Application
import Application from './app.js'

// import getEnv
import getEnv from './configs/get-env.js'

// create a new app;
new Application(getEnv('PORT'), getEnv('DB_URI'))

