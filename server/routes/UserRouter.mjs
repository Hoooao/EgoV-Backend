import express from 'express'
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

const logout = (req,res)=>{
    req.session.destroy(()=>{
        res.send({ok:1,message:"Logged out success"});
    })
}

const checkLoginState = (req,res)=>{
    if(req.session.user){
        res.send({ok:1,logged:1})
    }else {
        res.send({ok:1,logged:0})
    }
}

router.post('/login',UserController.getUser);
router.post('/signup',UserController.addUser)
router.post('/update_profile', UserController.updateUserInfo);
router.post('/add_suggestion',UserController.addSuggest)

router.get('/logout',logout);
router.get('/checkLoginState',checkLoginState);
router.get('/profile', UserController.getUserInfo);
router.get('/get_suggestion', UserController.getSuggest);
router.get('/get_user_info_with_id',UserController.getUserInfoWithID);


export default router;