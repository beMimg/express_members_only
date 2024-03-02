const express = require("express");
const router = express.Router();
const sign_inController = require("../controllers/sign_inController");

router.get("/", sign_inController.sign_in_get);

router.post("/", sign_inController.sign_in_post);
module.exports = router;
