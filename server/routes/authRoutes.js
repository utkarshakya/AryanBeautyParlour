import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import {validateRegistration, validateLogin, handleValidationErrors} from './../validators/userValidator.js';

const   router = express.Router();

router.post('/register',validateRegistration, handleValidationErrors, registerUser);
router.post('/login',validateLogin, handleValidationErrors, loginUser);

export default router;