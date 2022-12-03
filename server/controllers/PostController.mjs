
import PostModel from '../models/PostModel.mjs';

const PostController = {
    addNote:async (req,res)=>{
        
    },
    addPost:async (req,res)=>{
        const {post} = req.body;
        await PostModel.addPost(post);
        res.send({ ok: 1 });
    },
    getPostsWithUserID: async (req, res) => {
        const { id } = req.query;
        const posts = (await PostModel.getPostsWithUserID(id))[0];
        //console.log(posts)
        res.send({ ok: 1, posts });
    },
    
}

export default PostController;