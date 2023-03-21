import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json()) // post req ki body ko json me change krne ke liye
app.use(cors())
let data = []

//generate a random number
function getRandomNumber(){
    return Math.floor(Math.random()*1000000000);
}

app.get('/users',(req,res)=>{//to get all users
    res.send(data);
})

app.get('/user/:userId',(req,res)=>{//get a single user
    let flag = false;
    let id = req.params.userId;
    for(let i=0;i<data.length;i++){
        var possId = data[i].id;
        if(possId==id){
            flag = true;
            res.send(data[i]);
            break;
        }
    }
    if(flag == false){
        res.send("No match found")
    }
    
})

app.post('/user',(req,res)=>{
    let newUser = {
        id:getRandomNumber(),
        firstName:req.body.firstName,
        joke:req.body.joke,
    }
    data.push(newUser);
    res.send("User Created "+req.body.firstName);
    console.log(data);
})


app.put("/user/:userId",(req,res)=>{//update a user
    let id = req.params.userId;
    let idx = -1;
    for(let i=0;i<data.length;i++){
        var possId = data[i].id;
        if(possId==id){
            idx = i;
            break;
        }
    }
    
    if(idx==-1){
        res.send("No match found");
    }
    else{
        if(data[idx].firstName)
        data[idx].firstName = req.body.firstName;
        if(data[idx].joke)
        data[idx].joke = req.body.joke;
        res.send(data[idx]);
    }
})

app.delete("/user/:userId",(req,res)=>{//delete a user
    let id = req.params.userId;
    let idx = -1;
    for(let i=0;i<data.length;i++){
        var possId = data[i].id;
        if(possId==id){
            idx = i;
            break;
        }
    }
    if(idx==-1){
        res.send("No match found");
    }
    else{
        data.splice(idx,1);
        res.send("Deleted successfully")
    }
})

app.delete("/users",(req,res)=>{//delete all users
    data = [];
    res.send("All users deleted")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("Listening On 3000");
})