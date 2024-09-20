// define uesr routes

// import user controller
import userController from "../../controllers/user/user.controller.js";

// importe express router
import { Router } from "express";
const router = Router()

// all user routes...

// get all user routes
router.get('/get-all-users', userController.getAllUser)

// get  user by id routes
router.get('/get-user-by-id', userController.getUserById)

// update  user by id routes
router.patch('/update-user-by-id', userController.updateUserById)

// delete  user by id routes
router.get('/delete-user-by-id', userController.deleteUserById)

// export uesr router
export default router