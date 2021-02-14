const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')
const path = require('path')
const dotenv = require('dotenv');



dotenv.config({ path: './config.env' });



mongoose.connect(process.env.DATABASE_LOCAL,{
    createIndexes:false,
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
   
}).then(con=>{
//   console.log(con.connection)  
console.log('connection successful')
});

const app = express();

//middleware
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser())
app.use(expressValidator())




app.use('/api/v1',require('./routes/auth'))
app.use('/api/v1',require('./routes/category'))
app.use('/api/v1',require('./routes/products'))



const PORT = process.env.PORT || 3001;

app.listen(PORT , () =>{
  console.log(`App is running on port: ${PORT}`);
});