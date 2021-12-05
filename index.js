const express = require('express')
const dataService = require("./data.services")
const cors = require('cors')
const db = require("./db")
const app = express()
app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}))
app.use(express.json())
var database

app.get('/',(req,res)=>{
    res.send("get method")
})

app.post('/addData',(req,res)=>{
    const result = dataService.addData(req.body.id,req.body.userName,req.body.date,req.body.budget)
    .then(result=>{
        res.status(result.status).json(result)
    })
   
})

app.get('/getData',(req,res)=>{
     db.User.find().then((result)=>{
         res.send(result)
     }).catch((err)=>{
         console.log(err);
     })
    
})

app.listen(3000,()=>{
    console.log("server started");
})
