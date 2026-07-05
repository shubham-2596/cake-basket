const Cart = require("../models/cartModel");

// add to cart
exports.addCart = (req, res) => {
  const user_id = req.user.id;
  const { product_id, quantity } = req.body;

  Cart.addToCart(user_id, product_id, quantity, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Added to cart 🛒" });
  });
};

// get cart
exports.getCart = (req, res) => {
  const user_id = req.user.id;

  Cart.getCartItems(user_id, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// remove
exports.removeCartItem = (req, res) => {
  const id = req.params.id;

  Cart.removeItem(id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Removed" });
  });
};