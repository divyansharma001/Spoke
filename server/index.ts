import express from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Backend in up and running !!');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on  http://localhost:${PORT}`);
})