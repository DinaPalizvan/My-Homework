const {getAllUsersModel, createUserModel}= require("../models/users.models")


const getAllUsers=async(req, res)=>{
    try {
        const users= await getAllUsersModel()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({message: "internal server error!"})
        console.log(error);
    }
}

const createUser= async(req, res)=>{
    try {
        const userId= await createUserModel(req.body)
        res.status(200).send({userId, ...req.body})
    } catch (error) {
        res.status(500).json({message: "internal server error!"})
        console.log(error);
    }
} 



module.exports={
    getAllUsers, 
    createUser
} 