const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB Database Connection Successfull...");
    
}).catch(err=>{
     console.log("Database Connection Failed");
     console.log(err);
     
})
