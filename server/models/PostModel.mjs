import promisePool from "../db.mjs";


const PostModel = {
    getPostsWithUserID: async (id)=>{
        return await promisePool.query(`
        select * 
        from post
        where post.user_id = ?
        `,[id])
    }
}