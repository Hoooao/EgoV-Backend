import express from 'express'
import UserRouter from './UserRouter.mjs'

const Router = express.Router();

Router.use('/user',UserRouter);



export default Router;