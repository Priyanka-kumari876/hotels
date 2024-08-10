const experss = require('express');
const router = experss.Router();
const menu = require('./../modules/menu');

router.post('/',async (req,res)=>{
    try{ 
     const data= req.body // assuming the request body contains the person data
 
     // create a new person document using the Mongoose model
     const newmenu =  new menu(data);
 
     // saving new person to the database
     const response = await newmenu.save();
     console.log('menu saved successfully');
     res.status(200).json(response);
 }
 
  catch(err){
     console.log(err);
     res.status(500).json({error:'internal server error'});
  }
     })
     router.get('/',async(req, res)=>{
        try{
            const data= await menu.find();
            console.log('data is fetched successfull');
            res.status(200).json(data);
        }
        catch(err){
            console.log(err);
            res.status(500).json({error:' server errors'});
        }
    })
// giving comment for git repostory

     module.exports = router;
