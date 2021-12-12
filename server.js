const { strict } = require('assert');
const express =require('express');
const app= express();
const path = require('path');
const puppeteer = require("puppeteer");
var nodemailer = require('nodemailer');



app.use(express.urlencoded({extended:true}))
app.use( express.static(path.join(__dirname, 'public')))
app.use(express.json()); 




app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})


app.post('/',(req,res)=>{
console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rajahalder2118@gmail.com',
          pass: 'rajahalder12345'
        }
      });
    
      
    var mailOptions = {
        from: req.body.email,
        to: "monagujjar336@gmail.com",
        subjcet: "My porfolio comment",
    
        text:` ${req.body.message}.
         Phone no: ${req.body.phone}`
      };
    
    
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.redirect("/");
})















app.get('/cv',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'cv.html'))
})



app.post('/cv',async(req,res)=>{ 
  console.log(req.body)
    const url = path.resolve(__dirname,'./res/demo.html');

    const browser = await puppeteer.launch({
        headless: true
        
    });
    const webPage = await browser.newPage();
    await webPage.goto(url, {
        waitUntil: 'networkidle2'
    });
    const pdf = await webPage.pdf({
        printBackground: true,
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "0px"
        },
        height:"2000px",
        
        path: 'hn.pdf',
        preferCSSPageSize: true,
    });
    await browser.close();
    res.contentType("application/pdf");
    res.send(pdf);
})









app.listen('3000',()=>{
    console.log('server is working ');
})