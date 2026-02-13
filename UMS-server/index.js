require('dotenv').config()
const express = require('express');
const cors = require('cors');
const router = require('./routes/router')
require('./config/db')

const UMSserver = express();
UMSserver.use(cors());
UMSserver.use(express.json())
UMSserver.use(router);


const PORT = 3000;

UMSserver.listen(PORT,()=>{
    console.log("UMS Server got Started... waiting for client request");
})

UMSserver.get('/',(req,res)=>{
    res.status(200).send("<h1>UMS Server Started.... Waiting for client request</h1>")
})