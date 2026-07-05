const db = require("../config/db");

const Order = {

  createOrder: (user_id, total, address, callback) => {
    const sql = `
      INSERT INTO orders (user_id, total_amount, address)
      VALUES (?, ?, ?)
    `;
    db.query(sql, [user_id, total, address], callback);
  },

  addOrderItems: (order_id, items, callback) => {
    const values = items.map(item => [
      order_id,
      item.product_id,
      item.quantity,
      item.price
    ]);

    const sql = `
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES ?
    `;

    db.query(sql, [values], callback);
  }

};

module.exports = Order;