const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// REGISTER
exports.register = (req, res) => {
  const { name, email, password, phone, address } = req.body;

  // check user exists
  User.findByEmail(email, async (err, result) => {
    if (result.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    };

    User.create(newUser, (err, data) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "User registered successfully" });
    });
  });
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, async (err, result) => {
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role   // 👈 ADD THIS LINE
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
    });
  });
};