import promisePool from "../db.mjs";

const CourseModel = {
    getCourses: async (num) => {
        if (num) {
            return await promisePool.query(
                `select * from courses
                limit ${num}`
            )
        } else {
            return await promisePool.query(
                `select * from courses`
            )
        }
    },
    getCoursesWithSubject: async(subject_num)=>{
        return await promisePool.query(`
            select * from courses
            where courses.subject_num = ${subject_num}
        `)
    },
    getCoursesWithID: async(id)=>{
        return await promisePool.query(`
            select * from courses
            where courses.id = ${id}
        `)
    }

}

export default CourseModel;