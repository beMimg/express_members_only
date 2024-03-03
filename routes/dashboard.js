const express = require("express");
const router = express.Router();
const { isAuth } = require("../middleware/authMiddleware");
const dashboard_Controller = require("../controllers/dashboardController");

router.get("/", isAuth, dashboard_Controller.dashboard_get);

module.exports = router;
