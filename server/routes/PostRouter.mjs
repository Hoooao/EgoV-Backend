import express from 'express'
import PostController from '../controllers/PostController.mjs';

const router = express.Router();

router.post('/addPost', PostController.addPost);
router.post('/addNote', PostController.addNote);

router.get('/getPostsWithUserID', PostController.getPostsWithUserID);

export default router;