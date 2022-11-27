import promisePool from "../db.mjs";

const CourseModel = {
    getCourses: async (num) => {
        if(num){
            return await promisePool.query(
                `select * from courses
                limit ${num}
                `
            )
        }else {return await promisePool.query(
            `select * from courses
            `
        )
        }
    },
    
}

export default CourseModel;