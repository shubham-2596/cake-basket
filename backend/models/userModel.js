const db = require("../config/db");

const User = {
  create: (user, callback) => {
    const sql =
      "INSERT INTO users (name, email, password, phone, address) VALUES (?, ?, ?, ?, ?)";
    db.query(
      sql,
      [user.name, user.email, user.password, user.phone, user.address],
      callback
    );
  },

  findByEmail: (email, callback) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [email], callback);
  },
};

module.exports = User;