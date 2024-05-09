const {Router}= require("express")
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
    }= require("../controllers/users.controllers")

const router= Router()


router.get("/", getAllUsers)

router.post("/", createUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser )

module.exports = router