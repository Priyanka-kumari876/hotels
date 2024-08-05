
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    
    address:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        uniq:true,
    },
    mobile:{
        type:Number,
    }
});
const person = mongoose.model('person',personSchema);
module.exports= person;