const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const log_inController = require("../controllers/log_inController");

router.get("/", log_inController.log_in_get);

router.post("/", log_inController.log_in_post);
module.exports = router;
