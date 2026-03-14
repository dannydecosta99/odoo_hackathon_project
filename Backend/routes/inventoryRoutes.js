const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventoryController");

router.post("/inventory/in", inventoryController.stockIn);
router.post("/inventory/out", inventoryController.stockOut);
router.get("/movements", inventoryController.getMovements);

module.exports = router;