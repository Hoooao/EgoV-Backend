import express from 'express'
import SubjectController from '../controllers/SubjectController.mjs';

const router = express.Router();


router.get('/getSubjects',SubjectController.getSubjects);


export default router;