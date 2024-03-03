const express = require("express");
const router = express.Router();
const { isAuth, isMember } = require("../middleware/authMiddleware");
const dashboard_Controller = require("../controllers/dashboardController");

router.get("/", isAuth, dashboard_Controller.dashboard_get);

router.post("/", isAuth, isMember, dashboard_Controller.dashboard_message_post);

module.exports = router;
