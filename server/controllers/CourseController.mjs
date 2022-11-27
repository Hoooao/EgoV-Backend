
import CourseModel from '../models/CourseModel.mjs';


const CourseController = {
    getCourses: async (req, res) => {
        const { num } = req.query;
        const courses = (await CourseModel.getCourses(num))[0];
        res.send({ ok: 1, courses });
    }
}


export default CourseController;


