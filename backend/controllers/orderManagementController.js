const db = require("../config/db");

// GET ALL ORDERS
exports.getAllOrders = (req, res) => {

  const sql = `
    SELECT 
      orders.*,
      users.name,
      users.email
    FROM orders
    JOIN users ON orders.user_id = users.id
    ORDER BY orders.created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// UPDATE ORDER STATUS
exports.updateOrderStatus = (req, res) => {

  const { status } = req.body;

  db.query(
    "UPDATE orders SET status=? WHERE id=?",
    [status, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Order status updated 🎉"
      });
    }
  );
};