import express from 'express'
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

const logout = (req,res)=>{
    req.session.destroy(()=>{
        res.send({ok:1,message:"Logged out success"});
    })
}

router.post('/login',UserController.getUser);
router.post('/signup',UserController.addUser)
router.post('/update_profile', UserController.updateUserInfo);
router.post('/suggestion',UserController.addSuggest)
router.post('/logout',logout);
router.get('/profile', UserController.getUserInfo);


export default router;