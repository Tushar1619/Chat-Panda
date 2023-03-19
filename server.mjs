import express from 'express';
const app = express();
app.use(express.json()) // post req ki body ko json me change krne ke liye
const data = []
app.get('/user',(req,res)=>{
    res.send(data);
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    data.push(req.body);
    res.send("User Created")
})

app.listen(3000,()=>{
    console.log("Listening On 3000");
})