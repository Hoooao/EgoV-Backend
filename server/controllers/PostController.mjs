
import PostModel from '../models/PostModel.mjs';

const SubjectController = {
    // getUser is for login, the user detail would not be sent.
    getPostsWithUserID: async (req, res) => {
        const { id } = req.query;
        const posts = (await PostModel.getPostsWithUserID(id))[0];
        res.send({ ok: 1, posts });
    },
}