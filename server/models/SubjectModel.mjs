import promisePool from "../db.mjs";

const SubjectModel = {
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

export default SubjectModel;