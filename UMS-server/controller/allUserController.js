const allUsers = require("../models/alluserModel")       

exports.addUserController = async (req,res) => {
    console.log("inside allUserController");
    try{
    const {name,email,phone,age} = req.body;
        const addUser = await allUsers.create({name,email,phone,age});
        res.status(200).json(addUser);

    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }

}

exports.getUsersController = async (req,res) => {
    console.log("inside allUserController");
    try{
        const getallUsers = await allUsers.find();
        res.status(200).json(getallUsers);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

exports.getSingleUserController = async (req,res) => {
    console.log("inside getSingleUserController")
    const {id} = req.params;
    try{
        const getUser = await allUsers.findById(id);
        res.status(200).json(getUser);
        console.log(getUser);

    }catch(err){
        console.log(err);
        res.status(400).json(err);
        
    }
}

exports.updateUserController = async (req,res) => {
    console.log("inside updateUserController")
    const {id} = req.params;
    try{
        const updateUser = await allUsers.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateUser);
        console.log(updateUser);

    }catch(err){
        console.log(err);
        res.status(400).json(err);
        
    }
}
