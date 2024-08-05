const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bio');
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server successfully');
})
db.on('error',()=>{
    console.log('could not connect');
})
db.on('disconnected',()=>{
    console.log('disconnected from mongodb server')
})


