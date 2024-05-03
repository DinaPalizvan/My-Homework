const {Router}= require("express")
const {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
}=require("../controllers/member.controller")
const router=Router()



router.get("/", getAllFacultyMembers)

router.post("/", addFacultyMember)

router.delete("/:id", deleteFacultyMember)

module.exports= router