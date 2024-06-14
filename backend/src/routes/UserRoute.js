const express = require("express")
const router = express.Router()
const controller=require("../controllers/UserController")

router.post("/users",controller.Postfind)
router.get("/users",controller.getAll)
router.get("/users/:id",controller.getbyID)
router.delete("/users/:id",controller.DeletebyID)
router.patch("/users/:id",controller.PatchbyID)
router.post("/login",controller.login)
module.exports = router