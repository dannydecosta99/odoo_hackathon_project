const express = require("express");
const router = express.Router();

const productController = require("../controllers/productcontroller");

router.post("/products", productController.addProduct);
router.get("/products", productController.getProducts);

module.exports = router;