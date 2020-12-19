const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const connectdb  = require('./config/db');

//connextion to db
connectDB();
//body-parser
app.use(express.json({extended:false}));


app.get('/',(req,res)=>{
    console.log('the api is working ');
    res.send('<p>this is working </p>');
});
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));



app.listen(3000,()=> {
    console.log("The Server has started listening on port 3000");
});