import express from 'express'
import UserRouter from './UserRouter.mjs'
import SubjectRouter from './SubjectRouter.mjs'

const Router = express.Router();

Router.use('/user',UserRouter);
Router.use('/subject',SubjectRouter);



export default Router;