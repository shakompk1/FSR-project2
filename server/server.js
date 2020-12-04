const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'shakompk@gmail.com',
        pass: 'Saxriyar002'
    }
};


const transporter = nodemailer.createTransport(smtpConfig);

app.post('/feedback',function(req,res){     
    const { name ,email,mobile,comments} = req.body;
    const mailOptions = {
        from: 'aedqwe@gmail.com',
        to: 'shakompk@gmail.com',
        subject: 'Sending Email using Node.js',
        text: `Имя:${name}\nПочта:${email}\nМобильный:${mobile}\nКомент:${comments}`
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            res.json('false');
        }else{
            res.json('true');
        }
        res.send('OK');
    });
});
app.get('/sasa',function(req,res){
    res.json('ok')
})
app.use(express.static(path.join(__dirname, '../')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'))
})
app.listen(port, () => { console.log('Serve online') })