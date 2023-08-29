const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')


const app = express();
app.use(bodyparser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

// MongoDB Databases
const connexion = require('./connexion')
const Login  = require('./Schemas/Login')

app.post('/login',(req,res) => {
    const uname = req.body.uname
    const pwd = req.body.pwd
    Login.find({username:uname,password:pwd})
    .then(response => {
        if(response.length>0){
            res.send({login:true})
        }else{
            res.send({login:false})
        }
    })
    .catch(err => {
        console.log(err);
        res.send({login:false})
    })
})

app.listen(8000,() => {
    console.log("Listening on 8000");
})