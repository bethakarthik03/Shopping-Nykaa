// controllers/userController.js
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Received user data:", { name, email, password: "***" });

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email, password are required" });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const user = new User({ name, email, password });
    console.log("Saving user...");
    const savedUser = await user.save();
    console.log("User saved successfully:", savedUser._id);

    return res.json({ message: "User Registered" });
  } catch (err) {
    console.error("Error saving user:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });

    const token = createToken(user._id);

    return res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      // For security, don't reveal if user exists
      return res.status(200).json({ message: "If account exists, email sent" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    user.resetToken = token;
    user.resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000);
    await user.save();

    // TODO: send email with link that includes this token
    return res.json({ message: "Reset link generated", token });
  } catch (err) {
    console.error("Request reset error:", err);
    return res.status(500).json({ message: err.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ message: "token and newPassword required" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);
    if (
      !user ||
      user.resetToken !== token ||
      !user.resetTokenExpiry ||
      user.resetTokenExpiry < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    user.password = newPassword; // will get hashed by pre('save')
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    return res.json({ message: "Password updated" });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(400).json({ message: err.message });
  }
};
