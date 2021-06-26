const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//imports routes
const authRoute =require('./routes/auth');


dotenv .config();


//connect to Db
mongoose.connect(process.env.Db_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected to db')
       // app.listen(3000)
       )
    .catch((err) => console.log(err));
mongoose.Promise=global.Promise;


//Middleware
app.use(express.json());
//routes middlewares
app.use('/api/user',authRoute);



//listening to port
app.listen(3000,()=>console.log('server is running'));