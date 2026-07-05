const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const verifyToken = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post(
    "/add-product",
    verifyToken,
    adminMiddleware,
    adminController.addProduct
);

router.get("/products", verifyToken, adminController.getAllProducts);

router.delete("/product/:id", verifyToken, adminMiddleware, adminController.deleteProduct);

router.put(
    "/product/:id",
    verifyToken,
    adminMiddleware,
    adminController.updateProduct
);

module.exports = router;