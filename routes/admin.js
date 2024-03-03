const express = require("express");
const router = express.Router();
const { isAuth, isNotAdmin } = require("../middleware/authMiddleware");
const admin_Controller = require("../controllers/adminController");

router.get("/", isAuth, isNotAdmin, admin_Controller.admin_get);

router.post("/", isAuth, isNotAdmin, admin_Controller.admin_post);

module.exports = router;
