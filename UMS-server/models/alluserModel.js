const  mongoose  = require("mongoose")
const { model } = mongoose;

const alluserSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        
    },
    age:{
        type:String,
        required:true,
        
    },
    

})


const allusers = model('allusers',alluserSchema)

module.exports = allusers