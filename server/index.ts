import express from 'express'
import 'dotenv/config'
import IndexRouter from './routes/index.route';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/', IndexRouter);

app.get('/test', (req, res)=>{
    res.send('Backend is working');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})