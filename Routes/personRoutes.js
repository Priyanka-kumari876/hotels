const experss = require('express');
const router = experss.Router();
const person = require('./../modules/person.js');

router.post('/',async (req,res)=>{
    try{ 
     const data= req.body // assuming the request body contains the person data
 
     // create a new person document using the Mongoose model
     const newperson =  new person(data);
 
     // saving new person to the database
     const response = await newperson.save();
     console.log('data saved successfully');
     res.status(200).json(response);
 }
 
  catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error'});
  }
     })
 
     // Get method to get the persony
     router.get('/',async(req, res)=>{
         try{
             const data= await person.find();
             console.log('data is fetched successfull');
             res.status(200).json(data);
         }
         catch(err){
             console.log('cannot fetch data ');
             res.status(500).json({error:' server errors'});
         }
     })

     router.get('/:worktype',async(req , res)=>{
        try{
            const worktype = req.params.worktype;
            // extract work type from the url 
            if(worktype == 'chef'||worktype == 'manager'||worktype == 'waiter'){
                const response = await person.find({work: worktype});
                console.log('responsed fetched');
                res.status(200).json(response);
            }
            else{
                res.status(404).json({error : 'invalid work type'});
                // 404 not found status code
            }
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'})
        }
     })
     router.put('/:id',async(req ,res)=>{
        try{
        const personId = req.params.id;// extract the id from the url parameter
        const updatedPersonData = req.body;// updated data for the person
        const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,  // return the updated document
            runValidators: true, // run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);

    }
        catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
        }
     })
     router.delete('/:id' ,async(req, res)=>{
        try{
            const personId = req.params.id;
            const response = await person.findByIdAndDelete(personId);
            if(!response){
                return res.status(404).json({error: ' person not found'});
            }
            console.log('data deleted');
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:'internal server error'});
        } 
        
     })
    //  add some comment here
    
     module.exports = router;