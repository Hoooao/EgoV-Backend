import promisePool from "../db.mjs";

const UserModel = {
    getSubjects: async () => {
        return await promisePool.query(
            `select * from subjects
            `
        )
    },
    
}

export default UserModel;