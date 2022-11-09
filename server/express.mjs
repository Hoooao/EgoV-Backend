import path from 'path';
import url from 'url';
import express from 'express';
import SearchRouter from './routes/search.mjs'
import fs from 'fs/promises'

const __dir = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dir, '../build')));

app.use('/api',SearchRouter);

app.get('*', (req, res,next) => {
    res.sendFile(path.resolve(__dir, '../build', 'index.html'));
});

export default app;