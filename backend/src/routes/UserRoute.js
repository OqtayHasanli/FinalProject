const express = require("express")
const router = express.Router()
const controller=require("../controllers/UserController")

const userAuth=require('../middleware/UserAuth')

const basketController=require('../controllers/basketController')


router.post("/users",controller.Postfind)
router.get("/users",controller.getAll)
router.get("/users/:id",controller.getbyID)
router.delete("/users/:id",controller.DeletebyID)
router.patch("/users/:id",controller.PatchbyID)
router.post("/login",controller.login)
router.put('/addBasket',userAuth,basketController.addBasket)
router.put('/showBasket',userAuth,basketController.showBasket) 
router.put('/deleteBasket',userAuth,basketController.deleteBasket) 
module.exports = router