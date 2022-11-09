import express from 'express';
import pool from '../db.mjs';

const router = express.Router();

router.get('/search', async (req, res) => {
    const content = req.query.content;
    //Simly for the convinence of milestone 2, will be changed to MVC form
    const queryRes = await pool.query(`select * from user 
        where user.User = ?`, [content]);
    console.log(queryRes[0][0])
    if (queryRes[0].length == 0) {
        res.send({ ok: 0, results: queryRes[0] });
    } else res.send({ ok: 1, results: queryRes[0][0].Host });
})

router.get('/show',async () => {
    const queryRes = await pool.query(`select * from posts 
    `);
    console.log(queryRes[0])
    if (queryRes[0].length == 0) {
        res.send({ ok: 0, results: queryRes[0] });
    } else res.send({ ok: 1, results: queryRes[0] });
})

// This route is simply for Mile2:

router.post('/submit', async (req, res) => {
    const body = req.body;
    console.log(req.body)
    const queryRes = await pool.query(`insert into posts (title,content) 
        values (?)`, [body['title'], body['content']]);
    res.send({ ok: 0 });
})

export default router;