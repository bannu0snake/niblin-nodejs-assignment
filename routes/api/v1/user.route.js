// Libraries
const express = require("express");

// Middlewares
const authMiddleware = require("../../../middlewares/auth.middleware");

// Controllers
const userController = require("../../../controllers/v1/user.controller");

const router = express.Router();
router.get("/get_user", authMiddleware, userController.getUser);
router.get("/get_user/:user_id", authMiddleware, userController.getUserById);

module.exports = router;
