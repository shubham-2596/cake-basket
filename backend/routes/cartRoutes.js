const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/add", verifyToken, cartController.addCart);

router.get("/", verifyToken, cartController.getCart);

router.delete("/:id", verifyToken, cartController.removeCartItem);

module.exports = router;