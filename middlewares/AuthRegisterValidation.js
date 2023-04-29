import {validationResult} from 'express-validator';

export const AuthRegisterValidation = (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next()
}