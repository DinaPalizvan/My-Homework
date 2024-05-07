const {Router}= require("express")
const {getAllUsers, createUser}= require("../controllers/users.controllers")

const router= Router()


router.get("/", getAllUsers)

router.post("/", createUser)









module.exports = router