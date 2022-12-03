import promisePool from "../db.mjs";


const PostModel = {
    addPost: async (post) => {
        console.log(post)
        const { user_id, length, date, content,
            description, title, img_url } = post;
        return await promisePool.query(
            `insert into posts (user_id, length, date, content,
                description, title, img_url, type)
                values(?,?,?,?,?,?,?,1)`,
            [user_id, length, date, content,
                description, title, img_url]
        )
    },
    addNote: async (post) => {
        const { user_id, length, date, content,
            description, title, img_url } = post;
        return await promisePool.query(
            `insert into posts (user_id, length, date, content,
                description, title, type)
                values(?,?,?,?,?,?,2)`,
            [user_id, length, date, content,
                description, title]
        )
    },

    getPostsWithUserID: async (id) => {
        return await promisePool.query(`
        select * 
        from posts
        where posts.user_id = ?
        `, [id])
    }
}

export default PostModel;