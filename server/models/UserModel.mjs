import promisePool from "../db.mjs";

const UserModel = {
    login:async (userid_mail, password)=>{
        return await promisePool.query(
            `select * from users
            where (email = ? ) OR (name = ?)`,[userid_mail,userid_mail]
        )
    }
}

export default UserModel;