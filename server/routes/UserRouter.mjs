import express from 'express'
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

router.post('/login',UserController.login);
//router.get('/signup',UserController.signup)


export default router;