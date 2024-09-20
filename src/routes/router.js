// impport express router
import { Router } from "express";

// import routes
import auth from './auth/auth.routes.js'
import users from './users/user.routes.js'

// create router
const router = Router()

// use all main routes

// main route
router.get('/',(req, res, next)=>{
    return res.custom(200,'hello world')
})

// auth routes
router.use('/auth', auth)

// users routes
router.use('/users', users)


export default router
