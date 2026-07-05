const db = require("../config/db");

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { title, price, image, description, category } = req.body;

  const sql = `
    INSERT INTO products (title, price, image, description, category)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [title, price, image, description, category], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product added 🎂" });
  });
};

// GET ALL PRODUCTS
exports.getAllProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// DELETE PRODUCT
exports.deleteProduct = (req, res) => {
  db.query("DELETE FROM products WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Deleted" });
  });
};

// UPDATE PRODUCT
exports.updateProduct = (req, res) => {
  const { title, price, image, description, category } = req.body;

  const sql = `
    UPDATE products
    SET title=?, price=?, image=?, description=?, category=?
    WHERE id=?
  `;

  db.query(
    sql,
    [title, price, image, description, category, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product updated successfully 🎂" });
    }
  );
};