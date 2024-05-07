const {Router}= require("express")
const {
    getAllUsers,
    createUser,
    updateUser,
    }= require("../controllers/users.controllers")

const router= Router()


router.get("/", getAllUsers)

router.post("/", createUser)

router.put("/:id", updateUser)









module.exports = router