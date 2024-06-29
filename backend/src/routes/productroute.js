const express = require("express")
const router = express.Router()
const controller=require("../controllers/productcontroller")
const userAuth=require('../middleware/UserAuth')

router.post("/products",controller.Postfind)
router.get("/products", controller.getAll)
router.get("/products/:id",controller.getbyID)
router.delete("/products/:id",controller.DeletebyID)
router.put("/products/:id",controller.PatchbyID)
module.exports = router