const mongoose = require('mongoose');

// define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect('mongodb://127.0.0.1:27017/hotels');

// can replace mydatabase with your database name

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// })


// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection,
const db = mongoose.connection;
// Define even listeners for database connection

db.on('connected',()=>{
    console.log('connected to mongodb server');
    
})
db.on('error',()=>{
    console.log('connection error ');
    
})
db.on('disconnected',()=>{
    console.log('disconnected from mongo server');
    
})



