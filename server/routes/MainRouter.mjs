import express from 'express'
import UserRouter from './UserRouter.mjs'
import SubjectRouter from './SubjectRouter.mjs'
import CourseRouter from './CourseRouter.mjs'

const Router = express.Router();

Router.use('/user',UserRouter);
Router.use('/subject',SubjectRouter);
Router.use('/course',CourseRouter);



export default Router;