const express = require("express");
const router = express.Router();
const { isAuth, isMember } = require("../middleware/authMiddleware");
const user_Controller = require("../controllers/userController");

router.get("/:id", isAuth, isMember, user_Controller.user_get);

module.exports = router;
