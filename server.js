const express = require('express');
const app = express() ;
const dotenv = require('dotenv')
const port = 6000;
const personRoutes = require('./routes/personRoutes')

dotenv.config() ;
app.use(express.json()) ;

// connecting to Data base
const connectDB = require('./helpers/connectDB');
connectDB(); 


//Using routes with express Router
app.use(personRoutes)


app.listen(port , (err)=>err? console.log(err):console.log(`server is running on port ${port}`));

