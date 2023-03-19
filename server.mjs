import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json()) // post req ki body ko json me change krne ke liye
app.use(cors())
const data = []
app.get('/user',(req,res)=>{
    res.send(data);
})

app.post('/user',(req,res)=>{
    
    data.push(req.body);
    res.send("User Created"+req.body.name);
    console.log(data);
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Listening On 3000");
})