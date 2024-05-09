const {
    getAllUsersModel,
    createUserModel,
    updateUserModel,
    deleteUserModel
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
        await updateUserModel(updateId, req.body)
        res.status(200).send({updateId, ...req.body})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error!"})
    }
}


const deleteUser= async(req, res)=>{
    try {
        const id= Number(req.params.id)
        await deleteUserModel(id)
        res.status(200).json({message: "deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server error!"})
    }
}


module.exports={
    getAllUsers, 
    createUser,
    updateUser,
    deleteUser
} 