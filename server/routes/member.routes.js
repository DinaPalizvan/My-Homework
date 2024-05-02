const {Router}= require("express")
const {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
}=require("../controllers/member.controller")
const router=Router()



router.get("/member", getAllFacultyMembers)

router.post("/member", addFacultyMember)

router.delete("member/:id", deleteFacultyMember)

module.exports= router