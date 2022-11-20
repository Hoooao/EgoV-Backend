import promisePool from "../db.mjs";

const UserModel = {
    getUser: async (userid_mail, password) => {
        return await promisePool.query(
            `select * from users
            where (email = ? ) OR (name = ?)`, [userid_mail, userid_mail]
        )
    },
    addUser: async (username, email, password) => {
        return await promisePool.query(
            `insert into users (email, name, psw_encrypted)
                values(?,?,?)`,
            [email, username, password]
        )
    },

    getUserInfo: async (id) => {
        return await promisePool.query(
            `select id,email,name,description,avatar from users
            where (id = ?)`, [id]
        )
    },

    updateUserInfo: async(newInfo)=>{
        const {des, avatar, name, id} = newInfo;
        return await promisePool.query(
            `update users
                set description = ?, avatar = ?, name = ?
                where id = ?`,
                [des,avatar,name,id]
        )
    },

    addSuggest: async(id,type,desc)=>{
        return await promisePool.query(
            `insert into suggestions (user_id,type,content)
                values (?,?,?)`,[id,type,desc]
        )
    }
}

export default UserModel;