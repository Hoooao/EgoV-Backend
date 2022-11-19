
import UserModel from '../models/UserModel.mjs';

const UserController = {
    login: async(req,res)=>{
        const {userid_mail, password} = req.body;
        const response = await UserModel.login(userid_mail, password);
        res.send(response[0])
    }
}


export default UserController