const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')


const app = express();
app.use(bodyparser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

// MongoDB Databases
const connexion = require('./connexion')
const Login  = require('./Schemas/Login')

// node mailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anitsquiz01@gmail.com',
        pass: 'xdrsndeyvghifkjw',
    },
});

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

app.post('/forgotpassword',(req,res) => {
    Login.find({username:req.body.uname})
    .then(res1 => {
        if(res1.length > 0) {
            const mailOptions = {
                from : 'anitsquiz01@gmail.com',
                to : res1[0].mailId,
                subject : 'Password Recovery Mail',
                text: `Dear Students,

                This is a reminder that the is scheduled on  at The quiz will last for  minutes.
                
                Please be prepared to participate on time and make the most of this opportunity. Good luck!
                
                Best regards,`
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return error.message
                }
            });    
            res.status(200).json(true);
        }
        else{
            res.status(404).json(false);
        }
    })
})

app.listen(8000,() => {
    console.log("Listening on 8000");
})
