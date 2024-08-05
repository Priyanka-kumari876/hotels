const express = require('express');
const app = express();
const db = require('./db.js');

const person = require('./person.js');
const info = require('./info.js')
 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.post('/permit', async(req,res)=>{
    try{
        const data = req.body;
        const newperson = new person(data);
        const response = await newperson.save();
        console.log('data is saved succussfully');
        res.status(200).json(response);
    
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({error:'server error'})
    }
})
app.get('/permit', async(req,res)=>{
    try{
   
        const data = await person.find();
        console.log('data is fetched succussfully');
        res.status(200).json(data);

    
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({error:"couldn'd get data"})
    }
})
app.post('/info' , async(req ,res)=>{
    try{
    const imf = req.body;
    const newinfo = new info(imf);
    const saved =await newinfo.save();
    console.log('information added successsfull');
    res.status(200).json(saved);
}
catch(err){
    console.log(err);
    res.status(500).json({error:'server error '})
}

})
app.get('/info', async(req,res)=>{
    try{
        const data = await info.find();
        console.log("data is fetched ");
        res.status(200).json(data);
    }
    catch(err){
        console.log("couldn't fetch");
        console.log(err);
        res.status(500).json({error:'some error happened'})
    }
})

app.listen(3000,()=>{
    console.log("server  running at port 3000")
})