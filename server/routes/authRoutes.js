import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { validateUserRegistration, handleValidationErrors } from '../validators/validateUserRegistration.js';

const   router = express.Router();

router.post('/register', validateUserRegistration, handleValidationErrors, registerUser);
router.post('/login', loginUser);

export default router;