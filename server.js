const express = require('express');
const app = express();
const db = require('./db.js');



 const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
// req.body
 app.get('/',(req,res)=>{
    res.send('welcome to our Hotel')
 })

   
        //  import the router files
        const peronRoutes = require('./Routes/personRoutes.js');

        // use the routers
        app.use('/person',peronRoutes);
            
        const menuitemRoutes = require('./Routes/menuitemsRoutes.js');
        app.use ('/menu',menuitemRoutes);

app.listen(3000 ,()=>{
    console.log('listening at port 3000')
})