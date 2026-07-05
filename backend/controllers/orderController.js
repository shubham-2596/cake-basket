const Order = require("../models/orderModel");
const db = require("../config/db");

// PLACE ORDER
exports.placeOrder = (req, res) => {
  const user_id = req.user.id;
  const { address, total, items } = req.body;

  // 1. create order
  Order.createOrder(user_id, total, address, (err, result) => {
    if (err) return res.status(500).json(err);

    const order_id = result.insertId;

    // 2. add items
    Order.addOrderItems(order_id, items, (err2) => {
      if (err2) return res.status(500).json(err2);

      // 3. clear cart
      db.query("DELETE FROM cart WHERE user_id = ?", [user_id]);

      res.json({
        message: "Order placed successfully 🎉",
        order_id
      });
    });
  });
};