const express = require("express");
const router = express.Router();

// Either of the two works thesame
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControlers");
const userControlers = require("../controllers/userControlers");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", userControlers.loginUser);
router.get("/me", protect, getMe);

module.exports = router;
