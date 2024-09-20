import userModel from "../../models/user.models.js"

// define auth controller
class authController {
    // sign up method
    async signUp(req, res, next){
        try {
            // get user data
            const user = req.body
            console.log(user);

            // create new use on db
            await userModel.create(user)

            // return respomse
            res.custom(200, {message:
                'welcome'
            })
        } catch (error) {
            next(error);
        }
    }

    // sign in method
    signIn(){

    }
}

export default new authController()