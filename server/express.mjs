import path from 'path';
import url from 'url';
import express from 'express';
import session from 'express-session';
import mySQLSession from 'express-mysql-session'
import cors from 'cors'
import MainRouter from './routes/MainRouter.mjs'
import promisePool from './db.mjs';

const __dir = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();

// A configured obj for storing sessions
const MySQLStore = mySQLSession(session);
const sessionStore = new MySQLStore({},promisePool);

// Body-parser and serving files
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dir, '../../EgoV-Frontend/build')));
app.use(cors({
    origin:['http://localhost:3000'],
    methods:["GET","POST"],
    credentials:true
}))
// Set up session, req.session will be added after this mdw
app.use(session({
    key: 'ego_varsity_cookie',
	secret: 'asdnsm f,sf kajwnekjanms dsds',
    cookie:{
        maxAge:1000*60*60*24*3,
        secure:true,
    },
	store: sessionStore,
	resave: true,
    rolling:true,
	saveUninitialized: true
}))

// Check session expiration
app.use((req,res,next)=>{
    // If the user is in login, no action
    if(req.url.includes('login')||req.url.includes('signup')){
        next();
        return;
    }
    // 
    if(req.session.user){
        next();
    }else {
        // Block any API requests if expired
        // req.url.includes("api")? res.status(401).send({ok:0, message:"You do not have the authorization to view this site"}):
        // res.redirect("/login");

        // For testing
        next();
    }
})

// Router for all APIs
// /api is for avoiding conflict with react requests (if running on the same port)
app.use('/api',MainRouter);

// Serve React files
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dir, '../build', 'index.html'));
});

export default app;