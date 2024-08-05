const mongoose = require('mongoose')
const infoSchema = new mongoose.Schema({
    age:{
        type:Number,
        required:true,
    },
    height:{
        type:String,
    },
   
    num_degrees:{
        type: Number,
    },
    degrees_name:{
        type:String,
        enum:['matriculation', 'intermediate', 'btech']
    },
   
    job_experiences:{
        type:String,
        
    }
})
const info = mongoose.model('info',infoSchema);
module.exports= info;