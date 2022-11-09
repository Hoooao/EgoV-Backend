import path from 'path';
import url from 'url';
import express from 'express';
import SearchRouter from './routes/search.mjs'

const __dir = path.dirname(url.fileURLToPath(import.meta.url));
const app = express();
app.use(express.json({extended: false}));
app.use(express.static(path.join(__dir, '../build')));

app.use('/api',SearchRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dir, '../build', 'index.html'));
});

export default app;