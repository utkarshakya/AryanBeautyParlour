import { body, validationResult } from "express-validator";

export const validateUserRegistration = [
    body('name', 'Name is Required, You can Leave it Empty').notEmpty(),
    body('email', 'Email Address You Provided Is Not A Valid Email').isEmail(),
    body('password', "Sorry, Please make a Strong Password").isStrongPassword()
]

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req)['errors']
    if(errors.length !== 0){
        let message = []
        errors.forEach(element => {
            message.push(element['msg'])
        });
        message = message.join("\n")
        return res.status(400).send(message)
    }
    next()
}