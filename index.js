import express from 'express';

const app = express();

app.get('/', (req,res,next)=>{
  res.send('Todo ok!')
})

app.listen(5000, ()=> console.log('Server On'))