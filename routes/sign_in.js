const express = require("express");
const router = express.Router();
const sign_inController = require("../controllers/sign_inController");
const { isUnauth } = require("../middleware/authMiddleware");

router.get("/", isUnauth, sign_inController.sign_in_get);

router.post("/", isUnauth, sign_inController.sign_in_post);

module.exports = router;
