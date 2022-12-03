import express from 'express'
import UserRouter from './UserRouter.mjs'
import SubjectRouter from './SubjectRouter.mjs'
import CourseRouter from './CourseRouter.mjs'
import PostRouter from './PostRouter.mjs'

const Router = express.Router();

Router.use('/user',UserRouter);
Router.use('/subject',SubjectRouter);
Router.use('/course',CourseRouter);
Router.use('/post',PostRouter);



export default Router;