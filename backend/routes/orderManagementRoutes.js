const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const orderManagementController = require("../controllers/orderManagementController");

// GET ALL ORDERS
router.get(
  "/orders",
  verifyToken,
  adminMiddleware,
  orderManagementController.getAllOrders
);

// UPDATE STATUS
router.put(
  "/orders/:id",
  verifyToken,
  adminMiddleware,
  orderManagementController.updateOrderStatus
);

module.exports = router;