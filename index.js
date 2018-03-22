const express = require('express');
const app = express();

// getting-started.js
const mongoose = require('mongoose');
const config = require('./config/database')
const path = require('path');



mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('Not connected', err)
    }
    else{
        console.log('connected to database: ' + config.db)
    }
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});



app.use(express.static(__dirname + '/client/dist/'));


app.get('/', (req,res) => {
    res.sendfile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000,()=>{
console.log('Listening to port 3000')
});