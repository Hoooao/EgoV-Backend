import express from 'express'
import CourseController from '../controllers/CourseController.mjs';

const router = express.Router();


router.get('/getCourses',CourseController.getCourses);


export default router;