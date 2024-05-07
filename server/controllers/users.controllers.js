const {
    getAllUsersModel,
    createUserModel,
    updateUserModel,
    }= require("../models/users.models")


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


const updateUser= async(req, res)=>{
    try {
        const updateId= Number(req.params.id)
        const result= await updateUserModel(updateId, req.body)
        res.status(200).send({updateId, ...req.body})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error!"})
    }
}



module.exports={
    getAllUsers, 
    createUser,
    updateUser,
} 