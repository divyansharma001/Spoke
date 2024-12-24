import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import helmet from "helmet";
import IndexRouter from './routes/index.route.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());

app.use(express.static('public'));

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/', IndexRouter);

app.get('/test', (req, res)=>{
    res.json({
        message: 'backend is working'
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})