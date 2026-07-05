const db = require("../config/db");

const Cart = {

  addToCart: (user_id, product_id, quantity, callback) => {
    const sql =
      "INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)";

    db.query(sql, [user_id, product_id, quantity], callback);
  },

  getCartItems: (user_id, callback) => {
    const sql = `
      SELECT cart.id, cart.quantity,
      products.title,
      products.price,
      products.image
      FROM cart
      JOIN products ON cart.product_id = products.id
      WHERE cart.user_id = ?
    `;

    db.query(sql, [user_id], callback);
  },

  removeItem: (id, callback) => {
    const sql = "DELETE FROM cart WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Cart;