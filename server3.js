const express = require('express');
const app = express();
 const db = require('./db.js');

 const person = require('./modules/person.js');
 const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
// req.body
app.post('/person', (req,res)=>{
    const data= req.body
    // assuming the request body contains the person data

    // create a new person document using the Mongoose model
    const newperson =  new person(data);

    // newperson.name  = data.name;
    // newperson.age = data.age;
    // newperson.mobile = data.mobile;
    // newperson.address  = data.address;
    // newperson.email = data.email;
    
    // save the new person to the database

    // old method
    // newperson.save((error , saveperson) =>{
    //     if(error){
    //         console.log('error saving person:',error);
    //         res.status(500).json({error:'internal server error'});
    //     }
    //     else{
    //         console.log('data is successfully saved');
    //         res.status(200).json(saveperson);
    //     }
    // })



    
})



// get--reading type only 
app.get('/',function(req,res){
    res.send('Welcome to the get part.....')
})
// app.get('/question', (req,res)=>{
//     res.send("How can i help you ?....Ask your quories  ")
// })
// app.get('/itli', (req,res)=>{
//     var customized_idli = {
//         name:'rava itli',
//         size: '9cm diameter',
//         is_sambar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
// })
// app.post('/items',(req,res)=>{
//     res.send('data is saved successfully');
// })
app.listen(3000 ,()=>{
    console.log('listening at port 3000')
})
