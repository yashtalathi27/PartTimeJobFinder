const express=require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route=require('./routes/route')
const app=express();


// Ensure you correctly initialize body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use('/',route);

app.listen(8001,()=>{
    console.log('Node.js server running on http://localhost:8001');
});