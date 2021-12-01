const { strict } = require('assert');
const express =require('express');
const app= express();
const path = require('path');
app.use( express.static(path.join(__dirname, 'public')))


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
app.listen('3000',()=>{
    console.log('server is working ');
});