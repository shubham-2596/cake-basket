const db = require("../config/db");

const Product = {
  create: (product, callback) => {
    const sql = `
      INSERT INTO products 
      (title, description, price, old_price, discount, rating, category, image, delivery_time)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        product.title,
        product.description,
        product.price,
        product.old_price,
        product.discount,
        product.rating,
        product.category,
        product.image,
        product.delivery_time,
      ],
      callback
    );
  },

  getAll: (callback) => {
    const sql = "SELECT * FROM products ORDER BY id DESC";
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = "SELECT * FROM products WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Product;