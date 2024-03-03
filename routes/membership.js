const express = require("express");
const router = express.Router();
const { isAuth, isNotMember } = require("../middleware/authMiddleware");
const membership_Controller = require("../controllers/membershipController");

router.get("/", isAuth, isNotMember, membership_Controller.membership_get);

router.post("/", isAuth, isNotMember, membership_Controller.membership_post);
module.exports = router;
