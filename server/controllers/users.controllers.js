const {getAllUsersModel}= require("../models/users .models")


const getAllUsers=async(req, res)=>{
    try {
        const users= await getAllUsersModel()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({message: "internal server error!"})
    }
}



module.exports={getAllUsers}