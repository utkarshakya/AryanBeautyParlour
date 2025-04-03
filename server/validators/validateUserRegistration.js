import { body, validationResult } from "express-validator";

export const validateUserRegistration = [
    body('name', 'Name is Required, You can Leave it Empty').notEmpty(),
    body('email', 'Email Address You Provided Is Not A Valid Email').isEmail(),
    body('password', 'Invalid Password! Make Sure It\'s Length Is More Than Or Equal To 8 Characters').isLength({min: 8}),
    body('password', "Invalid Password! Make Sure It Contains Both Case Letters, Numbers, and Special Characters").matches(`/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]))\S$/`)
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