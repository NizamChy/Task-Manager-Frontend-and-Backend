const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Get all users (Admin only)
router.get("/:id", protect, getUserById); // Get a specific user
router.put("/:id", protect, updateUser); // Update user details
router.delete("/:id", protect, adminOnly, deleteUser); // Delete a user (Admin only)

module.exports = router;
