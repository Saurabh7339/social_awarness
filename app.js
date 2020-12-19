const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://dante:123@cluster0.e4akl.mongodb.net/<dbname>?retryWrites=true&w=majority');

app.get('/',(req,res)=>{
    console.log('the api is working ');
    res.send(<p>this is working </p>);
})











app.listen(3000,()=> {
    console.log("The Server has started listening on port 3000");
});