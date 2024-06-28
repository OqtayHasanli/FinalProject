const express = require("express")
const router = express.Router()
const controller=require("../controllers/AdminController")
// const userAuth=require('../middleware/UserAuth')


router.post("/loginAdmin",controller.loginAdmin)
router.post("/Admin",controller.Postadmin)
router.get("/Admin",controller.getAll)

module.exports = router