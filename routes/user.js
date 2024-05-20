// Required modules
import express from 'express';
import {register , login, profile} from '../controllers/userController.js';
import {verifyInputForSignUp, verifyToken, verifyInputForLogin} from '../middleware/auth.js';

// Initialize router
const router = express.Router();

// Route for user signup
router.post('/api/signup', verifyInputForSignUp, register);

// Route for user login
router.post('/api/login',verifyInputForLogin, login);

// Route for user profile
router.post('/api/profile', verifyToken, profile);

export default router;