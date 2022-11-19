import express from 'express'
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

router.post('/login',UserController.getUser);
router.post('/signup',UserController.addUser)
router.post('/profile', UserController.getUserInfo);
router.post('/update_profile', UserController.updateUserInfo);


export default router;