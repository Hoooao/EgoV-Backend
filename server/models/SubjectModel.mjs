import promisePool from "../db.mjs";

const SubjectModel = {
    getSubjects: async (num) => {
        if(num){
            return await promisePool.query(
                `select * from subjects
                limit ${num}`
            )
        }else {return await promisePool.query(
            `select * from subjects`
        )
        }
    },
    getSubjectWithID: async(id)=>{
        return await promisePool.query(
            `select * from subjects
                where subjects.id = ${id}`
        )
    }
    
}

export default SubjectModel;