import express  from "express"; 
import { login,register } from "../controllers/auth.controller.js";
import {body} from 'express-validator';
import {AuthRegisterValidation} from "../middlewares/AuthRegisterValidation.js" // Middleware for validation
const router = express.Router(); //middleware para gestionar de mejor manera nuestras rutas



router.post('/register',[ //para validar
    body('email',"Formato incorrecto").isEmail().normalizeEmail(),
    body("password","Minimo 6 chars").isLength({min:6})
],
AuthRegisterValidation,
register)


router.post('/login',[
    body('email',"Formato incorrecto").isEmail().normalizeEmail(),
    body("password","Minimo 6 chars").isLength({min:6})
],
AuthRegisterValidation,
login)


export default router;
