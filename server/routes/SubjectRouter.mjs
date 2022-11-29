import express from 'express'
import SubjectController from '../controllers/SubjectController.mjs';

const router = express.Router();


router.get('/getSubjects',SubjectController.getSubjects);
router.get('/getSubjectWithID',SubjectController.getSubjectWithID);


export default router;