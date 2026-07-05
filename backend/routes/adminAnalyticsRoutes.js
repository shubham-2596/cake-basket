const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const analyticsController = require("../controllers/adminAnalyticsController");

router.get(
  "/stats",
  verifyToken,
  adminMiddleware,
  analyticsController.getStats
);

module.exports = router;