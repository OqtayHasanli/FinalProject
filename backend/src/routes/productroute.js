const express = require("express")
const router = express.Router()
const controller=require("../controllers/productcontroller")

router.post("/products",controller.Postfind)
router.get("/products",controller.getAll)
router.get("/products/:id",controller.getbyID)
router.delete("/products/:id",controller.DeletebyID)
router.patch("/products/:id",controller.PatchbyID)
module.exports = router