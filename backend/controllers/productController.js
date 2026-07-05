const Product = require("../models/productModel");

// ADD PRODUCT (ADMIN)
exports.addProduct = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Product added successfully 🍰",
      data: result,
    });
  });
};

// GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
  Product.getAll((err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// GET SINGLE PRODUCT
exports.getProductById = (req, res) => {
  const id = req.params.id;

  Product.getById(id, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};