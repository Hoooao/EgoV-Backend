import express from 'express'
import CourseController from '../controllers/CourseController.mjs';

const router = express.Router();


router.get('/getCourses',CourseController.getCourses);
router.get('/getCoursesWithSubject',CourseController.getCoursesWithSubject);
router.get('/getCoursesWithID',CourseController.getCoursesWithID);


export default router;