const db = require("../config/db");

// GET DASHBOARD STATS
exports.getStats = (req, res) => {
  const stats = {};

  // total users
  db.query("SELECT COUNT(*) AS users FROM users", (err, userResult) => {
    if (err) return res.status(500).json(err);

    stats.users = userResult[0].users;

    // total products
    db.query("SELECT COUNT(*) AS products FROM products", (err, productResult) => {
      if (err) return res.status(500).json(err);

      stats.products = productResult[0].products;

      // total orders
      db.query("SELECT COUNT(*) AS orders FROM orders", (err, orderResult) => {
        if (err) return res.status(500).json(err);

        stats.orders = orderResult[0].orders;

        // total revenue
        db.query("SELECT SUM(total_amount) AS revenue FROM orders", (err, revenueResult) => {
          if (err) return res.status(500).json(err);

          stats.revenue = revenueResult[0].revenue || 0;

          res.json(stats);
        });
      });
    });
  });
};