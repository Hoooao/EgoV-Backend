import promisePool from "../db.mjs";

const UserModel = {
    getSubjects: async (num) => {
        if(num){
            return await promisePool.query(
                `select * from subjects
                limit ${num}
                `
            )
        }else {return await promisePool.query(
            `select * from subjects
            `
        )
        }
    },
    
}

export default UserModel;