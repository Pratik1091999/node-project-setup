const express = require("express");
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    partialUpdateUser,
    deleteUser
} = require("../../../controllers/api/v1/user");

// Create a new User
router.post("/", createUser);

// Get all Users
router.get("/", getAllUsers);

// Get User by ID
router.get("/:id", getUserById);

// Update User by ID
router.put("/:id", updateUser);

// Partially update User by ID
router.patch("/:id", partialUpdateUser);

// Delete User by ID
router.delete("/:id", deleteUser);

module.exports = router;
