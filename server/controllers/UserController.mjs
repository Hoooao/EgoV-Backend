
import UserModel from '../models/UserModel.mjs';
import bcrypt from 'bcrypt'

const saltRounds = 10;

const UserController = {
    // getUser is for login, the user detail would not be sent.
    getUser: async (req, res) => {
        const { username_mail, password } = req.body;
        const response = await UserModel.getUser(username_mail, password);
        if (response[0].length) {
            bcrypt.compare(password,
                response[0][0].psw_encrypted,
                function (err, result) {
                    if (err) console.log(err);
                    else {
                        if (result) {
                            res.send({ ok: 1, message: "Login Success" })
                        } else {
                            res.send({ ok: 0, message: "Password Incorrect" });
                        }
                    }
                });

        } else res.send({ ok: 0, message: "User does not exist" })
    },

    // addUser is for registration.
    addUser: async (req, res) => {
        const { username, email, password } = req.body;
        bcrypt.hash(password, saltRounds, async (err, psw_encrypted) => {
            if (err) {
                console.log(err)
                res.send({ ok: 0, message: "Please try again" });
            }
            else {
                const response = await UserModel.addUser(username, email, psw_encrypted);
                res.send({ ok: 1, message: "Signup Success" });
            }
        })


    },

    // getUserInfo is for profile
    getUserInfo: async(req,res)=>{
        const {id} = req.body;
        const response = (await UserModel.getUserInfo(id))[0][0];
        res.send(response); 
    },

    updateUserInfo: async(req,res)=>{
        const {id, name, description, avatar} =  req.body;
        const response = (await UserModel.getUserInfo(id))[0][0];
        const newInfo = {
            id,
            name:name? name : response.name,
            description:description? description : response.description,
            avatar:avatar? avatar : response.avatar
        }
        await UserModel.updateUserInfo(newInfo);
        res.send({ok:1});
    }
}


export default UserController;