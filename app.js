const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const connectdb  = require('./config/db');


connectDB();


app.get('/',(req,res)=>{
    console.log('the api is working ');
    res.send('<p>this is working </p>');
})











app.listen(3000,()=> {
    console.log("The Server has started listening on port 3000");
});