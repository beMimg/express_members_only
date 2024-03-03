const express = require("express");
const router = express.Router();
const sign_inController = require("../controllers/sign_inController");
const { isUnauthSign } = require("../middleware/authMiddleware");

router.get("/", isUnauthSign, sign_inController.sign_in_get);

router.post("/", sign_inController.sign_in_post);

module.exports = router;
