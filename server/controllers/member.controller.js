const Member = require("../models/member.model")


const getAllFacultyMembers= async(req, res)=>{
    try {
        const members= await Member.find({})
        // console.log(members);
        res.status(200).json(members)
    } catch (error) {
        res.status(500).json({m: error})
    }
}


const addFacultyMember= async(req, res)=>{
    try {
        const memberData= req.body
        const newMember= await Member.create(memberData)
        res.status(201).json({m: newMember})
    } catch (error) {
        res.status(500).json({m: error})
    }
}


const deleteFacultyMember= async(req, res)=>{
    try {
        const {id: _id} = req.params
        await Member.findByIdAndDelete({_id})
        res.status(202).json({m: "deleted successfully"})
    } catch (error) {
        res.status(500).json({m: error})
    }
}


module.exports={
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
}