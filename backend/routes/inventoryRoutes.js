const express = require("express");
const router = express.Router();

const controller =  require('../controllers/inventoryController');
router.use("/", controller.getAllInventory);
router.use("/:id", controller.getInventoryByID)

module.exports = router;