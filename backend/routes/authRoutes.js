import express from 'express';
import { loginEmployee } from '../controllers/authController.js';

const authRouter = express.Router();

// Routes
authRouter.post('/register');
authRouter.post('/login', loginEmployee);
authRouter.put('/employee/:id');

export default authRouter;
