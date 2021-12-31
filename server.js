
const express =require('express');
const app= express();
var nodemailer = require('nodemailer');
const fs = require("fs");
const path = require("path");
const cors= require('cors')
const pdf = require('html-pdf');
const ejs =require('ejs')
const port = process.env.prot || 3000;

app.use(express.urlencoded({extended:true}));
app.use( express.static(path.join(__dirname, 'public')));
app.use(express.json()); 
app.use(cors());
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

app.post('/rating',(req,res)=>{
  res.redirect("/");
  console.log(req.body.rating)
})


//cv maker pdf get 
app.get('/cv',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'cv.html'))
})

app.get('/getcv',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'res/views/my-cv.html'))
  const  config = {
    height:"20in",
    width:"12in",
    border: {
      "top": "0in",            // default is 0, units: mm, cm, in, px
      "right": "0in",
      "bottom": "0in",
      "left": "0in"
    },
  }
  
  
  
    pdf.create(res.render('res/views/my-cv.html'),config ).toStream((err, stream) => {
        if(err)
            return res.status(500).send({ "errorMessage": "an error occurred while creating the resume!" });
        res.writeHead(200, {
            'Content-Type': 'application/force-download',
            'Content-disposition': 'attachment; filename=Resume.pdf'
        });
        stream.pipe(res);
    });

    res.redirect("/");

})
app.post("/cv/per", (req, res) => {
  console.log(req.body);
const  config = {
  height:"20in",
  width:"12in",
  border: {
    "top": "0in",            // default is 0, units: mm, cm, in, px
    "right": "0in",
    "bottom": "0in",
    "left": "0in"
  },
}

const htmltemp =  fs.readFileSync(path.join(process.cwd(), 'res/views/demo.html'), 'utf8');
const temp = ejs.compile(htmltemp)
var html = temp(req.body);
  pdf.create(html,config ).toStream((err, stream) => {
      if(err)
          return res.status(500).send({ "errorMessage": "an error occurred while creating the resume!" });
      res.writeHead(200, {
          'Content-Type': 'application/force-download',
          'Content-disposition': 'attachment; filename=Resume.pdf'
      });
      stream.pipe(res);
  });
});
app.listen(port,()=>{
    console.log('server is working ');
})